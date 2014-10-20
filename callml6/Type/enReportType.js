var Modeler = require("../Modeler.js");
var className = 'TypeenReportType';

var TypeenReportType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  enReportType: {
      type: "string",
      wsdlDefinition: {
        name: "enReportType",
        "s:restriction": {
          base: "s:string",
          "s:enumeration": [
            {
              value: "Picklist"
            },
            {
              value: "NoMatchFound"
            },
            {
              value: "AddressReport"
            },
            {
              value: "SurnameReport"
            },
            {
              value: "IndividualReport"
            },
            {
              value: "TooManyMatches"
            },
            {
              value: "NonDomicileMatch"
            }
          ]
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeenReportType;
Modeler.register(TypeenReportType, "TypeenReportType");
