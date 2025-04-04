import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.tc28NYia.js","_app/immutable/chunks/scheduler.CkD6cNMD.js","_app/immutable/chunks/index.Bd7vDCrq.js"];
export const stylesheets = ["_app/immutable/assets/3.BpUjVEks.css"];
export const fonts = [];
