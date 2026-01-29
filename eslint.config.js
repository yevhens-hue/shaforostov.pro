const nextCoreWebVitals = require("eslint-config-next/core-web-vitals");

module.exports = [
  ...nextCoreWebVitals,
  {
    files: ["components/LocaleThemeToggle.tsx", "components/PageClient.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off"
    }
  }
];
