//export // to be used only with module on a server or with github page
const predefinedGraphs = {
    "Graph_3":
    [
        {
          "data": {
            "id": "http://www.plm-interop.org/family",
            "label": "family"
          },
          "classes": [
            "ontology"
          ]
        },
        {
          "data": {
            "id": "OWLClass",
            "label": "OWLClasses",
            "parent": "http://www.plm-interop.org/family"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "OWLAnnotationProperty",
            "label": "OWLAnnotationProperties",
            "parent": "http://www.plm-interop.org/family"
          },
          "classes": [
            "annotationproperty"
          ]
        },
        {
          "data": {
            "id": "defaultOWLAnnotationProperty",
            "label": "defaultOWLAnnotationProperties"
          },
          "classes": [
            "annotationproperty"
          ]
        },
        {
          "data": {
            "id": "Datatype",
            "label": "DataTypes"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema",
            "label": "XMLS",
            "parent": "Datatype"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns",
            "label": "RDFS",
            "parent": "Datatype"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2002/07/owl",
            "label": "OWL",
            "parent": "Datatype"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "OWLProperty",
            "label": "OWLProperties",
            "parent": "http://www.plm-interop.org/family"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "OWLIndividual",
            "label": "OWLIndividuals",
            "parent": "http://www.plm-interop.org/family"
          },
          "classes": [
            "individual"
          ]
        },
        {
          "data": {
            "id": "OWLDatatypeProperty",
            "label": "OWLDatatypeProperty",
            "parent": "http://www.plm-interop.org/family"
          },
          "classes": [
            "datatypeproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Auncle",
            "label": "Auncle",
            "parent": "01JNKF3070ZFSWG3D6SPFVRDNR"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L243C7342",
            "label": "_g_L243C7342",
            "parent": "01JNKF3070ZFSWG3D6SPFVRDNR"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Aunt",
            "label": "Aunt",
            "parent": "OWLClass"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Daughter",
            "label": "Daughter",
            "parent": "01JNKF30703F58W6HR6BZHDVCA"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L257C7758",
            "label": "_g_L257C7758",
            "parent": "01JNKF30703F58W6HR6BZHDVCA"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Family",
            "label": "Family",
            "parent": "01JNKF3070J8ED29J34JG39G20"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Father",
            "label": "Father",
            "parent": "01JNKF307021144RGXA2Z0PA2G"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L277C8552",
            "label": "_g_L277C8552",
            "parent": "01JNKF307021144RGXA2Z0PA2G"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Female",
            "label": "Female",
            "parent": "OWLClass"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Gender",
            "label": "Gender",
            "parent": "OWLClass"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#GrandFather",
            "label": "GrandFather",
            "parent": "01JNKF3071PPEWK4QT6CE4W8BZ"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L303C9438",
            "label": "_g_L303C9438",
            "parent": "01JNKF3071PPEWK4QT6CE4W8BZ"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#GrandMother",
            "label": "GrandMother",
            "parent": "01JNKF3071KSA1QNPDA1M6SJ19"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L317C10135",
            "label": "_g_L317C10135",
            "parent": "01JNKF3071KSA1QNPDA1M6SJ19"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Husband",
            "label": "Husband",
            "parent": "01JNKF3071GJJK612912RTSDKE"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L331C10824",
            "label": "_g_L331C10824",
            "parent": "01JNKF3071GJJK612912RTSDKE"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Lineage",
            "label": "Lineage",
            "parent": "01JNKF3070J8ED29J34JG39G20"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Male",
            "label": "Male",
            "parent": "OWLClass"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Mother",
            "label": "Mother",
            "parent": "01JNKF30727HA9RG86C8Y50QVA"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L354C11636",
            "label": "_g_L354C11636",
            "parent": "01JNKF30727HA9RG86C8Y50QVA"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Parent",
            "label": "Parent",
            "parent": "01JNKF3072A9MWCVPQJ5DDNGTQ"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L367C12233",
            "label": "_g_L367C12233",
            "parent": "01JNKF3072A9MWCVPQJ5DDNGTQ"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Person",
            "label": "Person",
            "parent": "OWLClass"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Son",
            "label": "Son",
            "parent": "01JNKF30725ADK8XJGS644N11V"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L387C12842",
            "label": "_g_L387C12842",
            "parent": "01JNKF30725ADK8XJGS644N11V"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Spouse",
            "label": "Spouse",
            "parent": "01JNKF3072DSF1FR02T7GHP8MC"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L399C13383",
            "label": "_g_L399C13383",
            "parent": "01JNKF3072DSF1FR02T7GHP8MC"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Uncle",
            "label": "Uncle",
            "parent": "OWLClass"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Wife",
            "label": "Wife",
            "parent": "01JNKF3072S6G29PDAB9A1PEED"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L416C13853",
            "label": "_g_L416C13853",
            "parent": "01JNKF3072S6G29PDAB9A1PEED"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#grandParent",
            "label": "grandParent",
            "parent": "01JNKF3072Q8SZ0NJ5QBA48F00"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "_g_L429C14450",
            "label": "_g_L429C14450",
            "parent": "01JNKF3072Q8SZ0NJ5QBA48F00"
          },
          "classes": [
            "class"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasAuncle",
            "label": "hasAuncle",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasAunt",
            "label": "hasAunt",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasBrother",
            "label": "hasBrother",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasChild",
            "label": "hasChild",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasCousin",
            "label": "△hasCousin",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasDaughter",
            "label": "hasDaughter",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasFather",
            "label": "hasFather",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandChild",
            "label": "hasGrandChild",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandDaughter",
            "label": "hasGrandDaughter",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandFather",
            "label": "hasGrandFather",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandMother",
            "label": "hasGrandMother",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandParent",
            "label": "hasGrandParent",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandSon",
            "label": "hasGrandSon",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandparent",
            "label": "hasGrandparent",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasHusband",
            "label": "hasHusband",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasMother",
            "label": "hasMother",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasParent",
            "label": "hasParent",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSibling",
            "label": "△hasSibling",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSister",
            "label": "hasSister",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSon",
            "label": "hasSon",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSpouse",
            "label": "hasSpouse",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasUncle",
            "label": "hasUncle",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasWife",
            "label": "hasWife",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#isCousinOf",
            "label": "isCousinOf",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#isSiblingOf",
            "label": "isSiblingOf",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#knows",
            "label": "knows",
            "parent": "OWLProperty"
          },
          "classes": [
            "property"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#string",
            "label": "string",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#boolean",
            "label": "boolean",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#decimal",
            "label": "decimal",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#integer",
            "label": "integer",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#int",
            "label": "int",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#long",
            "label": "long",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#short",
            "label": "short",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#byte",
            "label": "byte",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#nonPositiveInteger",
            "label": "nonPositiveInteger",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
            "label": "nonNegativeInteger",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#positiveInteger",
            "label": "positiveInteger",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#unsignedLong",
            "label": "unsignedLong",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#unsignedInt",
            "label": "unsignedInt",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#unsignedShort",
            "label": "unsignedShort",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#unsignedByte",
            "label": "unsignedByte",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#float",
            "label": "float",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#double",
            "label": "double",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#dateTime",
            "label": "dateTime",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#date",
            "label": "date",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#time",
            "label": "time",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#duration",
            "label": "duration",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#QName",
            "label": "QName",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#anyURI",
            "label": "anyURI",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#base64Binary",
            "label": "base64Binary",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#hexBinary",
            "label": "hexBinary",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#normalizedString",
            "label": "normalizedString",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#token",
            "label": "token",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#language",
            "label": "language",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#NMTOKEN",
            "label": "NMTOKEN",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#ID",
            "label": "ID",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#IDREF",
            "label": "IDREF",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#ENTITY",
            "label": "ENTITY",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2001/XMLSchema#anySimpleType",
            "label": "anySimpleType",
            "parent": "http://www.w3.org/2001/XMLSchema"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral",
            "label": "XMLLiteral",
            "parent": "http://www.w3.org/1999/02/22-rdf-syntax-ns"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
            "label": "langString",
            "parent": "http://www.w3.org/1999/02/22-rdf-syntax-ns"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2002/07/owl#rational",
            "label": "rational",
            "parent": "http://www.w3.org/2002/07/owl"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2002/07/owl#real",
            "label": "real",
            "parent": "http://www.w3.org/2002/07/owl"
          },
          "classes": [
            "datatype"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Age",
            "label": "→Age",
            "parent": "OWLDatatypeProperty"
          },
          "classes": [
            "datatypeproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#FirstName",
            "label": "FirstName",
            "parent": "OWLDatatypeProperty"
          },
          "classes": [
            "datatypeproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Name",
            "label": "Name",
            "parent": "OWLDatatypeProperty"
          },
          "classes": [
            "datatypeproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#ProperName",
            "label": "ProperName",
            "parent": "OWLDatatypeProperty"
          },
          "classes": [
            "datatypeproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#aNumeroIdentiteNational",
            "label": "aNumeroIdentiteNational",
            "parent": "OWLDatatypeProperty"
          },
          "classes": [
            "datatypeproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Individual_B",
            "label": "Individual_B",
            "parent": "OWLIndividual"
          },
          "classes": [
            "individual"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#OWLNamedIndividual_d1a3927f_7e28_49b0_a09f_cf5eb4b289e7",
            "label": "OWLNamedIndividual_d1a3927f_7e28_49b0_a09f_cf5eb4b289e7",
            "parent": "OWLIndividual"
          },
          "classes": [
            "individual"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#individual_A",
            "label": "individual_A",
            "parent": "OWLIndividual"
          },
          "classes": [
            "individual"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#individual_C",
            "label": "individual_C",
            "parent": "OWLIndividual"
          },
          "classes": [
            "individual"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#individual_Z",
            "label": "individual_Z",
            "parent": "OWLIndividual"
          },
          "classes": [
            "individual"
          ]
        },
        {
          "data": {
            "id": "01JNKF3070ZFSWG3D6SPFVRDNR",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF30703F58W6HR6BZHDVCA",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF3070J8ED29J34JG39G20",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF307021144RGXA2Z0PA2G",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF3071PPEWK4QT6CE4W8BZ",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF3071KSA1QNPDA1M6SJ19",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF3071GJJK612912RTSDKE",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF30727HA9RG86C8Y50QVA",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF3072A9MWCVPQJ5DDNGTQ",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF30725ADK8XJGS644N11V",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF3072DSF1FR02T7GHP8MC",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF3072S6G29PDAB9A1PEED",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF3072Q8SZ0NJ5QBA48F00",
            "label": "≡",
            "parent": "OWLClass"
          },
          "classes": [
            "equivalence"
          ]
        },
        {
          "data": {
            "id": "01JNKF3075E5NCKY466HSQ94FM",
            "label": "PropertyChain 1",
            "parent": "http://www.plm-interop.org/family#hasAunt"
          },
          "classes": [
            "propertychain"
          ]
        },
        {
          "data": {
            "id": "blank-0-0",
            "label": "1",
            "parent": "01JNKF3075E5NCKY466HSQ94FM"
          },
          "classes": [
            "chainmember"
          ]
        },
        {
          "data": {
            "id": "blank-1-0",
            "label": "2",
            "parent": "01JNKF3075E5NCKY466HSQ94FM"
          },
          "classes": [
            "chainmember"
          ]
        },
        {
          "data": {
            "id": "01JNKF3075G5621QF5EGDSG5QQ",
            "label": "PropertyChain 2",
            "parent": "http://www.plm-interop.org/family#hasCousin"
          },
          "classes": [
            "propertychain"
          ]
        },
        {
          "data": {
            "id": "blank-0-1",
            "label": "1",
            "parent": "01JNKF3075G5621QF5EGDSG5QQ"
          },
          "classes": [
            "chainmember"
          ]
        },
        {
          "data": {
            "id": "blank-1-1",
            "label": "2",
            "parent": "01JNKF3075G5621QF5EGDSG5QQ"
          },
          "classes": [
            "chainmember"
          ]
        },
        {
          "data": {
            "id": "blank-2-1",
            "label": "3",
            "parent": "01JNKF3075G5621QF5EGDSG5QQ"
          },
          "classes": [
            "chainmember"
          ]
        },
        {
          "data": {
            "id": "01JNKF30757J8ZM8D5RZRN94KF",
            "label": "PropertyChain 3",
            "parent": "http://www.plm-interop.org/family#hasGrandChild"
          },
          "classes": [
            "propertychain"
          ]
        },
        {
          "data": {
            "id": "blank-0-2",
            "label": "1",
            "parent": "01JNKF30757J8ZM8D5RZRN94KF"
          },
          "classes": [
            "chainmember"
          ]
        },
        {
          "data": {
            "id": "blank-1-2",
            "label": "2",
            "parent": "01JNKF30757J8ZM8D5RZRN94KF"
          },
          "classes": [
            "chainmember"
          ]
        },
        {
          "data": {
            "id": "01JNKF30752PSGCNVWCPWTN233",
            "label": "PropertyChain 4",
            "parent": "http://www.plm-interop.org/family#hasUncle"
          },
          "classes": [
            "propertychain"
          ]
        },
        {
          "data": {
            "id": "blank-0-3",
            "label": "1",
            "parent": "01JNKF30752PSGCNVWCPWTN233"
          },
          "classes": [
            "chainmember"
          ]
        },
        {
          "data": {
            "id": "blank-1-3",
            "label": "2",
            "parent": "01JNKF30752PSGCNVWCPWTN233"
          },
          "classes": [
            "chainmember"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "label",
            "parent": "defaultOWLAnnotationProperty"
          },
          "classes": [
            "annotationproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2000/01/rdf-schema#comment",
            "label": "comment",
            "parent": "defaultOWLAnnotationProperty"
          },
          "classes": [
            "annotationproperty"
          ]
        },
        {
          "data": {
            "id": "http://purl.org/dc/elements/1.1/creator",
            "label": "creator",
            "parent": "defaultOWLAnnotationProperty"
          },
          "classes": [
            "annotationproperty"
          ]
        },
        {
          "data": {
            "id": "http://purl.org/dc/elements/1.1/date",
            "label": "date",
            "parent": "defaultOWLAnnotationProperty"
          },
          "classes": [
            "annotationproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2002/07/owl#deprecated",
            "label": "deprecated",
            "parent": "defaultOWLAnnotationProperty"
          },
          "classes": [
            "annotationproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2002/07/owl#versionInfo",
            "label": "versionInfo",
            "parent": "defaultOWLAnnotationProperty"
          },
          "classes": [
            "annotationproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#UUID",
            "label": "UUID",
            "parent": "OWLAnnotationProperty"
          },
          "classes": [
            "annotationproperty"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2002/07/owl#Thing",
            "label": "Thing",
            "parent": "OWLIndividual"
          },
          "classes": [
            "individual"
          ]
        },
        {
          "data": {
            "id": "http://www.w3.org/2002/07/owl#Nothing",
            "label": "Nothing",
            "parent": "OWLIndividual"
          },
          "classes": [
            "individual"
          ]
        },
        {
          "data": {
            "id": "01JNKF306Z7YKRDKMRJ9HDVD6D",
            "source": "http://www.plm-interop.org/family#Individual_B",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "isa",
            "type": "isa",
            "edgeType": "isa"
          },
          "classes": [
            "isa"
          ]
        },
        {
          "data": {
            "id": "01JNKF306Z82BRWVTG404RNTGD",
            "source": "http://www.plm-interop.org/family#individual_A",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "isa",
            "type": "isa",
            "edgeType": "isa"
          },
          "classes": [
            "isa"
          ]
        },
        {
          "data": {
            "id": "01JNKF306Z9EVBHJNZH05EB910",
            "source": "http://www.plm-interop.org/family#individual_C",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "isa",
            "type": "isa",
            "edgeType": "isa"
          },
          "classes": [
            "isa"
          ]
        },
        {
          "data": {
            "id": "01JNKF306ZH4AJF9GVJB5J9YP8",
            "source": "http://www.plm-interop.org/family#individual_Z",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "isa",
            "type": "isa",
            "edgeType": "isa"
          },
          "classes": [
            "isa"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Auncle-equivalentclass-_g_L243C7342",
            "source": "http://www.plm-interop.org/family#Auncle",
            "target": "_g_L243C7342",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Aunt-subclassof->http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#Aunt",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Daughter-subclassof->http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#Daughter",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Daughter-equivalentclass-_g_L257C7758",
            "source": "http://www.plm-interop.org/family#Daughter",
            "target": "_g_L257C7758",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Family-equivalentclass-http://www.plm-interop.org/family#Lineage",
            "source": "http://www.plm-interop.org/family#Family",
            "target": "http://www.plm-interop.org/family#Lineage",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Father-subclassof->http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#Father",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Father-equivalentclass-_g_L277C8552",
            "source": "http://www.plm-interop.org/family#Father",
            "target": "_g_L277C8552",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Female-subclassof->http://www.plm-interop.org/family#Gender",
            "source": "http://www.plm-interop.org/family#Female",
            "target": "http://www.plm-interop.org/family#Gender",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#GrandFather-subclassof->http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#GrandFather",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#GrandFather-subclassof->http://www.plm-interop.org/family#grandParent",
            "source": "http://www.plm-interop.org/family#GrandFather",
            "target": "http://www.plm-interop.org/family#grandParent",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#GrandFather-equivalentclass-_g_L303C9438",
            "source": "http://www.plm-interop.org/family#GrandFather",
            "target": "_g_L303C9438",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#GrandMother-subclassof->http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#GrandMother",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#GrandMother-subclassof->http://www.plm-interop.org/family#grandParent",
            "source": "http://www.plm-interop.org/family#GrandMother",
            "target": "http://www.plm-interop.org/family#grandParent",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#GrandMother-equivalentclass-_g_L317C10135",
            "source": "http://www.plm-interop.org/family#GrandMother",
            "target": "_g_L317C10135",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Husband-subclassof->http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#Husband",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Husband-equivalentclass-_g_L331C10824",
            "source": "http://www.plm-interop.org/family#Husband",
            "target": "_g_L331C10824",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Male-subclassof->http://www.plm-interop.org/family#Gender",
            "source": "http://www.plm-interop.org/family#Male",
            "target": "http://www.plm-interop.org/family#Gender",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Mother-subclassof->http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#Mother",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Mother-equivalentclass-_g_L354C11636",
            "source": "http://www.plm-interop.org/family#Mother",
            "target": "_g_L354C11636",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Parent-equivalentclass-_g_L367C12233",
            "source": "http://www.plm-interop.org/family#Parent",
            "target": "_g_L367C12233",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Son-equivalentclass-_g_L387C12842",
            "source": "http://www.plm-interop.org/family#Son",
            "target": "_g_L387C12842",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Spouse-equivalentclass-_g_L399C13383",
            "source": "http://www.plm-interop.org/family#Spouse",
            "target": "_g_L399C13383",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Uncle-subclassof->http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#Uncle",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Wife-subclassof->http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#Wife",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "subClass",
            "edgeType": "subClass"
          },
          "classes": [
            "subClass"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Wife-equivalentclass-_g_L416C13853",
            "source": "http://www.plm-interop.org/family#Wife",
            "target": "_g_L416C13853",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#grandParent-equivalentclass-_g_L429C14450",
            "source": "http://www.plm-interop.org/family#grandParent",
            "target": "_g_L429C14450",
            "label": "≡",
            "type": "equivalentProperty",
            "edgeType": "equivalentProperty"
          },
          "classes": [
            "equivalentProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasAunt-subpropertyof-http://www.plm-interop.org/family#hasAuncle",
            "source": "http://www.plm-interop.org/family#hasAunt",
            "target": "http://www.plm-interop.org/family#hasAuncle",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasBrother-subpropertyof-http://www.plm-interop.org/family#hasSibling",
            "source": "http://www.plm-interop.org/family#hasBrother",
            "target": "http://www.plm-interop.org/family#hasSibling",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasChild-inverseproperty-http://www.plm-interop.org/family#hasParent",
            "source": "http://www.plm-interop.org/family#hasChild",
            "target": "http://www.plm-interop.org/family#hasParent",
            "label": "",
            "type": "inverseProperty",
            "edgeType": "inverseProperty"
          },
          "classes": [
            "inverseProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasDaughter-subpropertyof-http://www.plm-interop.org/family#hasChild",
            "source": "http://www.plm-interop.org/family#hasDaughter",
            "target": "http://www.plm-interop.org/family#hasChild",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasFather-subpropertyof-http://www.plm-interop.org/family#hasParent",
            "source": "http://www.plm-interop.org/family#hasFather",
            "target": "http://www.plm-interop.org/family#hasParent",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandChild-inverseproperty-http://www.plm-interop.org/family#hasGrandParent",
            "source": "http://www.plm-interop.org/family#hasGrandChild",
            "target": "http://www.plm-interop.org/family#hasGrandParent",
            "label": "",
            "type": "inverseProperty",
            "edgeType": "inverseProperty"
          },
          "classes": [
            "inverseProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandDaughter-subpropertyof-http://www.plm-interop.org/family#hasGrandChild",
            "source": "http://www.plm-interop.org/family#hasGrandDaughter",
            "target": "http://www.plm-interop.org/family#hasGrandChild",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandFather-subpropertyof-http://www.plm-interop.org/family#hasGrandParent",
            "source": "http://www.plm-interop.org/family#hasGrandFather",
            "target": "http://www.plm-interop.org/family#hasGrandParent",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandMother-subpropertyof-http://www.plm-interop.org/family#hasGrandParent",
            "source": "http://www.plm-interop.org/family#hasGrandMother",
            "target": "http://www.plm-interop.org/family#hasGrandParent",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandSon-subpropertyof-http://www.plm-interop.org/family#hasGrandChild",
            "source": "http://www.plm-interop.org/family#hasGrandSon",
            "target": "http://www.plm-interop.org/family#hasGrandChild",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasHusband-subpropertyof-http://www.plm-interop.org/family#hasSpouse",
            "source": "http://www.plm-interop.org/family#hasHusband",
            "target": "http://www.plm-interop.org/family#hasSpouse",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasHusband-inverseproperty-http://www.plm-interop.org/family#hasWife",
            "source": "http://www.plm-interop.org/family#hasHusband",
            "target": "http://www.plm-interop.org/family#hasWife",
            "label": "",
            "type": "inverseProperty",
            "edgeType": "inverseProperty"
          },
          "classes": [
            "inverseProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasMother-subpropertyof-http://www.plm-interop.org/family#hasParent",
            "source": "http://www.plm-interop.org/family#hasMother",
            "target": "http://www.plm-interop.org/family#hasParent",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSister-subpropertyof-http://www.plm-interop.org/family#hasSibling",
            "source": "http://www.plm-interop.org/family#hasSister",
            "target": "http://www.plm-interop.org/family#hasSibling",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSon-subpropertyof-http://www.plm-interop.org/family#hasChild",
            "source": "http://www.plm-interop.org/family#hasSon",
            "target": "http://www.plm-interop.org/family#hasChild",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasUncle-subpropertyof-http://www.plm-interop.org/family#hasAuncle",
            "source": "http://www.plm-interop.org/family#hasUncle",
            "target": "http://www.plm-interop.org/family#hasAuncle",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasWife-subpropertyof-http://www.plm-interop.org/family#hasSpouse",
            "source": "http://www.plm-interop.org/family#hasWife",
            "target": "http://www.plm-interop.org/family#hasSpouse",
            "label": "",
            "type": "subProperty",
            "edgeType": "subProperty"
          },
          "classes": [
            "subProperty"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasAuncle-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasAuncle",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasChild-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasChild",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasCousin-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasCousin",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandChild-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasGrandChild",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandParent-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasGrandParent",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandparent-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasGrandparent",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasParent-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasParent",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSibling-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasSibling",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSpouse-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasSpouse",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#isCousinOf-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#isCousinOf",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#isSiblingOf-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#isSiblingOf",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#knows-domain-http://www.w3.org/2002/07/owl#Thing",
            "source": "http://www.plm-interop.org/family#knows",
            "target": "http://www.w3.org/2002/07/owl#Thing",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Age-domain-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#Age",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "domain",
            "edgeType": "domain"
          },
          "classes": [
            "domain"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasAunt-range-http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#hasAunt",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasBrother-range-http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#hasBrother",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasBrother-range-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasBrother",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasCousin-range-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasCousin",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasDaughter-range-http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#hasDaughter",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasFather-range-http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#hasFather",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandDaughter-range-http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#hasGrandDaughter",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandFather-range-http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#hasGrandFather",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandMother-range-http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#hasGrandMother",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasGrandSon-range-http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#hasGrandSon",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasHusband-range-http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#hasHusband",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasHusband-range-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasHusband",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasMother-range-http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#hasMother",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSibling-range-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasSibling",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSister-range-http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#hasSister",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSister-range-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasSister",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasSon-range-http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#hasSon",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasUncle-range-http://www.plm-interop.org/family#Male",
            "source": "http://www.plm-interop.org/family#hasUncle",
            "target": "http://www.plm-interop.org/family#Male",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasWife-range-http://www.plm-interop.org/family#Female",
            "source": "http://www.plm-interop.org/family#hasWife",
            "target": "http://www.plm-interop.org/family#Female",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#hasWife-range-http://www.plm-interop.org/family#Person",
            "source": "http://www.plm-interop.org/family#hasWife",
            "target": "http://www.plm-interop.org/family#Person",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Age-range-http://www.w3.org/2001/XMLSchema#integer",
            "source": "http://www.plm-interop.org/family#Age",
            "target": "http://www.w3.org/2001/XMLSchema#integer",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Name-range-http://www.w3.org/2001/XMLSchema#string",
            "source": "http://www.plm-interop.org/family#Name",
            "target": "http://www.w3.org/2001/XMLSchema#string",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#aNumeroIdentiteNational-range-http://www.w3.org/2001/XMLSchema#string",
            "source": "http://www.plm-interop.org/family#aNumeroIdentiteNational",
            "target": "http://www.w3.org/2001/XMLSchema#string",
            "label": "",
            "type": "range",
            "edgeType": "range"
          },
          "classes": [
            "range"
          ]
        },
        {
          "data": {
            "id": "01JNKF3075C0EHVJ6CZ992KX2W",
            "source": "01JNKF3075E5NCKY466HSQ94FM",
            "target": "http://www.plm-interop.org/family#hasParent",
            "label": "1",
            "type": "nextchaintype",
            "edgeType": "nextchaintype"
          },
          "classes": [
            "nextchaintype"
          ]
        },
        {
          "data": {
            "id": "01JNKF30757KJRY1GVQGSWCW54",
            "source": "blank-0-0",
            "target": "blank-1-0",
            "label": "",
            "type": "nextchainmember",
            "edgeType": "nextchainmember"
          },
          "classes": [
            "nextchainmember"
          ]
        },
        {
          "data": {
            "id": "01JNKF3075ZRB4XN2PNA18YDVV",
            "source": "01JNKF3075E5NCKY466HSQ94FM",
            "target": "http://www.plm-interop.org/family#hasSister",
            "label": "2",
            "type": "nextchaintype",
            "edgeType": "nextchaintype"
          },
          "classes": [
            "nextchaintype"
          ]
        },
        {
          "data": {
            "id": "01JNKF30754DS5DQV4NEF51NZ8",
            "source": "01JNKF3075G5621QF5EGDSG5QQ",
            "target": "http://www.plm-interop.org/family#hasParent",
            "label": "1",
            "type": "nextchaintype",
            "edgeType": "nextchaintype"
          },
          "classes": [
            "nextchaintype"
          ]
        },
        {
          "data": {
            "id": "01JNKF3075C1A7TSEP44QS6KVR",
            "source": "blank-0-1",
            "target": "blank-1-1",
            "label": "",
            "type": "nextchainmember",
            "edgeType": "nextchainmember"
          },
          "classes": [
            "nextchainmember"
          ]
        },
        {
          "data": {
            "id": "01JNKF30755KESTBP0Q6XJ33YN",
            "source": "01JNKF3075G5621QF5EGDSG5QQ",
            "target": "http://www.plm-interop.org/family#hasSibling",
            "label": "2",
            "type": "nextchaintype",
            "edgeType": "nextchaintype"
          },
          "classes": [
            "nextchaintype"
          ]
        },
        {
          "data": {
            "id": "01JNKF30751MFGG25P7TCXEK2B",
            "source": "blank-1-1",
            "target": "blank-2-1",
            "label": "",
            "type": "nextchainmember",
            "edgeType": "nextchainmember"
          },
          "classes": [
            "nextchainmember"
          ]
        },
        {
          "data": {
            "id": "01JNKF3075F03YTHKWM6TNFNF3",
            "source": "01JNKF3075G5621QF5EGDSG5QQ",
            "target": "http://www.plm-interop.org/family#hasChild",
            "label": "3",
            "type": "nextchaintype",
            "edgeType": "nextchaintype"
          },
          "classes": [
            "nextchaintype"
          ]
        },
        {
          "data": {
            "id": "01JNKF307HE3056W92ZR6MJNSS",
            "source": "http://www.plm-interop.org/family#OWLNamedIndividual_d1a3927f_7e28_49b0_a09f_cf5eb4b289e7",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Nicolas",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF3075XFY4TA5V08M3X03J",
            "source": "blank-0-2",
            "target": "blank-1-2",
            "label": "",
            "type": "nextchainmember",
            "edgeType": "nextchainmember"
          },
          "classes": [
            "nextchainmember"
          ]
        },
        {
          "data": {
            "id": "01JNKF307GRC4Y9GN244X31C9Z",
            "source": "http://www.plm-interop.org/family#hasCousin",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "isCousinOf",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF3076JB3RRZWMZ2DHG318",
            "source": "01JNKF30752PSGCNVWCPWTN233",
            "target": "http://www.plm-interop.org/family#hasParent",
            "label": "1",
            "type": "nextchaintype",
            "edgeType": "nextchaintype"
          },
          "classes": [
            "nextchaintype"
          ]
        },
        {
          "data": {
            "id": "01JNKF3076TQB95CV9FD4E9Y75",
            "source": "blank-0-3",
            "target": "blank-1-3",
            "label": "",
            "type": "nextchainmember",
            "edgeType": "nextchainmember"
          },
          "classes": [
            "nextchainmember"
          ]
        },
        {
          "data": {
            "id": "01JNKF3076811RDXA37T082H2F",
            "source": "01JNKF30752PSGCNVWCPWTN233",
            "target": "http://www.plm-interop.org/family#hasBrother",
            "label": "2",
            "type": "nextchaintype",
            "edgeType": "nextchaintype"
          },
          "classes": [
            "nextchaintype"
          ]
        },
        {
          "data": {
            "id": "01JNKF307GDEZS71K202HZKNXD",
            "source": "http://www.plm-interop.org/family#hasBrother",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "hasBrother",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307GWVQJN9SKAJSC6ME0",
            "source": "http://www.plm-interop.org/family#hasSibling",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "isSiblingOf",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307H22H4ZBJBJPFRERQH",
            "source": "http://www.plm-interop.org/family#Female",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Gender",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307G4M4Q87M15M0HRDCF",
            "source": "http://www.plm-interop.org/family#hasHusband",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "hasHusband",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307HEZYQ9KHD1A9SVDQY",
            "source": "http://www.plm-interop.org/family#Person",
            "target": "http://www.plm-interop.org/family#UUID",
            "label": "myUUID",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF3075CQ71E8WBFEETA2AK",
            "source": "01JNKF30757J8ZM8D5RZRN94KF",
            "target": "http://www.plm-interop.org/family#hasChild",
            "label": "2",
            "type": "nextchaintype",
            "edgeType": "nextchaintype"
          },
          "classes": [
            "nextchaintype"
          ]
        },
        {
          "data": {
            "id": "01JNKF307GD2A5XD00A1EVNGHC",
            "source": "http://www.plm-interop.org/family#hasSister",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "hasSister",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307GF6XMSH70FCX66VKM",
            "source": "http://www.plm-interop.org/family#hasWife",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "hasWife",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307HCY5W9ZHFCC0CPD4H",
            "source": "http://www.plm-interop.org/family#Person",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Person",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#Individual_B-http://www.plm-interop.org/family#hasParent->http://www.plm-interop.org/family#individual_A",
            "source": "http://www.plm-interop.org/family#Individual_B",
            "target": "http://www.plm-interop.org/family#individual_A",
            "label": "http://www.plm-interop.org/family#hasParent",
            "type": "relation",
            "edgeType": "relation"
          },
          "classes": [
            "relation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307HP28KT0636PVN1528",
            "source": "http://www.plm-interop.org/family#Uncle",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Tonton",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307G9W92AZ9TXB75A6EE",
            "source": "http://www.plm-interop.org/family#Family",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Family",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#individual_C-http://www.plm-interop.org/family#hasParent->http://www.plm-interop.org/family#Individual_B",
            "source": "http://www.plm-interop.org/family#individual_C",
            "target": "http://www.plm-interop.org/family#Individual_B",
            "label": "http://www.plm-interop.org/family#hasParent",
            "type": "relation",
            "edgeType": "relation"
          },
          "classes": [
            "relation"
          ]
        },
        {
          "data": {
            "id": "http://www.plm-interop.org/family#individual_A-http://www.plm-interop.org/family#knows->http://www.plm-interop.org/family#individual_A",
            "source": "http://www.plm-interop.org/family#individual_A",
            "target": "http://www.plm-interop.org/family#individual_A",
            "label": "http://www.plm-interop.org/family#knows",
            "type": "relation",
            "edgeType": "relation"
          },
          "classes": [
            "relation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307H52P40TTA93TJTYBG",
            "source": "http://www.plm-interop.org/family#Gender",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Gender",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307HWEDKZ47PAMNJ0HTY",
            "source": "http://www.plm-interop.org/family#Male",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Male",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307GZMH0M8ZJ95R03S9B",
            "source": "http://www.plm-interop.org/family#hasSibling",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "hasSibling",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307HKXSTYE5NEV49Y2K2",
            "source": "http://www.plm-interop.org/family#Female",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Female",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF3075BWW4E4SSZ8Z6VBBQ",
            "source": "01JNKF30757J8ZM8D5RZRN94KF",
            "target": "http://www.plm-interop.org/family#hasChild",
            "label": "1",
            "type": "nextchaintype",
            "edgeType": "nextchaintype"
          },
          "classes": [
            "nextchaintype"
          ]
        },
        {
          "data": {
            "id": "01JNKF307HS0C13ZH2E1KB7687",
            "source": "http://www.plm-interop.org/family#Uncle",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Oncle",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307G9NJ76MBJBQ00DNE9",
            "source": "http://www.plm-interop.org/family#hasCousin",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "hasCousin",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307G02EWT8XFR8K43PSF",
            "source": "http://www.plm-interop.org/family#Age",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "http://www.plm-interop.org/family#Age",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307GBVJ345C2N9HGY3H1",
            "source": "http://www.plm-interop.org/family#Age",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "http://www.plm-interop.org/family#Person",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        },
        {
          "data": {
            "id": "01JNKF307G5PFY9WFGARTA4T37",
            "source": "http://www.plm-interop.org/family#Age",
            "target": "http://www.w3.org/2000/01/rdf-schema#label",
            "label": "Age",
            "type": "annotation",
            "edgeType": "annotation"
          },
          "classes": [
            "annotation"
          ]
        }
      ],
   
    "Graph_1": [

        {
            "data": {
                "id": "http://www.plm-interop.org/family",
                "label": "family"
            },
            "classes": [
                "ontology"
            ]
        },
        {
            "data": {
                "id": "OWLClass",
                "label": "OWLClasses",
                "parent": "http://www.plm-interop.org/family"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "OWLAnnotationProperty",
                "label": "OWLAnnotationProperties",
                "parent": "http://www.plm-interop.org/family"
            },
            "classes": [
                "annotationproperty"
            ]
        },
        {
            "data": {
                "id": "defaultOWLAnnotationProperty",
                "label": "defaultOWLAnnotationProperties"
            },
            "classes": [
                "annotationproperty"
            ]
        },
        {
            "data": {
                "id": "Datatype",
                "label": "DataTypes"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema",
                "label": "XMLS",
                "parent": "Datatype"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns",
                "label": "RDFS",
                "parent": "Datatype"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2002/07/owl",
                "label": "OWL",
                "parent": "Datatype"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "OWLProperty",
                "label": "OWLProperties",
                "parent": "http://www.plm-interop.org/family"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "OWLIndividual",
                "label": "OWLIndividuals",
                "parent": "http://www.plm-interop.org/family"
            },
            "classes": [
                "individual"
            ]
        },
        {
            "data": {
                "id": "OWLDatatypeProperty",
                "label": "OWLDatatypeProperty",
                "parent": "http://www.plm-interop.org/family"
            },
            "classes": [
                "datatypeproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Auncle",
                "label": "Auncle",
                "parent": "01JNE4SHV5S4N9S4GNV0RFYDS2"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L243C7342",
                "label": "_g_L243C7342",
                "parent": "01JNE4SHV5S4N9S4GNV0RFYDS2"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Aunt",
                "label": "Aunt",
                "parent": "OWLClass"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Daughter",
                "label": "Daughter",
                "parent": "01JNE4SHV5JAJS1N3JYWYGWR4S"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L257C7758",
                "label": "_g_L257C7758",
                "parent": "01JNE4SHV5JAJS1N3JYWYGWR4S"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Family",
                "label": "Family",
                "parent": "01JNE4SHV5Y98X99D2KKMX4XJP"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Father",
                "label": "Father",
                "parent": "01JNE4SHV5RJVRB2DX9T4FM88S"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L277C8552",
                "label": "_g_L277C8552",
                "parent": "01JNE4SHV5RJVRB2DX9T4FM88S"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Female",
                "label": "Female",
                "parent": "OWLClass"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Gender",
                "label": "Gender",
                "parent": "OWLClass"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#GrandFather",
                "label": "GrandFather",
                "parent": "01JNE4SHV627BCEF5YV2DE0C4F"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L303C9438",
                "label": "_g_L303C9438",
                "parent": "01JNE4SHV627BCEF5YV2DE0C4F"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#GrandMother",
                "label": "GrandMother",
                "parent": "01JNE4SHV6RAPZYEWZ5HTEYBZH"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L317C10135",
                "label": "_g_L317C10135",
                "parent": "01JNE4SHV6RAPZYEWZ5HTEYBZH"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Husband",
                "label": "Husband",
                "parent": "01JNE4SHV6H8M7W37QJVW4ZE4X"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L331C10824",
                "label": "_g_L331C10824",
                "parent": "01JNE4SHV6H8M7W37QJVW4ZE4X"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Lineage",
                "label": "Lineage",
                "parent": "01JNE4SHV5Y98X99D2KKMX4XJP"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Male",
                "label": "Male",
                "parent": "OWLClass"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Mother",
                "label": "Mother",
                "parent": "01JNE4SHV6KM9SAPHQ0R4S8XCK"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L354C11636",
                "label": "_g_L354C11636",
                "parent": "01JNE4SHV6KM9SAPHQ0R4S8XCK"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Parent",
                "label": "Parent",
                "parent": "01JNE4SHV6Y4EW452CYQGN67X3"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L367C12233",
                "label": "_g_L367C12233",
                "parent": "01JNE4SHV6Y4EW452CYQGN67X3"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Person",
                "label": "Person",
                "parent": "OWLClass"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Son",
                "label": "Son",
                "parent": "01JNE4SHV6YZBDMVA2D658DM07"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L387C12842",
                "label": "_g_L387C12842",
                "parent": "01JNE4SHV6YZBDMVA2D658DM07"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Spouse",
                "label": "Spouse",
                "parent": "01JNE4SHV63GG2GSBCWWAD9X1N"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L399C13383",
                "label": "_g_L399C13383",
                "parent": "01JNE4SHV63GG2GSBCWWAD9X1N"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Uncle",
                "label": "Uncle",
                "parent": "OWLClass"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Wife",
                "label": "Wife",
                "parent": "01JNE4SHV7EQ9Q40RN47BQSGGX"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L416C13853",
                "label": "_g_L416C13853",
                "parent": "01JNE4SHV7EQ9Q40RN47BQSGGX"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#grandParent",
                "label": "grandParent",
                "parent": "01JNE4SHV7SF5C96KWDRBNH3GC"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "_g_L429C14450",
                "label": "_g_L429C14450",
                "parent": "01JNE4SHV7SF5C96KWDRBNH3GC"
            },
            "classes": [
                "class"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasAuncle",
                "label": "hasAuncle",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasAunt",
                "label": "hasAunt",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasBrother",
                "label": "hasBrother",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasChild",
                "label": "hasChild",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasCousin",
                "label": "△hasCousin",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasDaughter",
                "label": "hasDaughter",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasFather",
                "label": "hasFather",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandChild",
                "label": "hasGrandChild",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandDaughter",
                "label": "hasGrandDaughter",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandFather",
                "label": "hasGrandFather",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandMother",
                "label": "hasGrandMother",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandParent",
                "label": "hasGrandParent",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandSon",
                "label": "hasGrandSon",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandparent",
                "label": "hasGrandparent",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasHusband",
                "label": "hasHusband",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasMother",
                "label": "hasMother",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasParent",
                "label": "hasParent",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSibling",
                "label": "△hasSibling",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSister",
                "label": "hasSister",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSon",
                "label": "hasSon",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSpouse",
                "label": "hasSpouse",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasUncle",
                "label": "hasUncle",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasWife",
                "label": "hasWife",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#isCousinOf",
                "label": "isCousinOf",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#isSiblingOf",
                "label": "isSiblingOf",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#knows",
                "label": "knows",
                "parent": "OWLProperty"
            },
            "classes": [
                "property"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#string",
                "label": "string",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#boolean",
                "label": "boolean",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#decimal",
                "label": "decimal",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#integer",
                "label": "integer",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#int",
                "label": "int",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#long",
                "label": "long",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#short",
                "label": "short",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#byte",
                "label": "byte",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#nonPositiveInteger",
                "label": "nonPositiveInteger",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
                "label": "nonNegativeInteger",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#positiveInteger",
                "label": "positiveInteger",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#unsignedLong",
                "label": "unsignedLong",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#unsignedInt",
                "label": "unsignedInt",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#unsignedShort",
                "label": "unsignedShort",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#unsignedByte",
                "label": "unsignedByte",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#float",
                "label": "float",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#double",
                "label": "double",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#dateTime",
                "label": "dateTime",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#date",
                "label": "date",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#time",
                "label": "time",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#duration",
                "label": "duration",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#QName",
                "label": "QName",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#anyURI",
                "label": "anyURI",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#base64Binary",
                "label": "base64Binary",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#hexBinary",
                "label": "hexBinary",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#normalizedString",
                "label": "normalizedString",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#token",
                "label": "token",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#language",
                "label": "language",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#NMTOKEN",
                "label": "NMTOKEN",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#ID",
                "label": "ID",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#IDREF",
                "label": "IDREF",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#ENTITY",
                "label": "ENTITY",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2001/XMLSchema#anySimpleType",
                "label": "anySimpleType",
                "parent": "http://www.w3.org/2001/XMLSchema"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral",
                "label": "XMLLiteral",
                "parent": "http://www.w3.org/1999/02/22-rdf-syntax-ns"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
                "label": "langString",
                "parent": "http://www.w3.org/1999/02/22-rdf-syntax-ns"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2002/07/owl#rational",
                "label": "rational",
                "parent": "http://www.w3.org/2002/07/owl"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2002/07/owl#real",
                "label": "real",
                "parent": "http://www.w3.org/2002/07/owl"
            },
            "classes": [
                "datatype"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Age",
                "label": "→Age",
                "parent": "OWLDatatypeProperty"
            },
            "classes": [
                "datatypeproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#FirstName",
                "label": "FirstName",
                "parent": "OWLDatatypeProperty"
            },
            "classes": [
                "datatypeproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Name",
                "label": "Name",
                "parent": "OWLDatatypeProperty"
            },
            "classes": [
                "datatypeproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#ProperName",
                "label": "ProperName",
                "parent": "OWLDatatypeProperty"
            },
            "classes": [
                "datatypeproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#aNumeroIdentiteNational",
                "label": "aNumeroIdentiteNational",
                "parent": "OWLDatatypeProperty"
            },
            "classes": [
                "datatypeproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Individual_B",
                "label": "Individual_B",
                "parent": "OWLIndividual"
            },
            "classes": [
                "individual"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#OWLNamedIndividual_d1a3927f_7e28_49b0_a09f_cf5eb4b289e7",
                "label": "OWLNamedIndividual_d1a3927f_7e28_49b0_a09f_cf5eb4b289e7",
                "parent": "OWLIndividual"
            },
            "classes": [
                "individual"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#individual_A",
                "label": "individual_A",
                "parent": "OWLIndividual"
            },
            "classes": [
                "individual"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#individual_C",
                "label": "individual_C",
                "parent": "OWLIndividual"
            },
            "classes": [
                "individual"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#individual_Z",
                "label": "individual_Z",
                "parent": "OWLIndividual"
            },
            "classes": [
                "individual"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV5S4N9S4GNV0RFYDS2",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV5JAJS1N3JYWYGWR4S",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV5Y98X99D2KKMX4XJP",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV5RJVRB2DX9T4FM88S",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV627BCEF5YV2DE0C4F",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV6RAPZYEWZ5HTEYBZH",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV6H8M7W37QJVW4ZE4X",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV6KM9SAPHQ0R4S8XCK",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV6Y4EW452CYQGN67X3",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV6YZBDMVA2D658DM07",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV63GG2GSBCWWAD9X1N",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV7EQ9Q40RN47BQSGGX",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV7SF5C96KWDRBNH3GC",
                "label": "≡",
                "parent": "OWLClass"
            },
            "classes": [
                "equivalence"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHVAD7MPRJ0YEBTW0YBA",
                "label": "PropertyChain 1",
                "parent": "http://www.plm-interop.org/family#hasAunt"
            },
            "classes": [
                "propertychain"
            ]
        },
        {
            "data": {
                "id": "blank-0-0",
                "label": "1",
                "parent": "01JNE4SHVAD7MPRJ0YEBTW0YBA"
            },
            "classes": [
                "chainmember"
            ]
        },
        {
            "data": {
                "id": "blank-1-0",
                "label": "2",
                "parent": "01JNE4SHVAD7MPRJ0YEBTW0YBA"
            },
            "classes": [
                "chainmember"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHVAX3276A9YTZKW7A1W",
                "label": "PropertyChain 2",
                "parent": "http://www.plm-interop.org/family#hasCousin"
            },
            "classes": [
                "propertychain"
            ]
        },
        {
            "data": {
                "id": "blank-0-1",
                "label": "1",
                "parent": "01JNE4SHVAX3276A9YTZKW7A1W"
            },
            "classes": [
                "chainmember"
            ]
        },
        {
            "data": {
                "id": "blank-1-1",
                "label": "2",
                "parent": "01JNE4SHVAX3276A9YTZKW7A1W"
            },
            "classes": [
                "chainmember"
            ]
        },
        {
            "data": {
                "id": "blank-2-1",
                "label": "3",
                "parent": "01JNE4SHVAX3276A9YTZKW7A1W"
            },
            "classes": [
                "chainmember"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHVA4CT57WQGXNC5SJZ0",
                "label": "PropertyChain 3",
                "parent": "http://www.plm-interop.org/family#hasGrandChild"
            },
            "classes": [
                "propertychain"
            ]
        },
        {
            "data": {
                "id": "blank-0-2",
                "label": "1",
                "parent": "01JNE4SHVA4CT57WQGXNC5SJZ0"
            },
            "classes": [
                "chainmember"
            ]
        },
        {
            "data": {
                "id": "blank-1-2",
                "label": "2",
                "parent": "01JNE4SHVA4CT57WQGXNC5SJZ0"
            },
            "classes": [
                "chainmember"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHVA0048CA8EHRDH08DZ",
                "label": "PropertyChain 4",
                "parent": "http://www.plm-interop.org/family#hasUncle"
            },
            "classes": [
                "propertychain"
            ]
        },
        {
            "data": {
                "id": "blank-0-3",
                "label": "1",
                "parent": "01JNE4SHVA0048CA8EHRDH08DZ"
            },
            "classes": [
                "chainmember"
            ]
        },
        {
            "data": {
                "id": "blank-1-3",
                "label": "2",
                "parent": "01JNE4SHVA0048CA8EHRDH08DZ"
            },
            "classes": [
                "chainmember"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "label",
                "parent": "defaultOWLAnnotationProperty"
            },
            "classes": [
                "annotationproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2000/01/rdf-schema#comment",
                "label": "comment",
                "parent": "defaultOWLAnnotationProperty"
            },
            "classes": [
                "annotationproperty"
            ]
        },
        {
            "data": {
                "id": "http://purl.org/dc/elements/1.1/creator",
                "label": "creator",
                "parent": "defaultOWLAnnotationProperty"
            },
            "classes": [
                "annotationproperty"
            ]
        },
        {
            "data": {
                "id": "http://purl.org/dc/elements/1.1/date",
                "label": "date",
                "parent": "defaultOWLAnnotationProperty"
            },
            "classes": [
                "annotationproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2002/07/owl#deprecated",
                "label": "deprecated",
                "parent": "defaultOWLAnnotationProperty"
            },
            "classes": [
                "annotationproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2002/07/owl#versionInfo",
                "label": "versionInfo",
                "parent": "defaultOWLAnnotationProperty"
            },
            "classes": [
                "annotationproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#UUID",
                "label": "UUID",
                "parent": "OWLAnnotationProperty"
            },
            "classes": [
                "annotationproperty"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2002/07/owl#Thing",
                "label": "Thing",
                "parent": "OWLIndividual"
            },
            "classes": [
                "individual"
            ]
        },
        {
            "data": {
                "id": "http://www.w3.org/2002/07/owl#Nothing",
                "label": "Nothing",
                "parent": "OWLIndividual"
            },
            "classes": [
                "individual"
            ]
        },
        {
            "data": {
                "id": "01JNE4SHV4EFMX6W4C1174DGTE",
                "source": "http://www.plm-interop.org/family#Individual_B",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "isa",
                "edgeType": "isa"
            }
        },
        {
            "data": {
                "id": "01JNE4SHV4RCRW30HAM6V67AXJ",
                "source": "http://www.plm-interop.org/family#individual_A",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "isa",
                "edgeType": "isa"
            }
        },
        {
            "data": {
                "id": "01JNE4SHV4ZRAE2G27EAB6P74G",
                "source": "http://www.plm-interop.org/family#individual_C",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "isa",
                "edgeType": "isa"
            }
        },
        {
            "data": {
                "id": "01JNE4SHV4GETSSWS33TGXH8QY",
                "source": "http://www.plm-interop.org/family#individual_Z",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "isa",
                "edgeType": "isa"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Auncle-equivalentclass-_g_L243C7342",
                "source": "http://www.plm-interop.org/family#Auncle",
                "target": "_g_L243C7342",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Aunt-subclassof->http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#Aunt",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Daughter-subclassof->http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#Daughter",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Daughter-equivalentclass-_g_L257C7758",
                "source": "http://www.plm-interop.org/family#Daughter",
                "target": "_g_L257C7758",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Family-equivalentclass-http://www.plm-interop.org/family#Lineage",
                "source": "http://www.plm-interop.org/family#Family",
                "target": "http://www.plm-interop.org/family#Lineage",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Father-subclassof->http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#Father",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Father-equivalentclass-_g_L277C8552",
                "source": "http://www.plm-interop.org/family#Father",
                "target": "_g_L277C8552",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Female-subclassof->http://www.plm-interop.org/family#Gender",
                "source": "http://www.plm-interop.org/family#Female",
                "target": "http://www.plm-interop.org/family#Gender",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#GrandFather-subclassof->http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#GrandFather",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#GrandFather-subclassof->http://www.plm-interop.org/family#grandParent",
                "source": "http://www.plm-interop.org/family#GrandFather",
                "target": "http://www.plm-interop.org/family#grandParent",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#GrandFather-equivalentclass-_g_L303C9438",
                "source": "http://www.plm-interop.org/family#GrandFather",
                "target": "_g_L303C9438",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#GrandMother-subclassof->http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#GrandMother",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#GrandMother-subclassof->http://www.plm-interop.org/family#grandParent",
                "source": "http://www.plm-interop.org/family#GrandMother",
                "target": "http://www.plm-interop.org/family#grandParent",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#GrandMother-equivalentclass-_g_L317C10135",
                "source": "http://www.plm-interop.org/family#GrandMother",
                "target": "_g_L317C10135",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Husband-subclassof->http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#Husband",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Husband-equivalentclass-_g_L331C10824",
                "source": "http://www.plm-interop.org/family#Husband",
                "target": "_g_L331C10824",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Male-subclassof->http://www.plm-interop.org/family#Gender",
                "source": "http://www.plm-interop.org/family#Male",
                "target": "http://www.plm-interop.org/family#Gender",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Mother-subclassof->http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#Mother",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Mother-equivalentclass-_g_L354C11636",
                "source": "http://www.plm-interop.org/family#Mother",
                "target": "_g_L354C11636",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Parent-equivalentclass-_g_L367C12233",
                "source": "http://www.plm-interop.org/family#Parent",
                "target": "_g_L367C12233",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Son-equivalentclass-_g_L387C12842",
                "source": "http://www.plm-interop.org/family#Son",
                "target": "_g_L387C12842",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Spouse-equivalentclass-_g_L399C13383",
                "source": "http://www.plm-interop.org/family#Spouse",
                "target": "_g_L399C13383",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Uncle-subclassof->http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#Uncle",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Wife-subclassof->http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#Wife",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "subClass"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Wife-equivalentclass-_g_L416C13853",
                "source": "http://www.plm-interop.org/family#Wife",
                "target": "_g_L416C13853",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#grandParent-equivalentclass-_g_L429C14450",
                "source": "http://www.plm-interop.org/family#grandParent",
                "target": "_g_L429C14450",
                "label": "≡",
                "edgeType": "equivalentProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasAunt-subpropertyof-http://www.plm-interop.org/family#hasAuncle",
                "source": "http://www.plm-interop.org/family#hasAunt",
                "target": "http://www.plm-interop.org/family#hasAuncle",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasBrother-subpropertyof-http://www.plm-interop.org/family#hasSibling",
                "source": "http://www.plm-interop.org/family#hasBrother",
                "target": "http://www.plm-interop.org/family#hasSibling",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasChild-inverseproperty-http://www.plm-interop.org/family#hasParent",
                "source": "http://www.plm-interop.org/family#hasChild",
                "target": "http://www.plm-interop.org/family#hasParent",
                "label": "",
                "edgeType": "inverseProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasDaughter-subpropertyof-http://www.plm-interop.org/family#hasChild",
                "source": "http://www.plm-interop.org/family#hasDaughter",
                "target": "http://www.plm-interop.org/family#hasChild",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasFather-subpropertyof-http://www.plm-interop.org/family#hasParent",
                "source": "http://www.plm-interop.org/family#hasFather",
                "target": "http://www.plm-interop.org/family#hasParent",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandChild-inverseproperty-http://www.plm-interop.org/family#hasGrandParent",
                "source": "http://www.plm-interop.org/family#hasGrandChild",
                "target": "http://www.plm-interop.org/family#hasGrandParent",
                "label": "",
                "edgeType": "inverseProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandDaughter-subpropertyof-http://www.plm-interop.org/family#hasGrandChild",
                "source": "http://www.plm-interop.org/family#hasGrandDaughter",
                "target": "http://www.plm-interop.org/family#hasGrandChild",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandFather-subpropertyof-http://www.plm-interop.org/family#hasGrandParent",
                "source": "http://www.plm-interop.org/family#hasGrandFather",
                "target": "http://www.plm-interop.org/family#hasGrandParent",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandMother-subpropertyof-http://www.plm-interop.org/family#hasGrandParent",
                "source": "http://www.plm-interop.org/family#hasGrandMother",
                "target": "http://www.plm-interop.org/family#hasGrandParent",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandSon-subpropertyof-http://www.plm-interop.org/family#hasGrandChild",
                "source": "http://www.plm-interop.org/family#hasGrandSon",
                "target": "http://www.plm-interop.org/family#hasGrandChild",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasHusband-subpropertyof-http://www.plm-interop.org/family#hasSpouse",
                "source": "http://www.plm-interop.org/family#hasHusband",
                "target": "http://www.plm-interop.org/family#hasSpouse",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasHusband-inverseproperty-http://www.plm-interop.org/family#hasWife",
                "source": "http://www.plm-interop.org/family#hasHusband",
                "target": "http://www.plm-interop.org/family#hasWife",
                "label": "",
                "edgeType": "inverseProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasMother-subpropertyof-http://www.plm-interop.org/family#hasParent",
                "source": "http://www.plm-interop.org/family#hasMother",
                "target": "http://www.plm-interop.org/family#hasParent",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSister-subpropertyof-http://www.plm-interop.org/family#hasSibling",
                "source": "http://www.plm-interop.org/family#hasSister",
                "target": "http://www.plm-interop.org/family#hasSibling",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSon-subpropertyof-http://www.plm-interop.org/family#hasChild",
                "source": "http://www.plm-interop.org/family#hasSon",
                "target": "http://www.plm-interop.org/family#hasChild",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasUncle-subpropertyof-http://www.plm-interop.org/family#hasAuncle",
                "source": "http://www.plm-interop.org/family#hasUncle",
                "target": "http://www.plm-interop.org/family#hasAuncle",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasWife-subpropertyof-http://www.plm-interop.org/family#hasSpouse",
                "source": "http://www.plm-interop.org/family#hasWife",
                "target": "http://www.plm-interop.org/family#hasSpouse",
                "label": "",
                "edgeType": "subProperty"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasAuncle-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasAuncle",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasChild-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasChild",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasCousin-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasCousin",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandChild-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasGrandChild",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandParent-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasGrandParent",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandparent-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasGrandparent",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasParent-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasParent",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSibling-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasSibling",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSpouse-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasSpouse",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#isCousinOf-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#isCousinOf",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#isSiblingOf-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#isSiblingOf",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#knows-domain-http://www.w3.org/2002/07/owl#Thing",
                "source": "http://www.plm-interop.org/family#knows",
                "target": "http://www.w3.org/2002/07/owl#Thing",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Age-domain-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#Age",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "domain"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasAunt-range-http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#hasAunt",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasBrother-range-http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#hasBrother",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasBrother-range-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasBrother",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasCousin-range-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasCousin",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasDaughter-range-http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#hasDaughter",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasFather-range-http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#hasFather",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandDaughter-range-http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#hasGrandDaughter",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandFather-range-http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#hasGrandFather",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandMother-range-http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#hasGrandMother",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasGrandSon-range-http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#hasGrandSon",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasHusband-range-http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#hasHusband",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasHusband-range-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasHusband",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasMother-range-http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#hasMother",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSibling-range-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasSibling",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSister-range-http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#hasSister",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSister-range-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasSister",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasSon-range-http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#hasSon",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasUncle-range-http://www.plm-interop.org/family#Male",
                "source": "http://www.plm-interop.org/family#hasUncle",
                "target": "http://www.plm-interop.org/family#Male",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasWife-range-http://www.plm-interop.org/family#Female",
                "source": "http://www.plm-interop.org/family#hasWife",
                "target": "http://www.plm-interop.org/family#Female",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#hasWife-range-http://www.plm-interop.org/family#Person",
                "source": "http://www.plm-interop.org/family#hasWife",
                "target": "http://www.plm-interop.org/family#Person",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Age-range-http://www.w3.org/2001/XMLSchema#integer",
                "source": "http://www.plm-interop.org/family#Age",
                "target": "http://www.w3.org/2001/XMLSchema#integer",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Name-range-http://www.w3.org/2001/XMLSchema#string",
                "source": "http://www.plm-interop.org/family#Name",
                "target": "http://www.w3.org/2001/XMLSchema#string",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#aNumeroIdentiteNational-range-http://www.w3.org/2001/XMLSchema#string",
                "source": "http://www.plm-interop.org/family#aNumeroIdentiteNational",
                "target": "http://www.w3.org/2001/XMLSchema#string",
                "label": "",
                "edgeType": "range"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVAN3Q3MRAY36ZEFG6P",
                "source": "01JNE4SHVAD7MPRJ0YEBTW0YBA",
                "target": "http://www.plm-interop.org/family#hasParent",
                "label": "1",
                "edgeType": "nextchaintype"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVA23JPKM3JJ51GRDRY",
                "source": "blank-0-0",
                "target": "blank-1-0",
                "label": "",
                "edgeType": "nextchainmember"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVATAEX25DGPEZM72GT",
                "source": "01JNE4SHVAD7MPRJ0YEBTW0YBA",
                "target": "http://www.plm-interop.org/family#hasSister",
                "label": "2",
                "edgeType": "nextchaintype"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVAZAHV50E9FZS1QDZC",
                "source": "01JNE4SHVAX3276A9YTZKW7A1W",
                "target": "http://www.plm-interop.org/family#hasParent",
                "label": "1",
                "edgeType": "nextchaintype"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVA9MRJ3YAEG3FVXF5A",
                "source": "blank-0-1",
                "target": "blank-1-1",
                "label": "",
                "edgeType": "nextchainmember"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVA93G9JN3VMPXCN0RX",
                "source": "01JNE4SHVAX3276A9YTZKW7A1W",
                "target": "http://www.plm-interop.org/family#hasSibling",
                "label": "2",
                "edgeType": "nextchaintype"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVAXTKS9G4VBVHS776B",
                "source": "blank-1-1",
                "target": "blank-2-1",
                "label": "",
                "edgeType": "nextchainmember"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVANC5BG1BYXY02JD5A",
                "source": "01JNE4SHVAX3276A9YTZKW7A1W",
                "target": "http://www.plm-interop.org/family#hasChild",
                "label": "3",
                "edgeType": "nextchaintype"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVAFCKGR6C3ZXSR6S4Y",
                "source": "01JNE4SHVA4CT57WQGXNC5SJZ0",
                "target": "http://www.plm-interop.org/family#hasChild",
                "label": "1",
                "edgeType": "nextchaintype"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVAGVWRN8PX2HGNA4T3",
                "source": "blank-0-2",
                "target": "blank-1-2",
                "label": "",
                "edgeType": "nextchainmember"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVA1BPEJMKK12F069HK",
                "source": "01JNE4SHVA4CT57WQGXNC5SJZ0",
                "target": "http://www.plm-interop.org/family#hasChild",
                "label": "2",
                "edgeType": "nextchaintype"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVA90AWE4N6PHEZFKV8",
                "source": "01JNE4SHVA0048CA8EHRDH08DZ",
                "target": "http://www.plm-interop.org/family#hasParent",
                "label": "1",
                "edgeType": "nextchaintype"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVATS3K101AFAMGCJDX",
                "source": "blank-0-3",
                "target": "blank-1-3",
                "label": "",
                "edgeType": "nextchainmember"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVBATVRRYJWZ8DTKV0P",
                "source": "01JNE4SHVA0048CA8EHRDH08DZ",
                "target": "http://www.plm-interop.org/family#hasBrother",
                "label": "2",
                "edgeType": "nextchaintype"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVMGQM6V7PWQJTD1TBY",
                "source": "http://www.plm-interop.org/family#hasBrother",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "hasBrother",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVMJW1P0C202M3K3P0R",
                "source": "http://www.plm-interop.org/family#hasCousin",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "hasCousin",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVM1SNEN5HXWF70JRHP",
                "source": "http://www.plm-interop.org/family#hasCousin",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "isCousinOf",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVMS15D11J4K0DEMZ13",
                "source": "http://www.plm-interop.org/family#hasHusband",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "hasHusband",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVMJQ12X5WG5G94MD5C",
                "source": "http://www.plm-interop.org/family#hasSibling",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "hasSibling",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVM5EY4RX2XXTR5FZGP",
                "source": "http://www.plm-interop.org/family#hasSibling",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "isSiblingOf",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVM22DHKT3CN72YFF1W",
                "source": "http://www.plm-interop.org/family#hasSister",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "hasSister",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVMW1XWTKNYHAYVY6WB",
                "source": "http://www.plm-interop.org/family#hasWife",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "hasWife",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVM1Q0T3NT1JFX8RRMX",
                "source": "http://www.plm-interop.org/family#Age",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "http://www.plm-interop.org/family#Age",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVM8SEYKK2M16KWJHHY",
                "source": "http://www.plm-interop.org/family#Age",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "http://www.plm-interop.org/family#Person",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVNTQRTB5JVGRN9KW43",
                "source": "http://www.plm-interop.org/family#Age",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Age",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVNHFQ5AWTMY11FG81W",
                "source": "http://www.plm-interop.org/family#Family",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Family",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVN02JYE9GNXKGXGC27",
                "source": "http://www.plm-interop.org/family#Female",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Female",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVN0M5YN9Y5KS05KDG4",
                "source": "http://www.plm-interop.org/family#Female",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Gender",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVNZ5KWX42XR3HPB1EN",
                "source": "http://www.plm-interop.org/family#Gender",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Gender",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVNSWSH8KZ6Z3NK88DE",
                "source": "http://www.plm-interop.org/family#Male",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Male",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVNNJR9HKY7Q54S1BGM",
                "source": "http://www.plm-interop.org/family#Person",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Person",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVN9TR3G1SQ4GX7WM26",
                "source": "http://www.plm-interop.org/family#Uncle",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Oncle",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVNV92HGRT8Z7D398AS",
                "source": "http://www.plm-interop.org/family#Uncle",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Tonton",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVN0480J74B1CTE30B4",
                "source": "http://www.plm-interop.org/family#OWLNamedIndividual_d1a3927f_7e28_49b0_a09f_cf5eb4b289e7",
                "target": "http://www.w3.org/2000/01/rdf-schema#label",
                "label": "Nicolas",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "01JNE4SHVN60J2J4RKS09NWNW2",
                "source": "http://www.plm-interop.org/family#Person",
                "target": "http://www.plm-interop.org/family#UUID",
                "label": "myUUID",
                "edgeType": "annotation"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#Individual_B-http://www.plm-interop.org/family#hasParent->http://www.plm-interop.org/family#individual_A",
                "source": "http://www.plm-interop.org/family#Individual_B",
                "target": "http://www.plm-interop.org/family#individual_A",
                "label": "http://www.plm-interop.org/family#hasParent",
                "edgeType": "relation"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#individual_C-http://www.plm-interop.org/family#hasParent->http://www.plm-interop.org/family#Individual_B",
                "source": "http://www.plm-interop.org/family#individual_C",
                "target": "http://www.plm-interop.org/family#Individual_B",
                "label": "http://www.plm-interop.org/family#hasParent",
                "edgeType": "relation"
            }
        },
        {
            "data": {
                "id": "http://www.plm-interop.org/family#individual_A-http://www.plm-interop.org/family#knows->http://www.plm-interop.org/family#individual_A",
                "source": "http://www.plm-interop.org/family#individual_A",
                "target": "http://www.plm-interop.org/family#individual_A",
                "label": "http://www.plm-interop.org/family#knows",
                "edgeType": "relation"
            }
        }

    ],
    "Graph_2": [
        { data: { id: "P", label: "Parent" }, classes: "ontology" },
        { data: { id: "X", label: "Node X", }, classes: "class" },
        { data: { id: "Y", label: "Node Y", "parent": "P" }, classes: "class" },
        { data: { id: "Z", label: "Node Z", "parent": "P" }, classes: "class" },
        { data: { id: "edgeXY", source: "X", target: "Y", label: "X → Y", type: "relation" } },
        { data: { id: "edgeYZ", source: "Y", target: "Z", label: "Y → Z", type: "relation" } }
    ],
    "Graph_4":[
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/",
          "label": "http://www.plminterop.org/archimate/"
        },
        "classes": [
          "ontology"
        ]
      },
      {
        "data": {
          "id": "defaultOWLAnnotationProperty",
          "label": "defaultOWLAnnotationProperties"
        },
        "classes": [
          "annotationproperty"
        ]
      },
      {
        "data": {
          "id": "Datatype",
          "label": "DataTypes"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "OWLClass",
          "label": "OWLClasses",
          "parent": "http://www.plminterop.org/archimate/"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "OWLAnnotationProperty",
          "label": "OWLAnnotationProperties",
          "parent": "http://www.plminterop.org/archimate/"
        },
        "classes": [
          "annotationproperty"
        ]
      },
      {
        "data": {
          "id": "OWLProperty",
          "label": "OWLProperties",
          "parent": "http://www.plminterop.org/archimate/"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "OWLIndividual",
          "label": "OWLIndividuals",
          "parent": "http://www.plminterop.org/archimate/"
        },
        "classes": [
          "individual"
        ]
      },
      {
        "data": {
          "id": "OWLDatatypeProperty",
          "label": "OWLDatatypeProperty",
          "parent": "http://www.plminterop.org/archimate/"
        },
        "classes": [
          "datatypeproperty"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Coherence",
          "label": "Coherence",
          "parent": "OWLIndividual"
        },
        "classes": [
          "individual"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Deciding",
          "label": "Deciding",
          "parent": "OWLIndividual"
        },
        "classes": [
          "individual"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Designing",
          "label": "Designing",
          "parent": "OWLIndividual"
        },
        "classes": [
          "individual"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Details",
          "label": "Details",
          "parent": "OWLIndividual"
        },
        "classes": [
          "individual"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Informing",
          "label": "Informing",
          "parent": "OWLIndividual"
        },
        "classes": [
          "individual"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Overview",
          "label": "Overview",
          "parent": "OWLIndividual"
        },
        "classes": [
          "individual"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2002/07/owl#Thing",
          "label": "Thing",
          "parent": "OWLIndividual"
        },
        "classes": [
          "individual"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2002/07/owl#Nothing",
          "label": "Nothing",
          "parent": "OWLIndividual"
        },
        "classes": [
          "individual"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2000/01/rdf-schema#label",
          "label": "label",
          "parent": "defaultOWLAnnotationProperty"
        },
        "classes": [
          "annotationproperty"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2000/01/rdf-schema#comment",
          "label": "comment",
          "parent": "defaultOWLAnnotationProperty"
        },
        "classes": [
          "annotationproperty"
        ]
      },
      {
        "data": {
          "id": "http://purl.org/dc/elements/1.1/creator",
          "label": "creator",
          "parent": "defaultOWLAnnotationProperty"
        },
        "classes": [
          "annotationproperty"
        ]
      },
      {
        "data": {
          "id": "http://purl.org/dc/elements/1.1/date",
          "label": "date",
          "parent": "defaultOWLAnnotationProperty"
        },
        "classes": [
          "annotationproperty"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2002/07/owl#deprecated",
          "label": "deprecated",
          "parent": "defaultOWLAnnotationProperty"
        },
        "classes": [
          "annotationproperty"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2002/07/owl#versionInfo",
          "label": "versionInfo",
          "parent": "defaultOWLAnnotationProperty"
        },
        "classes": [
          "annotationproperty"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema",
          "label": "XMLS",
          "parent": "Datatype"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns",
          "label": "RDFS",
          "parent": "Datatype"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2002/07/owl",
          "label": "OWL",
          "parent": "Datatype"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#string",
          "label": "string",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#boolean",
          "label": "boolean",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#decimal",
          "label": "decimal",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#integer",
          "label": "integer",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#int",
          "label": "int",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#long",
          "label": "long",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#short",
          "label": "short",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#byte",
          "label": "byte",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#nonPositiveInteger",
          "label": "nonPositiveInteger",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
          "label": "nonNegativeInteger",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#positiveInteger",
          "label": "positiveInteger",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#unsignedLong",
          "label": "unsignedLong",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#unsignedInt",
          "label": "unsignedInt",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#unsignedShort",
          "label": "unsignedShort",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#unsignedByte",
          "label": "unsignedByte",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#float",
          "label": "float",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#double",
          "label": "double",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#dateTime",
          "label": "dateTime",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#date",
          "label": "date",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#time",
          "label": "time",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#duration",
          "label": "duration",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#QName",
          "label": "QName",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#anyURI",
          "label": "anyURI",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#base64Binary",
          "label": "base64Binary",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#hexBinary",
          "label": "hexBinary",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#normalizedString",
          "label": "normalizedString",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#token",
          "label": "token",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#language",
          "label": "language",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#NMTOKEN",
          "label": "NMTOKEN",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#ID",
          "label": "ID",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#IDREF",
          "label": "IDREF",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#ENTITY",
          "label": "ENTITY",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2001/XMLSchema#anySimpleType",
          "label": "anySimpleType",
          "parent": "http://www.w3.org/2001/XMLSchema"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral",
          "label": "XMLLiteral",
          "parent": "http://www.w3.org/1999/02/22-rdf-syntax-ns"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
          "label": "langString",
          "parent": "http://www.w3.org/1999/02/22-rdf-syntax-ns"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2002/07/owl#rational",
          "label": "rational",
          "parent": "http://www.w3.org/2002/07/owl"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "http://www.w3.org/2002/07/owl#real",
          "label": "real",
          "parent": "http://www.w3.org/2002/07/owl"
        },
        "classes": [
          "datatype"
        ]
      },
      {
        "data": {
          "id": "n0",
          "label": "n0",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Access",
          "label": "Access",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "n21",
          "label": "n21",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "n23",
          "label": "n23",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "n27",
          "label": "n27",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "n30",
          "label": "n30",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Accessor_Type1",
          "label": "Accessor_Type1",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Accessor_Type2",
          "label": "Accessor_Type2",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Accessor_Type3",
          "label": "Accessor_Type3",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ActiveStructureElement",
          "label": "ActiveStructureElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregation",
          "label": "Aggregation",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/AndJunction",
          "label": "AndJunction",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ApplicationElement",
          "label": "ApplicationElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Application_Collaboration",
          "label": "Application_Collaboration",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Application_Component",
          "label": "Application_Component",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Application_Event",
          "label": "Application_Event",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Application_Function",
          "label": "Application_Function",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Application_Interaction",
          "label": "Application_Interaction",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Application_Interface",
          "label": "Application_Interface",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Application_Process",
          "label": "Application_Process",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Application_Service",
          "label": "Application_Service",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ArchiMateModelingEntity",
          "label": "ArchiMateModelingEntity",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ArchiMateModelingRelation",
          "label": "ArchiMateModelingRelation",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ArchiMateRule",
          "label": "ArchiMateRule",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ArchiMateViewpoint",
          "label": "ArchiMateViewpoint",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Architecture",
          "label": "Architecture",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ArchitectureDescription",
          "label": "ArchitectureDescription",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ArchitectureModel",
          "label": "ArchitectureModel",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ArchitectureRational",
          "label": "ArchitectureRational",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ArchitectureView",
          "label": "ArchitectureView",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ArchitectureViewpoint",
          "label": "ArchitectureViewpoint",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Artifact",
          "label": "Artifact",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aspect",
          "label": "Aspect",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Assessment",
          "label": "Assessment",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Assignment",
          "label": "Assignment",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Association",
          "label": "Association",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/BehaviourElement",
          "label": "BehaviourElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/BusinessElement",
          "label": "BusinessElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Actor",
          "label": "Business_Actor",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Collaboration",
          "label": "Business_Collaboration",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Event",
          "label": "Business_Event",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Function",
          "label": "Business_Function",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Interaction",
          "label": "Business_Interaction",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Interface",
          "label": "Business_Interface",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Object",
          "label": "Business_Object",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Process",
          "label": "Business_Process",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Role",
          "label": "Business_Role",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Business_Service",
          "label": "Business_Service",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Capability",
          "label": "Capability",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Collaboration",
          "label": "Collaboration",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Communication_Network",
          "label": "Communication_Network",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/CompositeElement",
          "label": "CompositeElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Composition",
          "label": "Composition",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Concern",
          "label": "Concern",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Constraint",
          "label": "Constraint",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Contract",
          "label": "Contract",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Correspondance",
          "label": "Correspondance",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/CorrespondanceRule",
          "label": "CorrespondanceRule",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Course_of_Action",
          "label": "Course_of_Action",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Cross_aspect_dependencies",
          "label": "Cross_aspect_dependencies",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/CustomizationElement",
          "label": "CustomizationElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Data_Object",
          "label": "Data_Object",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Deliverable",
          "label": "Deliverable",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/DependencyRelationShip",
          "label": "DependencyRelationShip",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Derivation_Rule",
          "label": "Derivation_Rule",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Derivation_Rule_for_Structural_and_Dependency_Relationships",
          "label": "Derivation_Rule_for_Structural_and_Dependency_Relationships",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Derivation_Rules_for_Dynamic_Relationships",
          "label": "Derivation_Rules_for_Dynamic_Relationships",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Device",
          "label": "Device",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Distribution_Network",
          "label": "Distribution_Network",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Driver",
          "label": "Driver",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/DynamicRelationship",
          "label": "DynamicRelationship",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ElementSpecialization",
          "label": "ElementSpecialization",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Equipment",
          "label": "Equipment",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Event",
          "label": "Event",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ExternalActiveStructureElement",
          "label": "ExternalActiveStructureElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ExternalBehaviorElement",
          "label": "ExternalBehaviorElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Facility",
          "label": "Facility",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Flow",
          "label": "Flow",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Function",
          "label": "Function",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Gap",
          "label": "Gap",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Goal",
          "label": "Goal",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Grouping",
          "label": "Grouping",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ImplementationMigrationElement",
          "label": "ImplementationMigrationElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Implementation_Event",
          "label": "Implementation_Event",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Influence",
          "label": "Influence",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Influencer_Type1",
          "label": "Influencer_Type1",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Influencer_Type2",
          "label": "Influencer_Type2",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Interaction",
          "label": "Interaction",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/InternalActiveStructureElement",
          "label": "InternalActiveStructureElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/InternalBehaviorElement",
          "label": "InternalBehaviorElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Junction",
          "label": "Junction",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Location",
          "label": "Location",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Material",
          "label": "Material",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Meaning",
          "label": "Meaning",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ModelKind",
          "label": "ModelKind",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/MotivationElement",
          "label": "MotivationElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Node",
          "label": "Node",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/OrJunction",
          "label": "OrJunction",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/OtherElements",
          "label": "OtherElements",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/OtherRelationship",
          "label": "OtherRelationship",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Outcome",
          "label": "Outcome",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/PassiveStructureElement",
          "label": "PassiveStructureElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Path",
          "label": "Path",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/PhysicalElement",
          "label": "PhysicalElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Plateau",
          "label": "Plateau",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/PreDefinedProfile",
          "label": "PreDefinedProfile",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Principle",
          "label": "Principle",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Process",
          "label": "Process",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Product",
          "label": "Product",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Profile",
          "label": "Profile",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Purpose",
          "label": "Purpose",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Realization",
          "label": "Realization",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Realization_Type1",
          "label": "Realization_Type1",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Realization_Type2",
          "label": "Realization_Type2",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/RelationshipConnector",
          "label": "RelationshipConnector",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Representation",
          "label": "Representation",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Requirement",
          "label": "Requirement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Resource",
          "label": "Resource",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Serving",
          "label": "Serving",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Serving_Type1",
          "label": "Serving_Type1",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Source_Type1",
          "label": "Source_Type1",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Source_Type2",
          "label": "Source_Type2",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Source_Type3",
          "label": "Source_Type3",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization",
          "label": "Specialization",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Stakeholder",
          "label": "Stakeholder",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Strategy",
          "label": "Strategy",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/StrategyElement",
          "label": "StrategyElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/StructuralRelationship",
          "label": "StructuralRelationship",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/StructureElement",
          "label": "StructureElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SystemOfInterest",
          "label": "SystemOfInterest",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/System_Software",
          "label": "System_Software",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Tactic",
          "label": "Tactic",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TechnologyPhysicalElement",
          "label": "TechnologyPhysicalElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Technology_Collaboration",
          "label": "Technology_Collaboration",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Technology_Event",
          "label": "Technology_Event",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Technology_Function",
          "label": "Technology_Function",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Technology_Interaction",
          "label": "Technology_Interaction",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Technology_Interface",
          "label": "Technology_Interface",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Technology_Object",
          "label": "Technology_Object",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Technology_Process",
          "label": "Technology_Process",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Technology_Service",
          "label": "Technology_Service",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Triggering",
          "label": "Triggering",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Triggering_Type1",
          "label": "Triggering_Type1",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Triggering_Type2",
          "label": "Triggering_Type2",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Triggering_Type3",
          "label": "Triggering_Type3",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Triggering_Type4",
          "label": "Triggering_Type4",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/UserDefinedProfile",
          "label": "UserDefinedProfile",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Value",
          "label": "Value",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/ViewpointElement",
          "label": "ViewpointElement",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Work_Package",
          "label": "Work_Package",
          "parent": "OWLClass"
        },
        "classes": [
          "class"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Access_relation_from_accessor_type1",
          "label": "Access_relation_from_accessor_type1",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Access_relation_from_accessor_type2",
          "label": "Access_relation_from_accessor_type2",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Access_relation_from_accessor_type3",
          "label": "Access_relation_from_accessor_type3",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Access_relation_from_capability",
          "label": "Access_relation_from_capability",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Access_relation_from_course_of_action",
          "label": "Access_relation_from_course_of_action",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Access_relation_from_resource",
          "label": "Access_relation_from_resource",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_applicationComponent",
          "label": "Aggregated_by_applicationComponent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_applicationEvent",
          "label": "Aggregated_by_applicationEvent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_applicationFunctionOrProcessOrInteraction",
          "label": "Aggregated_by_applicationFunctionOrProcessOrInteraction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_applicationInterface",
          "label": "Aggregated_by_applicationInterface",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_applicationService",
          "label": "Aggregated_by_applicationService",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_artifact",
          "label": "Aggregated_by_artifact",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_assessment",
          "label": "Aggregated_by_assessment",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_businessActor",
          "label": "Aggregated_by_businessActor",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_businessCollaboration",
          "label": "Aggregated_by_businessCollaboration",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_businessEvent",
          "label": "Aggregated_by_businessEvent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_businessInterface",
          "label": "Aggregated_by_businessInterface",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_businessObjectorContract",
          "label": "Aggregated_by_businessObjectorContract",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_businessProcessOrFunctionOrInteraction",
          "label": "Aggregated_by_businessProcessOrFunctionOrInteraction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_businessRole",
          "label": "Aggregated_by_businessRole",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_businessService",
          "label": "Aggregated_by_businessService",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_capability",
          "label": "Aggregated_by_capability",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_communicationNetwork",
          "label": "Aggregated_by_communicationNetwork",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_courseOfAction",
          "label": "Aggregated_by_courseOfAction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_dataObject",
          "label": "Aggregated_by_dataObject",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_deliverable",
          "label": "Aggregated_by_deliverable",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_distributionNetwork",
          "label": "Aggregated_by_distributionNetwork",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_driver",
          "label": "Aggregated_by_driver",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_goal",
          "label": "Aggregated_by_goal",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_grouping",
          "label": "Aggregated_by_grouping",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_implementationEvent",
          "label": "Aggregated_by_implementationEvent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_location",
          "label": "Aggregated_by_location",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_material",
          "label": "Aggregated_by_material",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_meaning",
          "label": "Aggregated_by_meaning",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_nodeOrDeviceOrSystemSoftwareOrTechnologyCollaborationOrEquipmentOrFacility",
          "label": "Aggregated_by_nodeOrDeviceOrSystemSoftwareOrTechnologyCollaborationOrEquipmentOrFacility",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_outcome",
          "label": "Aggregated_by_outcome",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_path",
          "label": "Aggregated_by_path",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_plateau",
          "label": "Aggregated_by_plateau",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_principle",
          "label": "Aggregated_by_principle",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_product",
          "label": "Aggregated_by_product",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_representation",
          "label": "Aggregated_by_representation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_requirementOrConstraint",
          "label": "Aggregated_by_requirementOrConstraint",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_resource",
          "label": "Aggregated_by_resource",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_stakeholder",
          "label": "Aggregated_by_stakeholder",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_technologyEvent",
          "label": "Aggregated_by_technologyEvent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_technologyFunctionOrProcessOrInteraction",
          "label": "Aggregated_by_technologyFunctionOrProcessOrInteraction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_technologyInterface",
          "label": "Aggregated_by_technologyInterface",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_technologyService",
          "label": "Aggregated_by_technologyService",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_value",
          "label": "Aggregated_by_value",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Aggregated_by_workPackage",
          "label": "Aggregated_by_workPackage",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/AssignementFrom",
          "label": "AssignementFrom",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/AssignmentTo",
          "label": "AssignmentTo",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Assignment_relation_from_resource",
          "label": "Assignment_relation_from_resource",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Flow_relation_from_source_type1",
          "label": "Flow_relation_from_source_type1",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Flow_relation_from_source_type2",
          "label": "Flow_relation_from_source_type2",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Flow_relation_from_source_type3",
          "label": "Flow_relation_from_source_type3",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Influence_relation_from_Stakeholder",
          "label": "Influence_relation_from_Stakeholder",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Influence_relation_from_influencer_type1",
          "label": "Influence_relation_from_influencer_type1",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Influence_relation_from_influencer_type2",
          "label": "Influence_relation_from_influencer_type2",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_Influence",
          "label": "Inverse_of_Influence",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_Realization",
          "label": "Inverse_of_Realization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_aggregation",
          "label": "Inverse_of_aggregation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_association",
          "label": "Inverse_of_association",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_composition",
          "label": "Inverse_of_composition",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_flow",
          "label": "Inverse_of_flow",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_serving",
          "label": "Inverse_of_serving",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_specialization",
          "label": "Inverse_of_specialization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_triggering",
          "label": "△△Inverse_of_triggering",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Inverse_of_used_by",
          "label": "Inverse_of_used_by",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Realization_relation_from_applicationInterface",
          "label": "Realization_relation_from_applicationInterface",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Realization_relation_from_product",
          "label": "Realization_relation_from_product",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Realization_relation_from_realization_type1",
          "label": "Realization_relation_from_realization_type1",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Realization_relation_from_realization_type2",
          "label": "Realization_relation_from_realization_type2",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Serving_relation_from_courseOfAction",
          "label": "Serving_relation_from_courseOfAction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Serving_relation_from_serving_type1",
          "label": "Serving_relation_from_serving_type1",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Serving_relation_from_serving_type2",
          "label": "Serving_relation_from_serving_type2",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Serving_relation_from_serving_type3",
          "label": "Serving_relation_from_serving_type3",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationship",
          "label": "SourceRelationship",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForAccess",
          "label": "SourceRelationshipForAccess",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForAggregation",
          "label": "SourceRelationshipForAggregation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForAssignment",
          "label": "SourceRelationshipForAssignment",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForAssociation",
          "label": "SourceRelationshipForAssociation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForComposition",
          "label": "SourceRelationshipForComposition",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForFlow",
          "label": "SourceRelationshipForFlow",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForInfluence",
          "label": "SourceRelationshipForInfluence",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForRealization",
          "label": "SourceRelationshipForRealization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForServing",
          "label": "SourceRelationshipForServing",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForSpecialization",
          "label": "SourceRelationshipForSpecialization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceRelationshipForTriggering",
          "label": "SourceRelationshipForTriggering",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/SourceTargetRelationship",
          "label": "SourceTargetRelationship",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_applicationCollaboration",
          "label": "Specialization_relation_from_applicationCollaboration",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_applicationComponent",
          "label": "Specialization_relation_from_applicationComponent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_applicationEvent",
          "label": "Specialization_relation_from_applicationEvent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_applicationFunction",
          "label": "Specialization_relation_from_applicationFunction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_applicationInteraction",
          "label": "Specialization_relation_from_applicationInteraction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_applicationInterface",
          "label": "Specialization_relation_from_applicationInterface",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_applicationProcess",
          "label": "Specialization_relation_from_applicationProcess",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_applicationService",
          "label": "Specialization_relation_from_applicationService",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_artifact",
          "label": "Specialization_relation_from_artifact",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_assessment",
          "label": "Specialization_relation_from_assessment",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessActor",
          "label": "Specialization_relation_from_businessActor",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessCollaboration",
          "label": "Specialization_relation_from_businessCollaboration",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessEvent",
          "label": "Specialization_relation_from_businessEvent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessFunction",
          "label": "Specialization_relation_from_businessFunction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessInteraction",
          "label": "Specialization_relation_from_businessInteraction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessInterface",
          "label": "Specialization_relation_from_businessInterface",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessObjectOrContract",
          "label": "Specialization_relation_from_businessObjectOrContract",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessProcess",
          "label": "Specialization_relation_from_businessProcess",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessRole",
          "label": "Specialization_relation_from_businessRole",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_businessService",
          "label": "Specialization_relation_from_businessService",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_capability",
          "label": "Specialization_relation_from_capability",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_communicationNetwork",
          "label": "Specialization_relation_from_communicationNetwork",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_courseOfAction",
          "label": "Specialization_relation_from_courseOfAction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_dataObject",
          "label": "Specialization_relation_from_dataObject",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_deliverable",
          "label": "Specialization_relation_from_deliverable",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_device",
          "label": "Specialization_relation_from_device",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_distributionNetwork",
          "label": "Specialization_relation_from_distributionNetwork",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_driver",
          "label": "Specialization_relation_from_driver",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_equipment",
          "label": "Specialization_relation_from_equipment",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_facility",
          "label": "Specialization_relation_from_facility",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_gap",
          "label": "Specialization_relation_from_gap",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_goal",
          "label": "Specialization_relation_from_goal",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_grouping",
          "label": "Specialization_relation_from_grouping",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_implementationEvent",
          "label": "Specialization_relation_from_implementationEvent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_location",
          "label": "Specialization_relation_from_location",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_material",
          "label": "Specialization_relation_from_material",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_meaning",
          "label": "Specialization_relation_from_meaning",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_node",
          "label": "Specialization_relation_from_node",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_outcome",
          "label": "Specialization_relation_from_outcome",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_path",
          "label": "Specialization_relation_from_path",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_plateau",
          "label": "Specialization_relation_from_plateau",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_principle",
          "label": "Specialization_relation_from_principle",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_product",
          "label": "Specialization_relation_from_product",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_representation",
          "label": "Specialization_relation_from_representation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_requirementOrConstraint",
          "label": "Specialization_relation_from_requirementOrConstraint",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_resource",
          "label": "Specialization_relation_from_resource",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_stakeholder",
          "label": "Specialization_relation_from_stakeholder",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_technologyCollaboration",
          "label": "Specialization_relation_from_technologyCollaboration",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_technologyEvent",
          "label": "Specialization_relation_from_technologyEvent",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_technologyFunction",
          "label": "Specialization_relation_from_technologyFunction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_technologyInteraction",
          "label": "Specialization_relation_from_technologyInteraction",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_technologyInterface",
          "label": "Specialization_relation_from_technologyInterface",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_technologyProcess",
          "label": "Specialization_relation_from_technologyProcess",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_technologyService",
          "label": "Specialization_relation_from_technologyService",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_value",
          "label": "Specialization_relation_from_value",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Specialization_relation_from_workPackage",
          "label": "Specialization_relation_from_workPackage",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationship",
          "label": "TargetRelationship",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForAccess",
          "label": "TargetRelationshipForAccess",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForAggregation",
          "label": "TargetRelationshipForAggregation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForAssignment",
          "label": "TargetRelationshipForAssignment",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForAssociation",
          "label": "TargetRelationshipForAssociation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForComposition",
          "label": "TargetRelationshipForComposition",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForFlow",
          "label": "TargetRelationshipForFlow",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForInfluence",
          "label": "TargetRelationshipForInfluence",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForRealization",
          "label": "TargetRelationshipForRealization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForServing",
          "label": "TargetRelationshipForServing",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForSpecialization",
          "label": "TargetRelationshipForSpecialization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/TargetRelationshipForTriggering",
          "label": "TargetRelationshipForTriggering",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Triggering_relation_from_triggering_type1",
          "label": "Triggering_relation_from_triggering_type1",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Triggering_relation_from_triggering_type2",
          "label": "Triggering_relation_from_triggering_type2",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Triggering_relation_from_triggering_type3",
          "label": "Triggering_relation_from_triggering_type3",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Triggering_relation_from_triggering_type4",
          "label": "Triggering_relation_from_triggering_type4",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/Used_by",
          "label": "Used_by",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/access_",
          "label": "access_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/aggregation_",
          "label": "aggregation_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/association_",
          "label": "association_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/composition_",
          "label": "composition_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/flow_",
          "label": "flow_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/hasAspect",
          "label": "hasAspect",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/hasPurpose",
          "label": "hasPurpose",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/influence_",
          "label": "influence_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForAccess",
          "label": "inverse_of_SourceRelationshipForAccess",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForAggregation",
          "label": "inverse_of_SourceRelationshipForAggregation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForAssignment",
          "label": "inverse_of_SourceRelationshipForAssignment",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForAssociation",
          "label": "inverse_of_SourceRelationshipForAssociation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForComposition",
          "label": "inverse_of_SourceRelationshipForComposition",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForFlow",
          "label": "inverse_of_SourceRelationshipForFlow",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForInfluence",
          "label": "inverse_of_SourceRelationshipForInfluence",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForRealization",
          "label": "inverse_of_SourceRelationshipForRealization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForServing",
          "label": "inverse_of_SourceRelationshipForServing",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForSpecialization",
          "label": "inverse_of_SourceRelationshipForSpecialization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_SourceRelationshipForTriggering",
          "label": "inverse_of_SourceRelationshipForTriggering",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForAccess",
          "label": "inverse_of_TargetRelationshipForAccess",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForAggregation",
          "label": "inverse_of_TargetRelationshipForAggregation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForAssignment",
          "label": "inverse_of_TargetRelationshipForAssignment",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForAssociation",
          "label": "inverse_of_TargetRelationshipForAssociation",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForComposition",
          "label": "inverse_of_TargetRelationshipForComposition",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForFlow",
          "label": "inverse_of_TargetRelationshipForFlow",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForInfluence",
          "label": "inverse_of_TargetRelationshipForInfluence",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForRealization",
          "label": "inverse_of_TargetRelationshipForRealization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForServing",
          "label": "inverse_of_TargetRelationshipForServing",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForSpecialization",
          "label": "inverse_of_TargetRelationshipForSpecialization",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_TargetRelationshipForTriggering",
          "label": "inverse_of_TargetRelationshipForTriggering",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/inverse_of_access",
          "label": "inverse_of_access",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/isResourceComposedOf",
          "label": "isResourceComposedOf",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/realization_",
          "label": "realization_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/serving_",
          "label": "serving_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/specialization_",
          "label": "specialization_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "http://www.plminterop.org/archimate/triggering_",
          "label": "△△triggering_",
          "parent": "OWLProperty"
        },
        "classes": [
          "property"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCY03FDPPCB34169V7",
          "label": "PropertyChain 1",
          "parent": "http://www.plminterop.org/archimate/AssignmentTo"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCH8NV8VWM8ZW4YK02",
          "label": "PropertyChain 2",
          "parent": "http://www.plminterop.org/archimate/AssignmentTo"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVC4AHHS2QJE2T4W9AN",
          "label": "PropertyChain 3",
          "parent": "http://www.plminterop.org/archimate/AssignmentTo"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCX9CXWHG60DPFYCMR",
          "label": "PropertyChain 4",
          "parent": "http://www.plminterop.org/archimate/AssignmentTo"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCHP9W8B7YVY0MQQVX",
          "label": "PropertyChain 5",
          "parent": "http://www.plminterop.org/archimate/AssignmentTo"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCTYF2PZS5AXGGTJ0Z",
          "label": "PropertyChain 6",
          "parent": "http://www.plminterop.org/archimate/AssignmentTo"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-0",
          "label": "1",
          "parent": "01JVM10WVCY03FDPPCB34169V7"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-0",
          "label": "2",
          "parent": "01JVM10WVCY03FDPPCB34169V7"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-0-1",
          "label": "1",
          "parent": "01JVM10WVCH8NV8VWM8ZW4YK02"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-1",
          "label": "2",
          "parent": "01JVM10WVCH8NV8VWM8ZW4YK02"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-0-2",
          "label": "1",
          "parent": "01JVM10WVC4AHHS2QJE2T4W9AN"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-2",
          "label": "2",
          "parent": "01JVM10WVC4AHHS2QJE2T4W9AN"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-0-3",
          "label": "1",
          "parent": "01JVM10WVCX9CXWHG60DPFYCMR"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-3",
          "label": "2",
          "parent": "01JVM10WVCX9CXWHG60DPFYCMR"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-0-4",
          "label": "1",
          "parent": "01JVM10WVCHP9W8B7YVY0MQQVX"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-4",
          "label": "2",
          "parent": "01JVM10WVCHP9W8B7YVY0MQQVX"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-0-5",
          "label": "1",
          "parent": "01JVM10WVCTYF2PZS5AXGGTJ0Z"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-5",
          "label": "2",
          "parent": "01JVM10WVCTYF2PZS5AXGGTJ0Z"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCJ0XSPRHWT9KR99JR",
          "label": "PropertyChain 7",
          "parent": "http://www.plminterop.org/archimate/access_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-6",
          "label": "1",
          "parent": "01JVM10WVCJ0XSPRHWT9KR99JR"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-6",
          "label": "2",
          "parent": "01JVM10WVCJ0XSPRHWT9KR99JR"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCQ5R9ZVTH6E4D8VFB",
          "label": "PropertyChain 8",
          "parent": "http://www.plminterop.org/archimate/aggregation_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCYEYHSQ6VBM4ASAYP",
          "label": "PropertyChain 9",
          "parent": "http://www.plminterop.org/archimate/aggregation_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCGCRZXEGFZF3XTZ6T",
          "label": "PropertyChain 10",
          "parent": "http://www.plminterop.org/archimate/aggregation_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCGCAAY3J37Y78RJW6",
          "label": "PropertyChain 11",
          "parent": "http://www.plminterop.org/archimate/aggregation_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-7",
          "label": "1",
          "parent": "01JVM10WVCQ5R9ZVTH6E4D8VFB"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-7",
          "label": "2",
          "parent": "01JVM10WVCQ5R9ZVTH6E4D8VFB"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-0-8",
          "label": "1",
          "parent": "01JVM10WVCYEYHSQ6VBM4ASAYP"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-8",
          "label": "2",
          "parent": "01JVM10WVCYEYHSQ6VBM4ASAYP"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-0-9",
          "label": "1",
          "parent": "01JVM10WVCGCRZXEGFZF3XTZ6T"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-9",
          "label": "2",
          "parent": "01JVM10WVCGCRZXEGFZF3XTZ6T"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-0-10",
          "label": "1",
          "parent": "01JVM10WVCGCAAY3J37Y78RJW6"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-10",
          "label": "2",
          "parent": "01JVM10WVCGCAAY3J37Y78RJW6"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVC68MWFAKZ0HXHE5C0",
          "label": "PropertyChain 12",
          "parent": "http://www.plminterop.org/archimate/association_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-11",
          "label": "1",
          "parent": "01JVM10WVC68MWFAKZ0HXHE5C0"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-11",
          "label": "2",
          "parent": "01JVM10WVC68MWFAKZ0HXHE5C0"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVC1601EPVV3TEPN9BY",
          "label": "PropertyChain 13",
          "parent": "http://www.plminterop.org/archimate/composition_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-12",
          "label": "1",
          "parent": "01JVM10WVC1601EPVV3TEPN9BY"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-12",
          "label": "2",
          "parent": "01JVM10WVC1601EPVV3TEPN9BY"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVC0KS8RCSAAXGX19R7",
          "label": "PropertyChain 14",
          "parent": "http://www.plminterop.org/archimate/flow_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-13",
          "label": "1",
          "parent": "01JVM10WVC0KS8RCSAAXGX19R7"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-13",
          "label": "2",
          "parent": "01JVM10WVC0KS8RCSAAXGX19R7"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCTGDFSACN53HVKX6F",
          "label": "PropertyChain 15",
          "parent": "http://www.plminterop.org/archimate/influence_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-14",
          "label": "1",
          "parent": "01JVM10WVCTGDFSACN53HVKX6F"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-14",
          "label": "2",
          "parent": "01JVM10WVCTGDFSACN53HVKX6F"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCDPAAEXEX6X6QJP59",
          "label": "PropertyChain 16",
          "parent": "http://www.plminterop.org/archimate/realization_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-15",
          "label": "1",
          "parent": "01JVM10WVCDPAAEXEX6X6QJP59"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-15",
          "label": "2",
          "parent": "01JVM10WVCDPAAEXEX6X6QJP59"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVCXR43M04RT6NGC3VX",
          "label": "PropertyChain 17",
          "parent": "http://www.plminterop.org/archimate/serving_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-16",
          "label": "1",
          "parent": "01JVM10WVCXR43M04RT6NGC3VX"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-16",
          "label": "2",
          "parent": "01JVM10WVCXR43M04RT6NGC3VX"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVDWA9W0P5RGYHK3W3N",
          "label": "PropertyChain 18",
          "parent": "http://www.plminterop.org/archimate/specialization_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-17",
          "label": "1",
          "parent": "01JVM10WVDWA9W0P5RGYHK3W3N"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-17",
          "label": "2",
          "parent": "01JVM10WVDWA9W0P5RGYHK3W3N"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "01JVM10WVDPTE1X7Q9MGGTW0YP",
          "label": "PropertyChain 19",
          "parent": "http://www.plminterop.org/archimate/triggering_"
        },
        "classes": [
          "propertychain"
        ]
      },
      {
        "data": {
          "id": "blank-0-18",
          "label": "1",
          "parent": "01JVM10WVDPTE1X7Q9MGGTW0YP"
        },
        "classes": [
          "chainmember"
        ]
      },
      {
        "data": {
          "id": "blank-1-18",
          "label": "2",
          "parent": "01JVM10WVDPTE1X7Q9MGGTW0YP"
        },
        "classes": [
          "chainmember"
        ]
      }
  ]
  
 
};