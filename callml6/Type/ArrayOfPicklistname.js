var Modeler = require("../Modeler.js");
var className = 'TypeArrayOfPicklistname';

var TypeArrayOfPicklistname = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  picklistname: {
      type: "Typepicklistname",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: "unbounded",
        name: "picklistname",
        nillable: true,
        type: "tns:picklistname"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeArrayOfPicklistname;
Modeler.register(TypeArrayOfPicklistname, "TypeArrayOfPicklistname");
