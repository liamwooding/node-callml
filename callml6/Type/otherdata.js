var Modeler = require("../Modeler.js");
var className = 'Typeotherdata';

var Typeotherdata = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  mailsort: {
      type: "Typemailsort",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "mailsort",
        type: "tns:mailsort",
        "s:annotation": {
          "s:documentation": "Contains Mailsort data"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    director: {
      type: "Typedirector",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "director",
        type: "tns:director",
        "s:annotation": {
          "s:documentation": "Contains Directors At Home data"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    location: {
      type: "Typelocation",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "location",
        type: "tns:location",
        "s:annotation": {
          "s:documentation": "Contains information relating to the country, region, city or Postal Area associated with a submitted IP address"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    nonstandardaddress: {
      type: "Typenonstandardaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "nonstandardaddress",
        type: "tns:nonstandardaddress",
        "s:annotation": {
          "s:documentation": "Contains information about Non-standard addresses if the input address matches to the Non Standard Addresses database"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    telephoneresults: {
      type: "TypeArrayOfTelephoneresult",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "telephoneresults",
        type: "tns:ArrayOfTelephoneresult",
        "s:annotation": {
          "s:documentation": "Contains information about any telephone search results"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typeotherdata;
Modeler.register(Typeotherdata, "Typeotherdata");
