

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.COgLMqgE.js","_app/immutable/chunks/scheduler.CkD6cNMD.js","_app/immutable/chunks/index.Bd7vDCrq.js","_app/immutable/chunks/runtime.cDzubLXl.js","_app/immutable/chunks/index.B89jQWE0.js"];
export const stylesheets = ["_app/immutable/assets/3.BpUjVEks.css"];
export const fonts = [];
