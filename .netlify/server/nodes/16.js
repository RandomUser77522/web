

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/tmj/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.BGphFSAP.js","_app/immutable/chunks/scheduler.CkD6cNMD.js","_app/immutable/chunks/index.Bd7vDCrq.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/runtime.cDzubLXl.js","_app/immutable/chunks/index.B89jQWE0.js"];
export const stylesheets = ["_app/immutable/assets/styles.DsHYD2OA.css"];
export const fonts = [];
