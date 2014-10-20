var Modeler = require("../Modeler.js");
var className = 'TypeCallMLParameters6';

var TypeCallMLParameters6 = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  primarysearch: {
      type: "Typemlprimarysearch",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "primarysearch",
        type: "tns:mlprimarysearch"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ipaddress: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "ipaddress",
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 15
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    overridedecision: {
      type: "Typeoverridedecision",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "overridedecision",
        type: "tns:overridedecision"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    subsequentsearch: {
      type: "Typesubsequentsearch",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "subsequentsearch",
        type: "tns:subsequentsearch"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    addresslinksearch: {
      type: "Typeaddresslinksearch",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "addresslinksearch",
        type: "tns:addresslinksearch"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    yourreference: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "yourreference",
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 50
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
    }
	}, parentObj, json);
};

module.exports = TypeCallMLParameters6;
Modeler.register(TypeCallMLParameters6, "TypeCallMLParameters6");
