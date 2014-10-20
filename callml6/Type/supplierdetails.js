var Modeler = require("../Modeler.js");
var className = 'Typesupplierdetails';

var Typesupplierdetails = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  memberportid: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "memberportid",
        "s:annotation": {
          "s:documentation": "The members Portfolio Id Number"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 3
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typesupplierdetails;
Modeler.register(Typesupplierdetails, "Typesupplierdetails");
