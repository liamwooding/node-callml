var Modeler = require("../Modeler.js");
var className = 'Typemlprimarysearch';

var Typemlprimarysearch = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  searchpurpose: {
      type: "Typesearchpurpose",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "searchpurpose",
        type: "tns:searchpurpose"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    applicant: {
      type: "Typeapplicant",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "applicant",
        nillable: true,
        type: "tns:applicant"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    demographics: {
      type: "Typeapplicantdemographics",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "demographics",
        type: "tns:applicantdemographics"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    searchdirectors: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "searchdirectors",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    excludesharegroups: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "excludesharegroups",
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 20
            },
            "s:minLength": {
              value: 1
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    excludeshareaccounttypes: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "excludeshareaccounttypes",
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 350
            },
            "s:minLength": {
              value: 2
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    identities: {
      type: "TypeArrayOfIdentity",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "identities",
        type: "tns:ArrayOfIdentity"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    minchecks: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "minchecks",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    usebai: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "usebai",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    useccj: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "useccj",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    usehcj: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "usehcj",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    useer: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "useer",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    usesettledaccounts: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "usesettledaccounts",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    settledaccountmonths: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "settledaccountmonths",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    useukinvestors: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "useukinvestors",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    decisionwarning: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "decisionwarning",
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 24
            },
            "s:minLength": {
              value: 1
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    valueaddedservices: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "valueaddedservices",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    excludeownshare: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "excludeownshare",
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 200
            },
            "s:minLength": {
              value: 3
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    picklist: {
      type: "Typepicklist",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "picklist",
        type: "tns:picklist"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    numsearches: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "numsearches",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    timeframeofsearch: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "timeframeofsearch",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    searchtelephone: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "searchtelephone",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    telephonedata: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "telephonedata",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typemlprimarysearch;
Modeler.register(Typemlprimarysearch, "Typemlprimarysearch");
