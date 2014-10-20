var Modeler = require("../Modeler.js");
var className = 'Typepicklist';

var Typepicklist = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  searchid: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "searchid",
        nillable: true,
        "s:annotation": {
          "s:documentation": "The unique GUID assigned to the CallML search"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 38
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    searchdate: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "searchdate",
        nillable: true,
        "s:annotation": {
          "s:documentation": "The date the search was carried out"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 20
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    applicant: {
      type: "Typepicklistapplicant",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "applicant",
        nillable: true,
        type: "tns:picklistapplicant",
        "s:annotation": {
          "s:documentation": "Input and matched name and address details for an applicant"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    maxaddressitems: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "maxaddressitems",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Maximum number of address items"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    maxnameitems: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "maxnameitems",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Maximum number of name items"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    picklist: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "picklist",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Picklist"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    }
	}, parentObj, json);
};

module.exports = Typepicklist;
Modeler.register(Typepicklist, "Typepicklist");
