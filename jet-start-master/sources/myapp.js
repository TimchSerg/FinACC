import "./styles/app.css";
import {JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";
//import session from "models/session";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/top/start"
		};

		super({ ...defaults, ...config });
	}
}

const app = new MyApp();


if (!BUILD_AS_MODULE){
	webix.ready( () => {
		app.use(plugins.Locale, { lang : "ru" });
		//app.use(plugins.Theme);
		app.render();
	} );
}
