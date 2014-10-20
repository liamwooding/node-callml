var Modeler = require("../Modeler.js");
var className = 'Typenewidentities';

var Typenewidentities = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  ids: {
      type: "TypeArrayOfIdentity",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "ids",
        type: "tns:ArrayOfIdentity"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = Typenewidentities;
Modeler.register(Typenewidentities, "Typenewidentities");
