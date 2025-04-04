import { r as registerLocaleLoader, i as init, w as waitLocale } from "../../chunks/runtime.js";
const defaultLocale = "en";
registerLocaleLoader("en", () => import("../../chunks/en.js"));
registerLocaleLoader("th", () => import("../../chunks/th.js"));
registerLocaleLoader("cn", () => import("../../chunks/cn.js"));
init({
  fallbackLocale: defaultLocale,
  initialLocale: defaultLocale
});
const load = async () => {
  await waitLocale();
};
export {
  load
};
