import {JetView} from "webix-jet";
import DataView from "../../data.js";

export default class Active extends JetView{
	config(){
		return { rows: [
            {view: 'template', template: "Active"},
            DataView
        ]};
    }
}
