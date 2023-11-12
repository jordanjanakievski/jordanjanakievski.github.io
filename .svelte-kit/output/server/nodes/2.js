

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1516fc6d.js","_app/immutable/chunks/index.dba1dfee.js"];
export const stylesheets = ["_app/immutable/assets/2.853bc628.css"];
export const fonts = [];
