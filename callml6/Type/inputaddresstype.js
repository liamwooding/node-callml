var Modeler = require("../Modeler.js");
var className = 'Typeinputaddresstype';

var Typeinputaddresstype = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  inputaddresstype: {
      type: "string",
      wsdlDefinition: {
        name: "inputaddresstype",
        "s:restriction": {
          base: "s:string",
          "s:enumeration": [
            {
              value: "short"
            },
            {
              value: "long"
            }
          ]
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typeinputaddresstype;
Modeler.register(Typeinputaddresstype, "Typeinputaddresstype");
