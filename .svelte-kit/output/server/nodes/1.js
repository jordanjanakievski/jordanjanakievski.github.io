

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.20007425.js","_app/immutable/chunks/index.dba1dfee.js","_app/immutable/chunks/singletons.5d1c318b.js"];
export const stylesheets = [];
export const fonts = [];
