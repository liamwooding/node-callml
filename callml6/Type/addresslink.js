var Modeler = require("../Modeler.js");
var className = 'Typeaddresslink';

var Typeaddresslink = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  navlinkid: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "navlinkid",
        "s:annotation": {
          "s:documentation": "The navlink ID"
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
    address: {
      type: "Typeaddresslinkaddress",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "address",
        type: "tns:addresslinkaddress",
        "s:annotation": {
          "s:documentation": "Addresslink address"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
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
          "s:documentation": "Contains all details for a data level NOC or NOD"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typeaddresslink;
Modeler.register(Typeaddresslink, "Typeaddresslink");
