var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfSearchhistoryitem';

var TypeArrayOfSearchhistoryitem = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  searchhistoryitem: {
      type: "Typesearchhistoryitem",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "searchhistoryitem",
        nillable: true,
        type: "tns:searchhistoryitem"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfSearchhistoryitem;
Modeler.register(TypeArrayOfSearchhistoryitem, "TypeArrayOfSearchhistoryitem");
