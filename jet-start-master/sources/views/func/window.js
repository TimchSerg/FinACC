

export const window_custom = function(id, name_header, objPosition, width=500, height=380, ){
    var res = webix.ui({
            view:"window",
            id:id,
            head:name_header,
            modal:false,
			toFront: true,
			move: true,
			width:width,
			height:height,
			autofit:false,
			body:{
			  rows: [
			    {
                    view: "form",
                    elements: [
			                  {view: "richselect", label: "Type", labelAlign:"right", labelWidth: 90, options: [ {value: "forex"}, {value: "work"}, ]},
			                  {view: "text", name:"Sum", placeholder: 'Sum', label: "Sum", labelWidth: 90, labelAlign:"right"},
                              {view: "textarea", name:"Description", placeholder: 'Description', labelWidth: 90, inputHeight: 150, label: "Description", labelAlign:"right"},
			                  {cols: [
							        {view: "button", value: "Edit", click: function(){ $$(id).close(); }},
			                        {view: "button", value: "Ok", click: function(){ $$(id).close(); }},
			                    ]}

			                ]
                  }
			    ]
			  }
        }).show(objPosition);
    return res;
};
