var Modeler = require("../Modeler.js");
var className = 'Typesharerecord';

var Typesharerecord = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  supplierdetails: {
      type: "Typesupplierdetails",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "supplierdetails",
        nillable: true,
        type: "tns:supplierdetails",
        "s:annotation": {
          "s:documentation": "Supplier Details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    shareholderdetails: {
      type: "Typeshareholderdetails",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "shareholderdetails",
        nillable: true,
        type: "tns:shareholderdetails",
        "s:annotation": {
          "s:documentation": "Details related to the specific account holder for whom this report has been generated. Note that account history &amp;&#35;40;described later&#41; is specific to this account holder and not theaccount in full - i.e. for those account holders who joined the account more recently than the primaryaccount holder, only the history from the point they joined the account will be supplied"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sharedetails: {
      type: "Typesharedetails",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "sharedetails",
        nillable: true,
        type: "tns:sharedetails",
        "s:annotation": {
          "s:documentation": "Details specific to the account itself"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    currentaddress: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "currentaddress",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates whether or not the address relates to the applicant&apos;s current address"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    notices: {
      type: "TypeArrayOfNotice",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "notices",
        type: "tns:ArrayOfNotice",
        "s:annotation": {
          "s:documentation": "Notice details"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    usedindecision: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "usedindecision",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Indicates whether or not the record was used in the decision"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    }
	}, parentObj, json);
};

module.exports = Typesharerecord;
Modeler.register(Typesharerecord, "Typesharerecord");
