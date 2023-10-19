# List of APIs for Healthcare Related Services

## `Fitness Calculator`

Find “body fat percentage”, “ideal weight”, “BMI”, “daily calory requirement” and some macro nutrients with this api.

This api is very suit for requirements of your fitness application. For instance, it can be used to calculate important values such as ideal weight, body fat percentage or to prepare macro nutrients diets. If you have an idea about fitness world, don’t waste your time to collect nutrients data or to search mathematical formulas. Hopefully, you would be satisfied from it.

**Link:** https://rapidapi.com/malaaddincelik/api/fitness-calculator/

**API Key:** `1edcaed7d6mshed3833e2798a6b9p14f9d9jsn499aea9e5675`

**API Host':** `fitness-calculator.p.rapidapi.com`

`# Daily Calory Requirements`

Knowing your daily calorie requirements is important to achieve your final goal. You can calculate your daily calorie req. for 7 different goals.

```
GET `https://fitness-calculator.p.rapidapi.com/dailycalorie`
```

### Parameters Requirements
```
What are the Parameters of The /dailycalorie?
There are 5 parameters of the endpoint.

1. age (Required)
It should use to input the user’s age. It must be number. It cannot be negative or bigger than 80.

2. gender(Required)
It should use to input the user’s gender. It must be string. It can only be male or female.

3. weight (Required)
It should use to input the user’s mass. It must be number. It cannot be smaller than 40 or bigger than 160. The unit of weight is in kg.

4. height (Required)
It should use to input the user’s height. It must be number. It cannot be smaller than 130 or bigger than 230. The unit of weight is in cm.

5. activitylevel(Required)
activitylevel represent that an activity’s value how much bigger than the basal metabolic rate (BMR). There are six possible activity levels which are:

{
‘level _ 1’ : “Sedentary: little or no exercise”,
‘level _ 2’ : “Exercise 1-3 times/week”,
‘level _ 3’ : “Exercise 4-5 times/week”,
‘level _ 4’ : “Daily exercise or intense exercise 3-4 times/week”,
‘level _ 5’ : “Intense exercise 6-7 times/week”,
‘level _ 6’ : “Very intense exercise daily, or physical job”
}
```

### Request Body (Params)

```json
  "age": 25, //Cannot be More than 80
  "gender": "male", //male or female
  "height": 180,  //cm
  "weight": 70, //kg
  // "level_1", "level_2", "level_3", "level_4", "level_5","level_6",
  "activitylevel": "level_1" 
```

### Response

```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": {
    "BMR": 1705,
    "goals": {
      "maintain weight": 2046,
      "Mild weight loss": {
        "loss weight": "0.25 kg",
        "calory": 1796
      },
      "Weight loss": {
        "loss weight": "0.50 kg",
        "calory": 1546
      },
      "Extreme weight loss": {
        "loss weight": "1 kg",
        "calory": 1046
      },
      "Mild weight gain": {
        "gain weight": "0.25 kg",
        "calory": 2296
      },
      "Weight gain": {
        "gain weight": "0.50 kg",
        "calory": 2546
      },
      "Extreme weight gain": {
        "gain weight": "1 kg",
        "calory": 3046
      }
    }
  }
}
```

`# BMI`

Find body mass index value (BMI) with this endpoint. You just need to enter three parameters which are age, weight (kg), and height(cm) information.

```
GET `https://fitness-calculator.p.rapidapi.com/bmi`
```

### Parameter Requirements
```
What are the Parameters of The /bmi?

There are three parameters of ‘bmi endpoint’.

1. age (Required)
It should use to input the user’s age. It must be number. It cannot be negative or bigger than 80.

2. weight (Required)
It should use to input the user’s mass. It must be number. It cannot be smaller than 40 or bigger than 160. The unit of weight is in kg.

3. height (Required)
It should use to input the user’s age. It must be number. It cannot be smaller than 130 or bigger than 230. The unit of weight is in cm.
```

### Request Body (Params)

```json
"age": 25,
"weight": 65,
"height": 180,
```

### Response

```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": {
    "bmi": 20.06,
    "health": "Normal",
    "healthy_bmi_range": "18.5 - 25"
  }
}
```

`# Body Fat Percentage`

Knowing body fat percentage would be helpful to decide on a well-programmed fitness plan. You can use this endpoint with 7 parameters.

```
GET `https://fitness-calculator.p.rapidapi.com/bodyfat`
```

### Parameter Requirements
```
What are the Parameters of The /bodyfat?
There are 7 parameters of the endpoint.

1. age (Required)
It should use to input the user’s age. It must be number. It cannot be negative or bigger than 80.

2. gender(Required)
It should use to input the user’s gender. It must be string. It can only be male or female.

3. weight (Required)
It should use to input the user’s mass. It must be number. It cannot be smaller than 40 or bigger than 160. The unit of weight is in kg.

4. height (Required)
It should use to input the user’s height. It must be number. It cannot be smaller than 130 or bigger than 230. The unit of weight is in cm.

