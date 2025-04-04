import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DQ2_mm23.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/runtime.cDzubLXl.js","_app/immutable/chunks/index.B89jQWE0.js","_app/immutable/chunks/scheduler.CkD6cNMD.js","_app/immutable/chunks/index.Bd7vDCrq.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/0.DBQvdgio.css","_app/immutable/assets/Contact.CJAdomNu.css"];
export const fonts = [];
