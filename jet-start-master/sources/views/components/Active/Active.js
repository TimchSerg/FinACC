import {JetView} from "webix-jet";
import ActiveDataView from "../../data/Active.js";
import {window_custom} from '../../func/window.js';

export default class Active extends JetView{
	config(){
		return { rows: [
              {
                multi:true,
				collapsed:true,
                view:"accordion", type:"head",
                rows:[
                  { header:"Active report", body: settings_tab, height:100},
                ]
              },
            ActiveDataView
        ]};
    }
}

const settings_tab = {
    rows: [
        {heigth: 5},
        {cols: [
        {},{view: 'button', value: "Add a note", width: 250, css: "custom_button_css",
        on:{
            'onItemClick': function(){
                window_custom('addNote', 'add a note', {x: 350, y: 100} );
            }
        }},{},
            {view: 'button', value: "Edit post", width: 250, css: "custom_button_css",
			on:{
	            'onItemClick': function(){
	                window_custom('editPost', 'Edit post', {x: 350, y: 100} );
	            }
	        } },{},
            {view: 'button', value: "Delete post", width: 250, css: "custom_button_css", click: ()=>{
				console.log('delete');
			} },{},
        ]},
        {heigth: 5},
        /*{cols: [
            {view:"datepicker", format:"%d  %M %Y", label: "from:", labelAlign: 'right', timepicker: true, width: 300},
            {view:"datepicker", format:"%d  %M %Y", label: "to:", labelAlign: 'right', timepicker: true, width: 300},{},
            {view: 'text', label: 'Search', labelAlign: 'right', width: 350, },
            {width: 50},
        ]},
        {heigth: 20},*/
    ]
};
