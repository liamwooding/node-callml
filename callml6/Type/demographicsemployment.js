var Modeler = require("../Modeler.js");
var className = 'Typedemographicsemployment';

var Typedemographicsemployment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  occupation: {
      type: "Typedemographicsoccupationtype",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "occupation",
        type: "tns:demographicsoccupationtype",
        "s:annotation": {
          "s:documentation": "Occupation Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    employmentstatus: {
      type: "Typedemographicsemploymentstatus",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "employmentstatus",
        type: "tns:demographicsemploymentstatus",
        "s:annotation": {
          "s:documentation": "Employment Status Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    expirydate: {
      type: "Typedate",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "expirydate",
        type: "s:date",
        "s:annotation": {
          "s:documentation": "Employment Expiry Data - dependent on the Employment Status Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    employmentrecency: {
      type: "Typedemographicsemploymentrecencytype",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "employmentrecency",
        type: "tns:demographicsemploymentrecencytype",
        "s:annotation": {
          "s:documentation": "Employment Recency Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    employercategory: {
      type: "Typedemographicsemployercategory",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "employercategory",
        type: "tns:demographicsemployercategory",
        "s:annotation": {
          "s:documentation": "Employer Category Type Code"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    timeatcurrentemployer: {
      type: "Typeduration",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "timeatcurrentemployer",
        type: "s:duration",
        "s:annotation": {
          "s:documentation": "Total number of months with the current employer.Max Length of 4 removed as wsdl.exe complains that it&apos;s an invaidconstraining facet for duration types"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typedemographicsemployment;
Modeler.register(Typedemographicsemployment, "Typedemographicsemployment");
