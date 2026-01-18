const buttons = Array.from(document.querySelectorAll("[data-lang-switch]"));
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

const initialLang = getSavedLang() || body.dataset.lang || "en";
setLang(initialLang);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setLang(button.dataset.langSwitch);
  });
});
