var Modeler = require("../Modeler.js");
var className = 'Typepicklistaddress';

var Typepicklistaddress = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  id: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "id",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    reporttype: {
      type: "TypeenReportType",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "reporttype",
        type: "tns:enReportType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    matchstatus: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "matchstatus",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Status of user&apos;s selection for a given name and address within the picklist"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    addressinput: {
      type: "Typeaddressinput",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "addressinput",
        nillable: true,
        type: "tns:addressinput",
        "s:annotation": {
          "s:documentation": "Address Details as entered by the user"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fullmatches: {
      type: "Typefullmatch",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "fullmatches",
        nillable: true,
        type: "tns:fullmatch",
        "s:annotation": {
          "s:documentation": "Contains a set of matches for this specific address"
        }
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typepicklistaddress;
Modeler.register(Typepicklistaddress, "Typepicklistaddress");
