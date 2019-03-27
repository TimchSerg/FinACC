import {JetView} from "webix-jet";
import {dataActive} from "models/records";

export default class ActiveDataView extends JetView{
	config(){
		return {
            view:"datatable",
            autoConfig:true,
            css:"custom_data_css",
			resizeColumn:{headerOnly:true},
			resizeColumn:{size:6},
            columns: [
                {id: 'id', header: "№", width: 50},
                {id: 'date', header: "Date", width: 200},
                {id: 'type', header: "Type", width: 100},
                {id: 'description', header: "Description", width: 50, fillspace: true},
                {id: 'sum', header: "Sum", width: 100},
            ]
        };
	}
	init(view){
		view.parse(dataActive);
	}
}
