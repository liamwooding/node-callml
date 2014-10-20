var Modeler = require("../Modeler.js");
var className = 'TypeCallMLResults6';

var TypeCallMLResults6 = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  searchdate: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "searchdate",
        nillable: true,
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    searchid: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "searchid",
        nillable: true,
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
    cast: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "cast",
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
    numprimarychecks: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "numprimarychecks",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    numcorroborativechecks: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "numcorroborativechecks",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    numprimaryshareidsconfirmed: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "numprimaryshareidsconfirmed",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    numcorroborativeshareidsconfirmed: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "numcorroborativeshareidsconfirmed",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    numprimaryotheridsconfirmed: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "numprimaryotheridsconfirmed",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    numcorroborativeotheridsconfirmed: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "numcorroborativeotheridsconfirmed",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    confirmatorydobs: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "confirmatorydobs",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    totaldobs: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "totaldobs",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    sanctionswarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "sanctionswarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sdnwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "sdnwarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    pepwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "pepwarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    addresswarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "addresswarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    addresslinkswarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "addresslinkswarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    goneawaywarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "goneawaywarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    dvlawarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "dvlawarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    deceasedwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "deceasedwarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    passportwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "passportwarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    fraudulentpassportwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "fraudulentpassportwarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    searchwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "searchwarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    idcardwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "idcardwarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    matchlevel: {
      type: "TypeenReportType",
      wsdlDefinition: {
        minOccurs: 1,
        maxOccurs: 1,
        name: "matchlevel",
        type: "tns:enReportType"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    appverified: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "appverified",
        "s:simpleType": {
          "s:restriction": {
            base: "s:string",
            "s:maxLength": {
              value: 22
            }
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    nocs: {
      type: "TypeArrayOfNoc",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "nocs",
        type: "tns:ArrayOfNoc"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    bairecords: {
      type: "TypeArrayOfBairecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "bairecords",
        type: "tns:ArrayOfBairecord"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    judgments: {
      type: "Typejudgments",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "judgments",
        type: "tns:judgments"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    errecords: {
      type: "TypeArrayOfErrecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "errecords",
        type: "tns:ArrayOfErrecord"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    pafs: {
      type: "TypeArrayOfPaf",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "pafs",
        type: "tns:ArrayOfPaf"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ukinvestorrecords: {
      type: "TypeArrayOfUkinvestorrecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "ukinvestorrecords",
        type: "tns:ArrayOfUkinvestorrecord"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sharerecords: {
      type: "TypeArrayOfSharerecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "sharerecords",
        type: "tns:ArrayOfSharerecord"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    furtherdetails: {
      type: "Typefurtherdetails",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "furtherdetails",
        type: "tns:furtherdetails"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    otherdata: {
      type: "Typeotherdata",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "otherdata",
        type: "tns:otherdata"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    searches: {
      type: "TypeArrayOfSearchhistoryitem",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "searches",
        type: "tns:ArrayOfSearchhistoryitem"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    numactivecifasrecords: {
      type: "number",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "numactivecifasrecords",
        type: "s:int"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    cifasrecords: {
      type: "TypeArrayOfCifasrecord",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "cifasrecords",
        type: "tns:ArrayOfCifasrecord"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    geofraud: {
      type: "Typegeofraud",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "geofraud",
        type: "tns:geofraud"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    geofraudwarning: {
      type: "boolean",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "geofraudwarning",
        type: "s:boolean"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    halo: {
      type: "Typehalo",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "halo",
        type: "tns:halo"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    eddeceased: {
      type: "Typeeddeceased",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "eddeceased",
        type: "tns:eddeceased"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    grodeceased: {
      type: "Typegrodeceased",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "grodeceased",
        type: "tns:grodeceased"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    addresslinks: {
      type: "TypeArrayOfAddresslink",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "addresslinks",
        type: "tns:ArrayOfAddresslink"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    additionalxml: {
      type: "string",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "additionalxml",
        "s:complexType": {
          mixed: true,
          "s:sequence": {
            "s:any": {}
          }
        },
        type: "s:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    matchedindividual: {
      type: "TypeMatchedIndividual",
      wsdlDefinition: {
        minOccurs: 0,
        maxOccurs: 1,
        name: "matchedindividual",
        type: "tns:MatchedIndividual"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCallMLResults6;
Modeler.register(TypeCallMLResults6, "TypeCallMLResults6");
