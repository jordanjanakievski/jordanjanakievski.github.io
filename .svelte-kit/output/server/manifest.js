export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","google21f35c6bcd8a2ea4.html","icons/artist-palette.svg","icons/brick.svg","icons/chess-pawn.svg","icons/clipboard.svg","icons/code-editor.svg","icons/desktop-computer.svg","icons/e-mail.svg","icons/github.svg","icons/gitlab.svg","icons/keyboard.svg","icons/linkedin.svg","icons/man-climbing-light-skin-tone.svg","icons/microscope.svg","icons/mobile-phone.svg","icons/racing-car.svg","icons/soccer-ball.svg","icons/t-shirt.svg","icons/tropical-fish.svg","icons/video-game.svg","icons/watch.svg","images/profile.png","images/uoft.png","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".html":"text/html",".svg":"image/svg+xml",".txt":"text/plain",".xml":"application/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.e543a668.js","app":"_app/immutable/entry/app.53bf2f52.js","imports":["_app/immutable/entry/start.e543a668.js","_app/immutable/chunks/index.dba1dfee.js","_app/immutable/chunks/singletons.5d1c318b.js","_app/immutable/entry/app.53bf2f52.js","_app/immutable/chunks/index.dba1dfee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
