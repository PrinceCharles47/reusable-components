# List of APIs for Healthcare Related Services

## `COVID DataFlow`

`# Get all results from all countries`

```
GET `https://covid-19.dataflowkit.com/v1`
```

### Response
```json
[
    {
	   "Active Cases_text":"1,567,323",
	   "Country_text":"World",
	   "Last Update":"2020-04-18 21:18",
	   "New Cases_text":"+73,499",
	   "New Deaths_text":"+5,523",
	   "Total Cases_text":"2,322,362",
	   "Total Deaths_text":"159,668",
	   "Total Recovered_text":"595,371"
	},
    ...
]
```

`# Get results from 'world' or 'define countries`

```
GET `https://covid-19.dataflowkit.com/v1/world`
```

### Response
```json
[
    {
	   "Active Cases_text":"1,567,323",
	   "Country_text":"World",
	   "Last Update":"2020-04-18 21:18",
	   "New Cases_text":"+73,499",
	   "New Deaths_text":"+5,523",
	   "Total Cases_text":"2,322,362",
	   "Total Deaths_text":"159,668",
	   "Total Recovered_text":"595,371"
	}
]
```