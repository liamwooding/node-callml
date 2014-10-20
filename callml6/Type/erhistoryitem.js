var Modeler = require("../Modeler.js");
var className = 'Typeerhistoryitem';

var Typeerhistoryitem = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  optout: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "optout",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Electoral roll opt-out indicator. 0 = opt-in, 1 = opt-out"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    erhistorystartdate: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "erhistorystartdate",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "History start date"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    erhistoryenddate: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "erhistoryenddate",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "History end date"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    rollingroll: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "rollingroll",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "0 = annual ER, 1 = monthly rolling ER"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
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

module.exports = Typeerhistoryitem;
Modeler.register(Typeerhistoryitem, "Typeerhistoryitem");
