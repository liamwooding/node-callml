var Modeler = require("../Modeler.js");
var className = 'TypeDateOfDeathDate';

var TypeDateOfDeathDate = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  DateOfDeathDate: {
      type: "string",
      wsdlDefinition: {
        name: "DateOfDeathDate",
        "s:annotation": {
          "s:documentation": "Date of Death Date.Valid formats are YYYY, YYYY-MM or YYYY-MM-DD.The &quot;approx\" valid values are false or true. false = Date of Death. true = Approximate Date of Death."
        },
        "s:simpleContent": {
          "s:extension": {
            base: "s:string",
            "s:attribute": {
              name: "approx",
              type: "s:boolean",
              use: "required"
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

module.exports = TypeDateOfDeathDate;
Modeler.register(TypeDateOfDeathDate, "TypeDateOfDeathDate");