5. neck (Required)
It should use to input the user’s neck circumference. It must be number. It cannot be smaller than 20 or bigger than 80. The unit of weight is in cm.

6. waist (Required)
It should use to input the user’s waist circumference. It must be number. It cannot be smaller than 40 or bigger than 130. The unit of weight is in cm.

7. hip (Required)
It should use to input the user’s hip circumference. It must be number. It cannot be smaller than 40 or bigger than 130. The unit of weight is in cm.
```

### Request Body

```json
  "age": 25,
  "gender": "male",
  "height": 180,
  "weight": 70,
  "neck": 50,
  "waist": 96,
  "hip": 92,
```

### Response
```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": {
    "Body Fat (U.S. Navy Method)": 15.33,
    "Body Fat Category": "Fitness",
    "Body Fat Mass": 10.73,
    "Lean Body Mass": 59.27,
    "Body Fat (BMI method)": 15.48
  }
}
```

`# Ideal Weight`

Find four different ideal weight scores according to four different well-known equations which are Hamwi, Devine, Miller, Robinson. There are two parameters which are age and height(cm) values.

```
GET https://fitness-calculator.p.rapidapi.com/idealweight
```

### Parameter Requirements
```
What are the Parameters of The /idealweight?

1. gender (Required)
It should use to input the user’s gender. It must be string. It can only be male or female.

2. height (Required)
It should use to input the user’s height. It must be number. It cannot be smaller than 130 or bigger than 230. The unit of weight is in cm.
```

### Request Body
```json
  "gender": "male",
  "height": 180,
```

### Response
```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": {
    "Hamwi": 77.34,
    "Devine": 75.53,
    "Miller": 71.85,
    "Robinson": 73.09
  }
}
```

`# Burned Calorie From Activity`

Calculate the burned calorie for a specific activity.

```
GET https://fitness-calculator.p.rapidapi.com/burnedcalorie
```

### Parameter Requirements
```
What are the parameters of /burnedcalorie?
There are 3 required parameters to use this endpoint.

1. activityid(required)
Use the /activities endpoint to find activityid values.

2. activitymin(required)
It refers to how many minutes were spent on the activity. It must be numeric and cannot be negative value.

3. weight (Required)
It should use to input the user’s mass. It must be number. It cannot be smaller than 40 or bigger than 160. The unit of weight is in kg.
```

### Request Body
```json
  "activityid": "bi_1"
  "activitymin": 25,
  "weight": 75,
```

### Response
```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": {
    "burnedCalorie": "437.50",
    "unit": "calorie"
  }
}
```

`# Activities`

Find the met values for activities.

```
GET https://fitness-calculator.p.rapidapi.com/activities
```

### Parameter Requirements
```
What is the parameter of the /activities endpoint?
There is only one required variable for the activities endpoint which is the intensitylevel

intensitylevel (required)
It should use to call the activities whose intensity level values are desired from the activity database. intensitylevel variable must be numeric and can only be one of ‘1,2,3,4,5,6,7,8,9’.
```

### Request Body
```json
"intensitylevel": 1
```

### Response
```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": [
    {
      "_id": "61732979343c73779c42093f",
      "id": "ho_16",
      "activity": "home activities",
      "metValue": "1.8",
      "description": "wash dishes, standing or in general (not broken into stand/walk components)",
      "intensityLevel": 1
    },
    {
      "_id": "6173296f343c73779c4208fa",
      "id": "co_51",
      "activity": "conditioning exercise",
      "metValue": "2.0",
      "description": "yoga, Nadisodhana",
      "intensityLevel": 1
    },
    ...
  ]
}
```

`# Macros Amounts`

Find the amount of macro nutrients in four different categories which are balanced, low-fat, low-carbs and high-protein for a specific calorie burned. There are 6 inputs which are age, gender, height, weight, activity level and goal.

```
GET 'https://fitness-calculator.p.rapidapi.com/macrocalculator'
```

### Parameter Requirements
```
What are the parameters of /macrocalculator?

There are 6 inputs which are age, gender, height, weight, activity level and goal.

1. age (Required)
It should use to input the user’s age. It must be number. It cannot be negative or bigger than 80.

2. gender (Required)
It should use to input the user’s gender. It must be string. It can only be male or female.

3. weight (Required)
It should use to input the user’s mass. It must be number. It cannot be smaller than 40 or bigger than 160. The unit of weight is in kg.

4. height (Required)
It should use to input the user’s height. It must be number. It cannot be smaller than 130 or bigger than 230. The unit of weight is in cm.

5. activity level(required) :
  "1" : "BMR",
  "2" : "Sedentary: little or no exercise",
  "3" : "Exercise 1-3 times/week",
  "4" : "Exercise 4-5 times/week",
  "5" : "Daily exercise or intense exercise 3-4 times/week",
  "6" : "Intense exercise 6-7 times/week",
  "7" : "Very intense exercise daily, or physical job" 

6. goals (required) :
  "maintain" : "maintain weight",
  "mildlose" : "Mild weight loss",
  "weightlose" : "Weight loss",
  "extremelose" : "Extreme weight loss",
  "mildgain" : "Mild weight gain",
  "weightgain" : "Weight gain",
  "extremegain" : "Extreme weight gain"
```

