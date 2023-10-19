# List of APIs for Healthcare Related Services

## `Mega Fitness Calculator`

`# Get Body Mass Index`

Use 7 different Fitness Calculators with one API, Find “Ideal Body Weight”, “BMI”, “TDEE”, “BMR”, “ABSI”, “Waist-hip Ratio” and “Body Fat Percentage”.

Notes :
All returned values are raw (no decimal fixing).
No minimum or maximum for parameters (you can set your own limitation).
All variables Must be in Metric System (cm,kg)
(1 in = 2.54 cm)
(1 lbs = 1kg / 2.205)
so it’s fully customizable 😃

```
Health Status Available :

-Under Weight
-Normal Weight
-Over Weight
-Obesity class I
-Obesity class II
-Obesity class III
```

### Response

```json
{
  "info": {
    "bmi": 23.31,
    "health": "Normal Weight",
    "healthy_bmi_range": "18.5-24.9"
  }
}
```

`# Get Basal Metabolic Rate`

BMR is the number of calories required to keep your body functioning at rest.

### Response

```json
{
  "info": {
    "bmr": 1605.756,
    "gender": "male"
  }
}
```

`# Get Body Fat Percentage`

Find BFP value , Total Fat Mass & Lean Mass (Weight of everything except fat)

```
Available Health Status:

-Less than Essential Fat
-Essential Fat
-Athletes
-Fitness
-Acceptable
-Obese
```

### Response

```json
{
  "info": {
    "bfp": 16.499999999999996,
    "fat_mass": 11.054999999999996,
    "lean_mass": 55.94500000000001,
    "description": "Fitness",
    "gender": "male"
  }
}
```

`# Get Ideal Body Weight`

```
Get IBW in 4 different Formulas:

Robinson
Miller
Devine
Hamwi
```

### Response

```json
{
  "info": {
    "robinson": 59.440944881889756,
    "miller": 61.45275590551181,
    "devine": 59.6259842519685,
    "hamwi": 59.01181102362204,
    "gender": "female"
  }
}
```

`# Get Waist-Hip Ratio`

WHR is used to determine fat distribution in body and indicate the person’s overall health.

```
Available Shapes Status:
Pear
Apple

Available risk level Status:
Low Health Risk
Moderate Health Risk
High Health Risk
```

### Response

```json
{
  "info": {
    "whr": "0.649",
    "bodyShape": "Pear",
    "riskLevel": "Low Health Risk",
    "gender": "female"
  }
}
```

`# Get A Body Shape Index`

ABSI index is used to estimate the risk of premature mortality based on health factors.

```
Available Mortality Risk Status:

Very Low
Low
Average
High
Very High
```

### Response

```json
{
  "info": {
    "absi": "0.0762",
    "absiZ": "-0.7254",
    "mortalityRisk": "Low",
    "gender": "female"
  }
}
```

`# Get Total Daily Energy Expenditure`

TDEE is the total amount of calories burned when the activity rate is taken into account..

```
Activity Level Possible Values

se => sedentary
la => lightly active
ma => moderately active
va => very active
ea => extra active
```

### Response
```json
{
  "info": {
    "tdee": 2892.2163
  }
}
```
