# List of APIs for Healthcare Related Services

## `COVID-19`

**Link:** https://rapidapi.com/api-sports/api/covid-193/

**API Key:** `1edcaed7d6mshed3833e2798a6b9p14f9d9jsn499aea9e5675`

**API Host':** `covid-193.p.rapidapi.com`

`# Get all available countries`

```
GET `https://covid-193.p.rapidapi.com/countries`
```

### Request Body

```json
{
  //Optional
  "search": "Philippines"
}
```

### Response

```json
{
    //With Search Parameter
  "get": "countries",
  "parameters": {
    "search": "Philippines"
  },
  "errors": [],
  "results": 1,
  "response": [
    "Philippines"
  ]
}
{
    //Without Search Paramter
  "get": "countries",
  "parameters": [],
  "errors": [],
  "results": 231,
  "response": [
    "Afghanistan",
    "Albania",
    "Algeria",
    ...
  ]
}
```

`# Get all current statistics for all countries`

```
GET `https://covid-193.p.rapidapi.com/statistics`
```

### Request Body

```json
{
  //Optional
  "country": "Philippines"
}
```

### Response

```json
{
    //With country Parameter
  "get": "statistics",
  "parameters": {
    "country": "Philippines"
  },
  "errors": [],
  "results": 1,
  "response": [
    {
      "continent": "Asia",
      "country": "Philippines",
      "population": 112508994,
      "cases": {
        "new": "+132",
        "active": 3630,
        "critical": 162,
        "recovered": 4103828,
        "1M_pop": "37100",
        "total": 4174101
      },
      "deaths": {
        "new": "+3",
        "1M_pop": "592",
        "total": 66643
      },
      "tests": {
        "1M_pop": "316944",
        "total": 35659012
      },
      "day": "2023-10-18",
      "time": "2023-10-18T15:45:05+00:00"
    }
  ]
}
{
    //Without Parameter
  "get": "statistics",
  "parameters": [],
  "errors": [],
  "results": 238,
  "response": [
    {
      "continent": "Europe",
      "country": "Vatican-City",
      "population": 799,
      "cases": {
        "new": null,
        "active": 0,
        "critical": null,
        "recovered": 29,
        "1M_pop": "36295",
        "total": 29
      },
      "deaths": {
        "new": null,
        "1M_pop": null,
        "total": null
      },
      "tests": {
        "1M_pop": null,
        "total": null
      },
      "day": "2023-10-18",
      "time": "2023-10-18T15:30:12+00:00"
    },
    ...
  ]
}
```

`# Get historical statistics for a country`

```
GET `https://covid-193.p.rapidapi.com/history`
```

### Request Body

```json
{
  //Required Parameters
  //Name of the country, [All] For global History
  "country": "Philippines",

  //Optional Parameters
  //Filter by day
  "day": "2023-10-18" //DATE (YYYY-MM-DD)
}
```

### Response

```json
{
  //With country and date Parameters
  "get": "history",
  "parameters": {
    "country": "Philippines",
    "day": "2023-10-18"
  },
  "errors": [],
  "results": 1,
  "response": [
    {
      "continent": "Asia",
      "country": "Philippines",
      "population": 112508994,
      "cases": {
        "new": "+132",
        "active": 3630,
        "critical": 162,
        "recovered": 4103828,
        "1M_pop": "37100",
        "total": 4174101
      },
      "deaths": {
        "new": "+3",
        "1M_pop": "592",
        "total": 66643
      },
      "tests": {
        "1M_pop": "316944",
        "total": 35659012
      },
      "day": "2023-10-18",
      "time": "2023-10-18T15:45:05+00:00"
    }
  ]
}
```