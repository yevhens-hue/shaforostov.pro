const buttons = Array.from(document.querySelectorAll("[data-lang-switch]"));
const themeToggle = document.querySelector("[data-theme-toggle]");
const scrollLinks = Array.from(document.querySelectorAll("[data-scroll]"));
const reveals = Array.from(document.querySelectorAll(".reveal"));
const html = document.documentElement;
const body = document.body;

const setLang = (lang) => {
  body.dataset.lang = lang;
  html.lang = lang;
  buttons.forEach((button) => {
    const isActive = button.dataset.langSwitch === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  try {
    localStorage.setItem("site-lang", lang);
  } catch (error) {
    console.warn("Language preference not saved.", error);
  }
};

const getSavedLang = () => {
  try {
    return localStorage.getItem("site-lang");
  } catch (error) {
    return null;
  }
};

const setTheme = (theme) => {
  body.dataset.theme = theme;
  const isDark = theme === "dark";
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  }
  try {
    localStorage.setItem("site-theme", theme);
  } catch (error) {
    console.warn("Theme preference not saved.", error);
  }
};

const getSavedTheme = () => {
  try {
    return localStorage.getItem("site-theme");
  } catch (error) {
    return null;
  }
};

const maybeLoadAnalytics = () => {
  const url = body.dataset.analyticsUrl;
  const websiteId = body.dataset.analyticsId;
  if (!url || !websiteId) {
    return;
  }

  const script = document.createElement("script");
  script.src = url;
  script.defer = true;
  script.dataset.websiteId = websiteId;
  script.dataset.autoTrack = "true";
  document.head.appendChild(script);
};

const initialLang = getSavedLang() || body.dataset.lang || "en";
setLang(initialLang);
maybeLoadAnalytics();

const initialTheme = getSavedTheme() || body.dataset.theme || "light";
setTheme(initialTheme);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setLang(button.dataset.langSwitch);
  });
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

const getVisibleAnchorTarget = (anchor) => {
  const candidates = Array.from(document.querySelectorAll(`[data-anchor="${anchor}"]`));
  return candidates.find((element) => element.offsetParent !== null);
};

const scrollToAnchor = (anchor, updateHash = true) => {
  const target = getVisibleAnchorTarget(anchor);
  if (!target) {
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  if (updateHash) {
    history.pushState(null, "", `#${anchor}`);
  }
};

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const anchor = link.dataset.scroll;
    if (anchor) {
      scrollToAnchor(anchor);
    }
  });
});

window.addEventListener("hashchange", () => {
  const anchor = window.location.hash.replace("#", "");
  if (anchor) {
    scrollToAnchor(anchor, false);
  }
});

const initialAnchor = window.location.hash.replace("#", "");
if (initialAnchor) {
  setTimeout(() => scrollToAnchor(initialAnchor, false), 0);
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}
