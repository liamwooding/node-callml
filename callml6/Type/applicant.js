var Modeler = require("../Modeler.js");
var className = 'Typeapplicant';

var Typeapplicant = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  name: {
      type: "Typename",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "name",
        nillable: true,
        type: "tns:name",
        "s:annotation": {
          "s:documentation": "Contains name information"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    aliases: {
      type: "TypeArrayOfName",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "aliases",
        type: "tns:ArrayOfName",
        "s:annotation": {
          "s:documentation": "Alias Information for the applicant"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    currentaddress: {
      type: "Typeaddress",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "currentaddress",
        nillable: true,
        type: "tns:address",
        "s:annotation": {
          "s:documentation": "Applicant Current Address"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    previousaddress: {
      type: "Typeaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "previousaddress",
        type: "tns:address",
        "s:annotation": {
          "s:documentation": "Applicant Previous Address"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    addrlessthan12months: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "addrlessthan12months",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    dateofbirth: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dateofbirth",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "Date Of Birth"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    telephone: {
      type: "Typetelephone",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "telephone",
        type: "tns:telephone",
        "s:annotation": {
          "s:documentation": "Telephone.XML Block containing details of the telephone number"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typeapplicant;
Modeler.register(Typeapplicant, "Typeapplicant");
