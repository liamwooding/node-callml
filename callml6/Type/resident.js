var Modeler = require("../Modeler.js");
var className = 'Typeresident';

var Typeresident = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  residenceid: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "residenceid",
        nillable: true,
        "s:annotation": {
          "s:documentation": "The ID of the residence"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 9
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    name: {
      type: "Typename",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "name",
        type: "tns:name",
        "s:annotation": {
          "s:documentation": "Contains name information"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    duration: {
      type: "Typepreciseduration",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "duration",
        type: "tns:preciseduration",
        "s:annotation": {
          "s:documentation": "Duration.Number of days, months or years"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    startdateresident: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "startdateresident",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "Residency start date"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    enddateresident: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "enddateresident",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "Residency end date"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ervalid: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "ervalid",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Indicates the level of match that was achieved. 1 = Individual found on current electoral roll; 2 = individual not found on electoral roll; 3 = individual found on previous electoral roll; 4 = individual found on rolling electoral roll; 5 = individual found on previous rolling electoral roll"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    erhistory: {
      type: "TypeArrayOfErhistoryitem",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "erhistory",
        type: "tns:ArrayOfErhistoryitem",
        "s:annotation": {
          "s:documentation": "Previous Electoral Roll items"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    notices: {
      type: "TypeArrayOfNotice",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "notices",
        type: "tns:ArrayOfNotice",
        "s:annotation": {
          "s:documentation": "Notices of correction and/or dispute"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typeresident;
Modeler.register(Typeresident, "Typeresident");
