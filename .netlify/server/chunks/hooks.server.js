import { b as $locale } from "./runtime.js";
const securityHeaders = {
  "Cross-Origin-Opener-Policy": "same-origin"
};
const handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  Object.entries(securityHeaders).forEach(
    ([header, value]) => response.headers.set(header, value)
  );
  const lang = event.request.headers.get("accept-language")?.split(",")[0];
  if (lang) {
    $locale.set(lang);
  }
  return response;
};
export {
  handle
};
