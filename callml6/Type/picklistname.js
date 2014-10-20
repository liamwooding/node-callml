var Modeler = require("../Modeler.js");
var className = 'Typepicklistname';

var Typepicklistname = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  reporttype: {
      type: "TypeenReportType",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "reporttype",
        type: "tns:enReportType",
        "s:annotation": {
          "s:documentation": "Report Type Enumeration"
        }
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
          "s:documentation": "Match status level"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    nameinput: {
      type: "Typenameinput",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "nameinput",
        nillable: true,
        type: "tns:nameinput",
        "s:annotation": {
          "s:documentation": "Name details as entered by the user"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    namematches: {
      type: "Typenamematch",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "namematches",
        nillable: true,
        type: "tns:namematch",
        "s:annotation": {
          "s:documentation": "A collection of possible Name Matches"
        }
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typepicklistname;
Modeler.register(Typepicklistname, "Typepicklistname");
