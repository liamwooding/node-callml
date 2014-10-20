var Modeler = require("../Modeler.js");
var className = 'Typeidparam';

var Typeidparam = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  idkey: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "idkey",
        nillable: true,
        "s:annotation": {
          "s:documentation": "Keyword identifying what the idnumber relates to.Valid keywords are IDNUMBER, MACHINEREADABLELINE1, MACHINEREADABLELINE2, MACHINEREADABLELINE3, EXPIRYDATE, VALIDUNTIL, PLACEOFISSUE, DATEOFISSUE and MAILSORT."
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
    idvalue: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "idvalue",
        nillable: true,
        "s:annotation": {
          "s:documentation": "The value of the identity document attribute. For example, account number, mailsort code, driving license number etc."
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
    }
	}, parentObj, json);
};

module.exports = Typeidparam;
Modeler.register(Typeidparam, "Typeidparam");
