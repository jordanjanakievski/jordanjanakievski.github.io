import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/entry/layout.svelte.16ea6c19.js","_app/immutable/chunks/index.fa24064b.js","_app/immutable/entry/_layout.ts.984db11e.js","_app/immutable/chunks/_layout.da46b06b.js"];
export const stylesheets = [];
export const fonts = [];
