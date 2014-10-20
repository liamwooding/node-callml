var Modeler = require("../Modeler.js");
var className = 'Typegeofraud';

var Typegeofraud = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  currentaddresspercentile: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "currentaddresspercentile",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "The GeoFraud index for the postcode relating to the current address. Identifies the potential risk of fraud in the input postcode"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    previousaddresspercentile: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "previousaddresspercentile",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "The GeoFraud index for the postcode relating to the previous address. Identifies the potential risk of fraud in the input postcode"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    currentaddress: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "currentaddress",
        "s:annotation": {
          "s:documentation": "Contains the current address details"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 386
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    previousaddress: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "previousaddress",
        "s:annotation": {
          "s:documentation": "Contains the previous address details"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 386
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    gfwarning: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "gfwarning",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "Warning flag based on the difference between current and previous address GeoFraud indexes.The gfwarning flag has the following possible values:1 - Substantial Index change between Previous and Current Address2 - Impersonation Warning - Medium Risk3 - Impersonation Warning - High Risk"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    }
	}, parentObj, json);
};

module.exports = Typegeofraud;
Modeler.register(Typegeofraud, "Typegeofraud");
