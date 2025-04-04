export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","admin/config.yml","admin/index.html","favicon.png","images/assistants.jpg","images/building.jpg","images/emax.jpg","images/fb-icon.png","images/implant.jpg","images/itero.jpg","images/lab-bake.jpg","images/line-icon.png","images/pano1.jpg","images/pano2.jpg","images/rct-after.jpg","images/rct-before.jpg","images/reception.jpg","images/reviewer_image_1.png","images/reviewer_image_2.png","images/reviewer_image_3.png","images/reviewer_image_4.png","images/social-security.jpg","images/sunee.jpg","images/vatech.jpg","images/zoom.jpg","robots.txt"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DRuWSSfk.js","app":"_app/immutable/entry/app.Aw4DYb_q.js","imports":["_app/immutable/entry/start.DRuWSSfk.js","_app/immutable/chunks/entry.1Jmtdcqc.js","_app/immutable/chunks/scheduler.CkD6cNMD.js","_app/immutable/chunks/index.B89jQWE0.js","_app/immutable/entry/app.Aw4DYb_q.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.CkD6cNMD.js","_app/immutable/chunks/index.Bd7vDCrq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/reviews",
				pattern: /^\/reviews\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/services/anxiety-phobia",
				pattern: /^\/services\/anxiety-phobia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/services/esthetics",
				pattern: /^\/services\/esthetics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/services/full-mouth-rehab",
				pattern: /^\/services\/full-mouth-rehab\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/services/general-dentistry",
				pattern: /^\/services\/general-dentistry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/services/implants",
				pattern: /^\/services\/implants\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/services/invisalign",
				pattern: /^\/services\/invisalign\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/services/orthodontics",
				pattern: /^\/services\/orthodontics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/services/periodontal",
				pattern: /^\/services\/periodontal\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/services/rct",
				pattern: /^\/services\/rct\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/services/surgery",
				pattern: /^\/services\/surgery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/services/tmj",
				pattern: /^\/services\/tmj\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
