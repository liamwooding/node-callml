var Modeler = require("../Modeler.js");
var className = 'Typesearchpurpose';

var Typesearchpurpose = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  searchpurpose: {
      type: "string",
      wsdlDefinition: {
        name: "searchpurpose",
        "s:restriction": {
          base: "s:string",
          "s:enumeration": [
            {
              value: "AP"
            },
            {
              value: "AQ"
            },
            {
              value: "IP"
            },
            {
              value: "IQ"
            },
            {
              value: "ML"
            },
            {
              value: "MP"
            },
            {
              value: "TS"
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

module.exports = Typesearchpurpose;
Modeler.register(Typesearchpurpose, "Typesearchpurpose");
