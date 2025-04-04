

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reviews/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CHl2JfR7.js","_app/immutable/chunks/scheduler.CkD6cNMD.js","_app/immutable/chunks/index.Bd7vDCrq.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/runtime.cDzubLXl.js","_app/immutable/chunks/index.B89jQWE0.js"];
export const stylesheets = ["_app/immutable/assets/5.Ksm6bA9Q.css"];
export const fonts = [];
