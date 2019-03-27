import {JetView, plugins} from "webix-jet";



export default class TopView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;
        const lang = this.app.getService("locale").getLang();

		var header = { view: "toolbar", padding:5, elements: [
			{
				view: "icon", icon: "mdi mdi-menu", click: () => {
				   $$("$sidebar1").toggle();
				 }
			},
		  { view: "label", label: "FinACC"},
		  {},
		  {
		  //width: 500,
		   cols: [{},{},
				   { view:"menu",
					  data:[
						  { id:"user_log", type:"icon", icon:"mdi mdi-account", value:"LOGIN", align:"right", // вставить шаблон #Name# #Surname#!
							  submenu:[
								  { value: _("Settings"), id: "settings_user"},
								  { value: _("Exit"), id: "logout" },
							  ]},
					  ],
					  openAction:"click",
					  on:{
						  onMenuItemClick: (id) => {
							  if(id == "logout"){
								  this.show("/logout")
							  }else if(id === "settings_user"){
								  this.app.show('/top/components.settings' );
							  }
						  }
					  },
					  type:{
						  subsign:true
					  }
				  },
			  ]}
			]
		};

		var menu = { cols:[
					  {
						width: 220,
						view: "sidebar",
						id: "$sidebar1",
						data: menu_data,
						template: (obj) => {
							return ("<div><span class='icon__custom webix_icon webix_sidebar_icon mdi "+ obj.icon +"'></span>" + _(obj.value) + "</div>");
						},
						on:{
						  onAfterSelect: (id) => {
							  this.app.show('/top/components.' + id);
							//webix.message("Selected: "+this.getItem(id).value)
						  }
						}
					  },
					  {
						  type: "space",
						  rows: [{$subview: true}]
					  }
					]
				};

		var ui = {
			rows:[header, menu]
		};

		return ui;
	}

	toggleLanguage(){
		 const langs = this.app.getService("locale");
		 const value = this.getRoot().queryView({ name:"lang" }).getValue();
		 langs.setLang(value);
	 }
}

var menu_data = [
	{id: "Active.Active", icon: "mdi-view-dashboard mdi", value: "Active" },
	{id: "Passive", icon: "mdi-shopping mdi", value:"Passive", data:[
		{ id: "Passive.consumption", value: "Consumption"},
		{ id: "Passive.constant_flow", value: "Constant_flow"}
	]},
	{id: "reports", icon: "mdi mdi-file-document", value:"Reports"},
];
