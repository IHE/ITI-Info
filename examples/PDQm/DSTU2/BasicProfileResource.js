{
    "resourceType" : "Profile",
    "identifier" : "pdqm",
    "name" : "Sample PDQm Profile",
    "structure" : [
    {
        "type" : "Patient",
        "element" : [
        {
            "path" : "Patient",
            "definition" :
            {
                "short" : "Patient",
                "formal" : "The primary record for a matching patient result in a Patient Demographics Supplier.",
                "min" : 1,
                "max" : 1,
                "type" : [
                {
                    "code" : "Resource"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.identifier",
            "definition" :
            {
                "short" : "Identifier List",
                "formal" : "An identifier that applies to this person as a patient. Identifiers from different Identity Domains shall be represented here. At least one patient identifier shall be present in this attribute. See ITI TF-2x: Appendix E.1 for details on populating the Identifier type.",
                "min" : 1,
                "max" : "*",
                "type" : [
                {
                    "code" : "Identifier"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.name",
            "definition" :
            {
                "short" : "Name List",
                "formal" : "The name(s) associated with the individual. At least one name shall be represented here.",
                "min" : 1,
                "max" : "*",
                "type" : [
                {
                    "code" : "HumanName"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.telecom",
            "definition" :
            {
                "short" : "Telecommunications Address",
                "formal" : "A contact detail (e.g., a telephone number or email address) by which the individual may be contacted.",
                "min" : 0,
                "max" : "*",
                "type" : [
                {
                    "code" : "Contact"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.gender",
            "definition" :
            {
                "short" : "Administrative Gender",
                "formal" : "A value representing the gender (sex) of this person. Note: this attribute should not include terms related to clinical gender, rather this is the administrative gender of the patient.",
                "min" : 0,
                "max" : 1,
                "type" : [
                {
                    "code" : "CodeableConcept"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.birthDate",
            "definition" :
            {
                "short" : "Patient Date of Birth",
                "formal" : "The date / time when the patient was born. ",
                "min" : 0,
                "max" : 1,
                "type" : [
                {
                    "code" : "dateTime"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.deceasedDate",
            "definition" :
            {
                "short" : "Patient Deceased Date",
                "formal" : "Indicates the date that the patient died.",
                "min" : 0,
                "max" : 1,
                "type" : [
                {
                    "code" : "dateTime"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.address",
            "definition" :
            {
                "short" : "Addresses of the patient",
                "formal" : "Address(es) for the individual.",
                "min" : 0,
                "max" : "*",
                "type" : [
                {
                    "code" : "Address"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.maritalStatus",
            "definition" :
            {
                "short" : "Patient Marital Status",
                "formal" : "This field contains a patient’s most recent marital status (civil).",
                "min" : 0,
                "max" : 1,
                "type" : [
                {
                    "code" : "CodeableConcept"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.multipleBirthInteger",
            "definition" :
            {
                "short" : "Patient Multiple Birth Order",
                "formal" : "Indicates the birth order when the patient is born as part of a multiple birth (e.g., twins).",
                "min" : 0,
                "max" : 1,
                "type" : [
                {
                    "code" : "integer"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.contact",
            "definition" :
            {
                "short" : "Patient contacts",
                "formal" : "A contact party (e.g., parent, spouse, friend) for the patient. ",
                "min" : 0,
                "max" : "*",
                "type" : [
                {
                    "code" : "ContactInfo"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.contact.relationship",
            "definition" :
            {
                "short" : "Relationship of the contact to the patient",
                "formal" : "Indicates the nature(s) of the relationship between the patient and the contact person.",
                "min" : 0,
                "max" : "*",
                "type" : [
                {
                    "code" : "CodeableConcept"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.contact.name",
            "definition" :
            {
                "short" : "Name of the associated person",
                "formal" : "A name associated with this person.",
                "min" : 0,
                "max" : "*",
                "type" : [
                {
                    "code" : "HumanName"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.contact.telecom",
            "definition" :
            {
                "short" : "Contact details for person",
                "formal" : "Contact detail(s) for the person (e.g., telephone number or email address).",
                "min" : 0,
                "max" : "*",
                "type" : [
                {
                    "code" : "Contact"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.contact.gender",
            "definition" :
            {
                "short" : "Gender of the contact",
                "formal" : "Gender of the contact person.",
                "min" : 0,
                "max" : 1,
                "type" : [
                {
                    "code" : "CodeableConcept"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.contact.address",
            "definition" :
            {
                "short" : "Address of the contact person",
                "formal" : "Address of the contact person.",
                "min" : 0,
                "max" : "*",
                "type" : [
                {
                    "code" : "Address"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.communication",
            "definition" :
            {
                "short" : "Language of communication",
                "formal" : "Languages which may be used to communicate with the patient about their health.",
                "min" : 0,
                "max" : 1,
                "type" : [
                {
                    "code" : "CodeableConcept"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.link",
            "definition" :
            {
                "short" : "",
                "formal" : "",
                "min" : 0,
                "max" : "*",
                "type" : [
                {
                    "code" : "Link"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.link.other",
            "definition" :
            {
                "short" : "",
                "formal" : "",
                "min" : 1,
                "max" : 1,
                "type" : [
                {
                    "code" : "Resource(Patient)"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.link.type",
            "definition" :
            {
                "short" : "",
                "formal" : "",
                "min" : 1,
                "max" : 1,
                "type" : [
                {
                    "code" : "code"
                }
                ],
                "isModifier" : false
            }
        },{
            "path" : "Patient.active",
            "definition" :
            {
                "short" : "Indicates whether patient is active",
                "formal" : "Indicates whether the patient record is currently in active use.",
                "min" : 0,
                "max" : 1,
                "type" : [
                {
                    "code" : "boolean"
                }
                ],
                "isModifier" : false
            }
        }
        ],
        "searchParam" : [
        {
            "name" : "identifier",
            "type" : "token",
            "description" : "Filter on patient's identifier"
        },{
            "name" : "birthdate",
            "type" : "date",
            "description" : "Filter on patient's date of birth"
        },{
            "name" : "_id",
            "type" : "token",
            "description" : "Filter on resource identifier of patient"
        },{
            "name" : "gender",
            "type" : "token",
            "description" : "Filter on patient's gender"
        },{
            "name" : "family",
            "type" : "string",
            "description" : "Filter on patient's family name"
        },{
            "name" : "given",
            "type" : "string",
            "description" : "Filter on patient's given name"
        },{
            "name" : "mothersMadienName.family",
            "type" : "string",
            "description" : "Filter on patient's mother's maiden name (family part)"
        },{
            "name" : "mothersMaidenName.given",
            "type" : "string",
            "description" : "Filter on patient's mother's maiden name (given part)"
        },{
            "name" : "telecom",
            "type" : "string",
            "description" : "Filter on patient's telecom addresses"
        },{
            "name" : "multipleBirthInteger",
            "type" : "number",
            "description" : "Filter on multipleBirthInteger"
        },{
            "name" : "address",
            "type" : "string",
            "description" : "Continuation option: The number of results to include in this resultset"
        },{
            "name" : "page",
            "type" : "integer",
            "description" : "Continuation option: The page number (offset) of results"
        },{
            "name" : "count",
            "type" : "integer",
            "description" : "Continuation option: The number of results to include in this resultset"
        }
        ]
    }
    ],
    "extensionDefn" : [
    {
        "code" : "mothersMaidenName",
        "contextType" : "resource",
        "context" : [ "Patient" ],
        "definition" :
        {
            "short" : "Patient's mother's maiden name",
            "formal" : "The name of the patient's mother",
            "min" : 0,
            "max" : 1,
            "type" : [
            {
                "code" : "HumanName"
            }
            ],
            "isModifier" : false
        }
    }
    ]
}