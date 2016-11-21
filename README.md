## LatLon-to-Admin
- This is a component of [MagicBox](https://github.com/unicef/magicbox/wiki)
- This is an api that takes latitude/longitude pairs, and returns an admin2 object
- API endpoint: /api/coords/
- example: localhost:8080/api/coords/-9.302728,-47.285156,-18.907687, 29.154968

```javascript
[
  [
    {
      "ID_0": 33,
      "ISO": "BRA",
      "NAME_0": "Brazil",
      "ID_1": 27,
      "NAME_1": "Tocantins",
      "ID_2": 5436,
      "NAME_2": "Lizarda",
      "HASC_2": null,
      "CCN_2": 0,
      "CCA_2": null,
      "TYPE_2": "MunicÃ­pio",
      "ENGTYPE_2": "Municipality",
      "NL_NAME_2": null,
      "VARNAME_2": null
    },
    {
      "ID_0": 33,
      "ISO": "BRA",
      "NAME_0": "Brazil",
      "ID_1": 27,
      "NAME_1": "Tocantins",
      "HASC_1": "BR.TO",
      "CCN_1": 0,
      "CCA_1": null,
      "TYPE_1": "Estado",
      "ENGTYPE_1": "State",
      "NL_NAME_1": null,
      "VARNAME_1": null
    }
  ],
  [
    {
      "ID_0": 256,
      "ISO": "ZWE",
      "NAME_0": "Zimbabwe",
      "ID_1": 10,
      "NAME_1": "Midlands",
      "ID_2": 57,
      "NAME_2": "Kwekwe",
      "HASC_2": "ZW.MI.KW",
      "CCN_2": 0,
      "CCA_2": null,
      "TYPE_2": "District",
      "ENGTYPE_2": "District",
      "NL_NAME_2": null,
      "VARNAME_2": "Que Que"
    },
    {
      "ID_0": 256,
      "ISO": "ZWE",
      "NAME_0": "Zimbabwe",
      "ID_1": 10,
      "NAME_1": "Midlands",
      "HASC_1": "ZW.MI",
      "CCN_1": 0,
      "CCA_1": null,
      "TYPE_1": "Province",
      "ENGTYPE_1": "Province",
      "NL_NAME_1": null,
      "VARNAME_1": null
    }
  ]
]
```
