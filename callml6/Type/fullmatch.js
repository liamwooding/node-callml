var Modeler = require("../Modeler.js");
var className = 'Typefullmatch';

var Typefullmatch = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  picklistnames: {
      type: "TypeArrayOfPicklistname",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "picklistnames",
        type: "tns:ArrayOfPicklistname",
        "s:annotation": {
          "s:documentation": "Input name details and a set of name matches"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    selected: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "selected",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "True indicates that this address match is selected, False indicates a non selection. Only one item should be selected in when details are submitted in order to resolve a picklist"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    addressmatch: {
      type: "Typeaddressmatch",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "addressmatch",
        nillable: true,
        type: "tns:addressmatch",
        "s:annotation": {
          "s:documentation": "Matched address details as recorded on the database"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typefullmatch;
Modeler.register(Typefullmatch, "Typefullmatch");
