import {JetView} from "webix-jet";

export default class SettingsUser extends JetView{
    config(){

        const _ = this.app.getService("locale")._;
        const lang = this.app.getService("locale").getLang();
        const theme = this.app.getService("theme").getTheme();

        return {
				rows: [
                    {
    						view: "toolbar", elements: [
    							{ view: "label", label: _("Settings")},
    						]

    				 },
                     { type:"space",view: "form", id:"form_settings", elements: [{height: 10},
                                 {view:"label", label: _('Change Language'), css: "label_css_FS"},
                                 {cols: [
                                     {name:"lang", view:"segmented", optionWidth: 150, vertical:true, options:[
                                         { id:"ru", value: _("Russian")},
                                         { id:"en", value: _("English")},
                                     ],

                                     click:() => this.toggleLanguage(), value:lang },{}
                                 ],

                                },
                             {height: 10},
                             {view:"label", label:_("Change Theme"), css: "label_css_FS" },
                             { name:"skin", optionWidth: 120, view:"segmented", label:_("Theme"),
                                 options:[
                                     { id:"flat-default", value:"Default" },
                                     { id:"flat-shady", value:"Shady" },
                                     { id:"compact-default", value:"Compact" }
                                 ], click:() => this.toggleTheme(), value:theme
                             },
                             {height: 10},
                                {view:"label", label: _('Change Password'), css: "label_css_FS"},
                                {view: "text", label: _("Enter old password"), placeholder: _("Enter old password"), inputWidth:400, labelPosition:"top"}, //https://docs.webix.com/desktop__formatted_text_inputs.html
                                {view: "text", label: _("Enter new password"), placeholder: _("Enter new password"), inputWidth:400, labelPosition:"top"},
                                {view: "text", label: _("Confirm new password"), placeholder: _("Confirm new password"), inputWidth:400, labelPosition:"top"},
                                {   view:"toolbar",
                                    css: "no_Border",
                                    cols: [
                                        {view: "button", id: "button_form_new_pass", value: _("reset password"), type: "form", width:160, align:"right" },
                                        {view: "button", id: "button_form_new_pass_clean", value: _("clean"), type: "form", width:160,  },
                                    ],
                                },
                                {height: 10},

                                {},
                                {cols: [
                                        { view:"button", value:_("Go main"), inputWidth:400, align: "left", click: () => {
                                            this.show('../components.nomenclature');
                                            }
                                        },
                                        /*{
                                            view:"button", value:_("Default settings"), inputWidth:400, align: "right", click: () => {
                                                this.show('../components.nomenclature');
                                                }
                                        }*/
                                    ]
                                }


                             ]
                     },

	               ]};
    }
    toggleLanguage(){
		 const langs = this.app.getService("locale");
		 const value = this.getRoot().queryView({ name:"lang" }).getValue();
		 langs.setLang(value);
	 }
     toggleTheme(){
        const themes = this.app.getService("theme");
        const value = this.getRoot().queryView({ name:"skin" }).getValue();
        themes.setTheme(value);
    }
}

/*
{
    rows: [
        {template: "change language", },
        {name:"lang", view:"segmented", width:110, options:[
            { id:"ru", width: 50 },
            { id:"en", width: 50 },
        ],
        click:() => this.toggleLanguage(), value:lang },
    ]
},
*/
