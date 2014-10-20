var Modeler = require("../Modeler.js");
var className = 'Typeshareholderdetails';

var Typeshareholderdetails = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  title: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "title",
        "s:annotation": {
          "s:documentation": "Account holder&apos;s title"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
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
    forename: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "forename",
        "s:annotation": {
          "s:documentation": "Account holder&apos;s forename"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    forename2: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "forename2",
        "s:annotation": {
          "s:documentation": "Account holder&apos;s middle name &amp;&#35;40;or second forename&#41;"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    surname: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "surname",
        "s:annotation": {
          "s:documentation": "Account holder&apos;s surname"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    suffix: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "suffix",
        "s:annotation": {
          "s:documentation": "Account holder&apos;s suffix"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    address: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "address",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Account holder&apos;s full address as known by the lender"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 400
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    postcode: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "postcode",
        "s:annotation": {
          "s:documentation": "Account holder&apos;s postal code as known by the lender"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 8
            }
          }
        },
        type: "s:string"
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
          "s:documentation": "Date of Birth"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    statuscode: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "statuscode",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Alphanumeric Account Holder Status Code"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 1
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    lorwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "lorwarning",
        type: "s:boolean",
        "s:annotation": {
          "s:documentation": "Length of Residency warning. If the data returned is less than a year old from the date of application, the warning will be set to true, otherwise it will be false"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    dobmatch: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "dobmatch",
        type: "s:int",
        "s:annotation": {
          "s:documentation": "The Date Of Birth match code . Return values are: 1 = No DOB entered or no DOB attached to the data, 2 = Input DOB matches returned Share DOB, 3 = Input DOB doesnt match returned Share DOB, 4 = The SHARE record is not valid for Money Laundering purposes"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    }
	}, parentObj, json);
};

module.exports = Typeshareholderdetails;
Modeler.register(Typeshareholderdetails, "Typeshareholderdetails");
