var Modeler = require("../Modeler.js");
var className = 'Typeapplicantdemographics';

var Typeapplicantdemographics = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  person: {
      type: "Typedemographicsperson",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "person",
        type: "tns:demographicsperson",
        "s:annotation": {
          "s:documentation": "Customer Details for Applicant"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    accommodation: {
      type: "Typedemographicsaccommodation",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "accommodation",
        type: "tns:demographicsaccommodation",
        "s:annotation": {
          "s:documentation": "Accommodation details for Applicant"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    contact: {
      type: "Typedemographicscontact",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "contact",
        type: "tns:demographicscontact",
        "s:annotation": {
          "s:documentation": "Customer Contact Details for Applicant"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    employment: {
      type: "Typedemographicsemployment",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "employment",
        type: "tns:demographicsemployment",
        "s:annotation": {
          "s:documentation": "Applicant&apos;s Employment Details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    account: {
      type: "Typedemographicsaccount",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "account",
        type: "tns:demographicsaccount",
        "s:annotation": {
          "s:documentation": "Applicant&apos;s Account Details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    expenditure: {
      type: "Typedemographicsexpenditure",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "expenditure",
        type: "tns:demographicsexpenditure",
        "s:annotation": {
          "s:documentation": "Applicant&apos;s Commitments and Expenditures"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    income: {
      type: "Typedemographicsincome",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "income",
        type: "tns:demographicsincome",
        "s:annotation": {
          "s:documentation": "Income details for Applicant"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typeapplicantdemographics;
Modeler.register(Typeapplicantdemographics, "Typeapplicantdemographics");
