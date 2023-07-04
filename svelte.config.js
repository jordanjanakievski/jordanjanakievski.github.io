import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(
            {
                // default options are shown
                pages: 'docs',
                assets: 'docs',
                fallback: undefined,
            }
        ),
        paths: {
            base: "/jordanjanakievski.github.io",
        }
    }
};

export default config;
