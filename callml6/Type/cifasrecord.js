var Modeler = require("../Modeler.js");
var className = 'Typecifasrecord';

var Typecifasrecord = function(json, parentObj) {
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
          "s:documentation": "Title"
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
    firstname: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "firstname",
        "s:annotation": {
          "s:documentation": "First name"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 30
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
    othername1: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "othername1",
        "s:annotation": {
          "s:documentation": "First other name"
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
    othername2: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "othername2",
        "s:annotation": {
          "s:documentation": "Second other name"
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
          "s:documentation": "Surname"
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
    birthdate: {
      type: "date",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "birthdate",
        type: "s:dateTime",
        "s:annotation": {
          "s:documentation": "Date of Birth"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    flat: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "flat",
        "s:annotation": {
          "s:documentation": "Flat or abode number"
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
    housename: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "housename",
        "s:annotation": {
          "s:documentation": "House or building name"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 50
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    housenumber: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "housenumber",
        "s:annotation": {
          "s:documentation": "House or building number"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 10
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    street: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "street",
        "s:annotation": {
          "s:documentation": "Street"
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
    district: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "district",
        "s:annotation": {
          "s:documentation": "District"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 36
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    county: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "county",
        "s:annotation": {
          "s:documentation": "County"
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
    town: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "town",
        "s:annotation": {
          "s:documentation": "Town"
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
    postcode: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "postcode",
        "s:annotation": {
          "s:documentation": "Postcode"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 8
            },
            "s:minLength": {
              value: 6
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    casereferenceno: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "casereferenceno",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Case reference number"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 6
            },
            "s:minLength": {
              value: 6
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    membernumber: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "membernumber",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Member number"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 3
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
    membername: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "membername",
        "s:annotation": {
          "s:documentation": "Member name"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 100
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    productcode: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "productcode",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Product code"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 4
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fraudcategory: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "fraudcategory",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Fraud category"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 2
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    productdesc: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "productdesc",
        "s:annotation": {
          "s:documentation": "Description of product code"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 150
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    frauddesc: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "frauddesc",
        "s:annotation": {
          "s:documentation": "Description of fraud category"
        },
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 50
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    inputdate: {
      type: "date",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "inputdate",
        type: "s:dateTime",
        "s:annotation": {
          "s:documentation": "CIFAS filing input date"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    expirydate: {
      type: "date",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "expirydate",
        type: "s:dateTime",
        "s:annotation": {
          "s:documentation": "Expiry date of CIFAS filing"
        }
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typecifasrecord;
Modeler.register(Typecifasrecord, "Typecifasrecord");
