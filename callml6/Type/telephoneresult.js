var Modeler = require("../Modeler.js");
var className = 'Typetelephoneresult';

var Typetelephoneresult = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  source: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "source",
        type: "s:string",
        "s:annotation": {
          "s:documentation": "The telephone data source matched to. Values are 1 = BT OSIS, 2 = QIRE"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    matchlevel: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "matchlevel",
        type: "s:string",
        "s:annotation": {
          "s:documentation": "The match level.  0 = No Match, 1 = Match, 2 = Match but Telephone number retrieved differs"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    number: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "number",
        type: "s:string",
        "s:annotation": {
          "s:documentation": "The telephone number retrieved"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typetelephoneresult;
Modeler.register(Typetelephoneresult, "Typetelephoneresult");