### Request Body
```json
  "age": 25,
  "gender": "male",
  "height": 180,
  "weight": 70,
  "activitylevel": 5 
  "goal": "extremelose"
```

### Response
```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": {
    "calorie": 1642.75,
    "balanced": {
      "protein": 97.0566866267464,
      "fat": 45.249401197604705,
      "carbs": 211.8196606786426
    },
    "lowfat": {
      "protein": 106.80823693657764,
      "fat": 36.0395891503789,
      "carbs": 222.79018747506984
    },
    "lowcarbs": {
      "protein": 116.72691690084314,
      "fat": 54.73635086310718,
      "carbs": 170.80379365716573
    },
    "highprotein": {
      "protein": 136.78569991954947,
      "fat": 40.96962992759447,
      "carbs": 181.72013274336297
    }
  }
}
```

**# Foods**

`# Food Info`

Find the food info for a food id from the food database.

```
GET `https://fitness-calculator.p.rapidapi.com/food`
```

### Parameter Requirements
```
What is the parameter of the /food endpoint?
There is only one required variable for the food endpoint which is the food_id

food_id (required)
It should use to call the food information in the food database for a specific food. To find food_id values use the foodids endpoint.
```

### Request Body 
```json
  "foodid": "SR25_1_1"
```

### Response
```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": {
    "foodid": "SR25_1_1",
    "description": "Milk, goat, fluid, with added vitamin D",
    "portion": 115.96,
    "portionUnit": "G",
    "foodNutrients": {
      "Protein": {
        "unitname": "G",
        "value": 3.56
      },
      "Fat": {
        "Fatty acids, total saturated": {
          "unitname": "G",
          "value": 2.67
        },
        "Total lipid (fat)": {
          "unitname": "G",
          "value": 4.14
        },
        "Fatty acids, total monounsaturated": {
          "unitname": "G",
          "value": 1.11
        },
        "Fatty acids, total polyunsaturated": {
          "unitname": "G",
          "value": 0.149
        }
      },
      "Carbonhydrate": {
        "unitname": "G",
        "value": 4.45
      },
      "Energy": {
        "unitname": "KCAL",
        "value": 69
      },
      "Water": {
        "unitname": "G",
        "value": 87
      },
      "Micronutrients": {
        "Vitamin E (alpha-tocopherol)": {
          "unitname": "MG",
          "value": 0.07
        },
        "Carotene, beta": {
          "unitname": "UG",
          "value": 7
        },
        "Vitamin K (phylloquinone)": {
          "unitname": "UG",
          "value": 0.3
        },
        ...
      }
    }
  }
}
```

`# Food Names and Ids`

Find food table ids for a sub-table in the food database.

```
GET `https://fitness-calculator.p.rapidapi.com/foodids`
```

### Parameter Requirements
```
What is the parameter of the /foodids endpoint?
There is only one required variable for the foodids endpoint which is the subtablename

subtablename (required)
It should use to call the food id values in the food database for a specific food sub-table. To find sub-table names values use the foodids/subtablenames endpoint.
```

### Request Body
```json
  "subtablename": "Fo1_2"
```

### Response
```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": [
    {
      "_id": "6168046c5729caafda8337d5",
      "dataType": "Foundation",
      "subDataType": "Fruits and Fruit Juices",
      "id": "Fo1_2_2",
      "foodType": "Apples, gala, with skin, raw"
    },
    {
      "_id": "6168046d5729caafda8337db",
      "dataType": "Foundation",
      "subDataType": "Fruits and Fruit Juices",
      "id": "Fo1_2_8",
      "foodType": "Figs, dried, uncooked"
    },
    ...
  ]
}
```

`# Sub_Table Names`

Find sub-table names of a table name in the food database.

```
GET `https://fitness-calculator.p.rapidapi.com/foodids/subtablenames`
```

### Parameter Requirements
```
What is the parameter of the /foodids/subtablenames endpoint?
There is only one required variable for the endpoint which is the tablename

tablename (required)
It should use to call the sub-table name values in the food database for a specific food table. To find table names values use the foodids/tablenames endpoint.
```

### Request Body
```json
  "tablename": "Su10"
```

### Response
```json
{
  "status_code": 200,
  "request_result": "Successful",
  "data": [
    {
      "_id": "6169f6e423738e47c65d6d52",
      "dataType": "Survey (FNDDS)",
      "id": "Su10_1",
      "subDataType": "Jams, syrups, toppings",
      "foodCount": 1
    }
  ]
}
```

`# tablenames`

Find the more than 70 main table names of the food database.

```
GET `https://fitness-calculator.p.rapidapi.com/foodids/tablenames`
```

### Parameter Requirements
```
The aim is to find table names values in the food database. There are no required parameters.
```

### Response
```json
{
  "table_names": [
    "SR9",
    "Su16",
    "SR26",
    "Su24",
    "SR25",
    "SR5",
    "SR12",
    ...
  ]
}
```