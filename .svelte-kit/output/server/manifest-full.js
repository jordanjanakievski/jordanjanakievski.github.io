export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/artist-palette.svg","icons/chess-pawn.svg","icons/clipboard.svg","icons/desktop-computer.svg","icons/e-mail.svg","icons/github.svg","icons/gitlab.svg","icons/linkedin.svg","icons/man-climbing-light-skin-tone.svg","icons/microscope.svg","icons/racing-car.svg","icons/soccer-ball.svg","icons/t-shirt.svg","icons/tropical-fish.svg","icons/watch.svg","images/memoji-hand-raise.png","images/memoji-laptop.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.1d39244d.js","app":"_app/immutable/entry/app.63f3c2c6.js","imports":["_app/immutable/entry/start.1d39244d.js","_app/immutable/chunks/index.fa24064b.js","_app/immutable/chunks/singletons.c0366b9b.js","_app/immutable/entry/app.63f3c2c6.js","_app/immutable/chunks/index.fa24064b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
