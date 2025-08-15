export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "jethzabell-resume/_app",
	assets: new Set(["JethzabellMedinaResume2025.pdf","jethzabell.jpg"]),
	mimeTypes: {".pdf":"application/pdf",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.i4AD-oLa.js",app:"_app/immutable/entry/app.tRcxpZdl.js",imports:["_app/immutable/entry/start.i4AD-oLa.js","_app/immutable/chunks/BQgWYm41.js","_app/immutable/chunks/ZsPPiXvn.js","_app/immutable/chunks/D5zobsKd.js","_app/immutable/entry/app.tRcxpZdl.js","_app/immutable/chunks/D5zobsKd.js","_app/immutable/chunks/ZsPPiXvn.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
