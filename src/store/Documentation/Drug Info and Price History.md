# List of APIs for Healthcare Related Services

## `Drug Info and Price History`

An API to rapidly retrieve information about drug prices and history across a variety of sources

**Link:** https://rapidapi.com/rnelsomain/api/drug-info-and-price-history/

**API Key:** `1edcaed7d6mshed3833e2798a6b9p14f9d9jsn499aea9e5675`

**API Host':** `drug-info-and-price-history.p.rapidapi.com`

`# Returns information about the given drug`

```
GET `https://drug-info-and-price-history.p.rapidapi.com/1/druginfo`
```

### Request Body

```json
  "drug": "advil"
```

### Response

```json
[
  {
    "product_ndc": "0573-0165",
    "generic_name": "ibuprofen",
    "labeler_name": "GlaxoSmithKline Consumer Healthcare Holdings (US) LLC",
    "brand_name": "ADVIL",
    "active_ingredients": [
      {
        "name": "IBUPROFEN",
        "strength": "200 mg/1"
      }
    ],
    "finished": true,
    "packaging": [
      {
        "package_ndc": "0573-0165-20",
        "description": "1 BOTTLE in 1 CARTON (0573-0165-20)  / 24 TABLET, COATED in 1 BOTTLE",
        "marketing_start_date": "19840518",
        "sample": false
      },
      {
        "package_ndc": "0573-0165-25",
        "description": "1 BOTTLE in 1 CARTON (0573-0165-25)  / 36 TABLET, COATED in 1 BOTTLE",
        "marketing_start_date": "19840518",
        "sample": false
      },
      {
        "package_ndc": "0573-0165-30",
        "description": "1 BOTTLE in 1 CARTON (0573-0165-30)  / 50 TABLET, COATED in 1 BOTTLE",
        "marketing_start_date": "19840518",
        "sample": false
      },
      {
        "package_ndc": "0573-0165-31",
        "description": "1 BOTTLE in 1 CARTON (0573-0165-31)  / 75 TABLET, COATED in 1 BOTTLE",
        "marketing_start_date": "19840518",
        "sample": false
      },
      {
        "package_ndc": "0573-0165-40",
        "description": "1 BOTTLE in 1 CARTON (0573-0165-40)  / 100 TABLET, COATED in 1 BOTTLE",
        "marketing_start_date": "19840518",
        "sample": false
      },
      {
        "package_ndc": "0573-0165-41",
        "description": "1 BOTTLE in 1 CARTON (0573-0165-41)  / 125 TABLET, COATED in 1 BOTTLE",
        "marketing_start_date": "19840518",
        "sample": false
      },
      {
        "package_ndc": "0573-0165-42",
        "description": "1 BOTTLE in 1 CARTON (0573-0165-42)  / 150 TABLET, COATED in 1 BOTTLE",
        "marketing_start_date": "19840518",
        "sample": false
      }
    ],
    "listing_expiration_date": "20241231",
    "openfda": {
      "manufacturer_name": [
        "GlaxoSmithKline Consumer Healthcare Holdings (US) LLC"
      ],
      "rxcui": ["153008", "310965"],
      "spl_set_id": ["1a665e64-9f30-be37-4a83-38789f1f1e89"],
      "is_original_packager": [true],
      "nui": ["N0000000160", "M0001335", "N0000175722"],
      "pharm_class_moa": ["Cyclooxygenase Inhibitors [MoA]"],
      "pharm_class_cs": ["Anti-Inflammatory Agents, Non-Steroidal [CS]"],
      "pharm_class_epc": ["Nonsteroidal Anti-inflammatory Drug [EPC]"],
      "unii": ["WK2XYI10QM"]
    },
    "marketing_category": "NDA",
    "dosage_form": "TABLET, COATED",
    "spl_id": "50ff83c8-c41f-4a9c-adb1-cb060bf21bc3",
    "product_type": "HUMAN OTC DRUG",
    "route": ["ORAL"],
    "marketing_start_date": "19840518",
    "product_id": "0573-0165_50ff83c8-c41f-4a9c-adb1-cb060bf21bc3",
    "application_number": "NDA018989",
    "brand_name_base": "ADVIL",
    "pharm_class": [
      "Anti-Inflammatory Agents",
      "Non-Steroidal [CS]",
      "Cyclooxygenase Inhibitors [MoA]",
      "Nonsteroidal Anti-inflammatory Drug [EPC]"
    ]
  }
]
```

`# Given a brand name, returns a generic name`

```
GET `https://drug-info-and-price-history.p.rapidapi.com/1/genericname`
```

### Request Body

```json
{
  //Required
  "drug": "advil"
}
```

### Response

```json
{
  "generic_name": "ibuprofen"
}
```