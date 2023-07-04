import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/entry/layout.svelte.8a1e0f6e.js","_app/immutable/chunks/index.d0ee150e.js","_app/immutable/entry/_layout.ts.822e9be0.js","_app/immutable/chunks/_layout.79cb23d1.js"];
export const stylesheets = [];
export const fonts = [];
