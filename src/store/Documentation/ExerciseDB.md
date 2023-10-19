# List of APIs for Healthcare Related Services

## `ExerciseDB`

`Return list of exercises based on body part`

```
GET `https://exercisedb.p.rapidapi.com/exercises/target/${target}`
```

### Response
```json
//Set limit to 2 items in example...
[
  {
    "bodyPart": "back",
    "equipment": "cable",
    "gifUrl": "https://v2.exercisedb.io/image/E03MEGuFgwNmhA",
    "id": "0007",
    "name": "alternate lateral pulldown",
    "target": "lats",
    "secondaryMuscles": [
      "biceps",
      "rhomboids"
    ],
    "instructions": [
      "Sit on the cable machine with your back straight and feet flat on the ground.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "https://v2.exercisedb.io/image/s2t4Ph-WU8TSN-",
    "id": "3293",
    "name": "archer pull up",
    "target": "lats",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "instructions": [
      "Start by hanging from a pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
      "Engage your core and pull your shoulder blades down and back.",
      "As you pull yourself up, bend one arm and bring your elbow towards your side, while keeping the other arm straight.",
      "Continue pulling until your chin is above the bar and your bent arm is fully flexed.",
      "Lower yourself back down with control, straightening the bent arm and repeating the movement on the other side.",
      "Alternate sides with each repetition."
    ]
  }
]
```

`# Returns a list of exercises based on target muscle`

```
GET `https://exercisedb.p.rapidapi.com/exercises/target/${target}`
```

### Response
```json
//Set limit to 2 items in example...
[
  {
    "bodyPart": "upper legs",
    "equipment": "leverage machine",
    "gifUrl": "https://v2.exercisedb.io/image/aciAfvLBFGiwDh",
    "id": "0597",
    "name": "lever seated hip abduction",
    "target": "abductors",
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ],
    "instructions": [
      "Adjust the seat height so that your knees are at a 90-degree angle.",
      "Sit on the machine with your back against the backrest and your feet on the footrests.",
      "Place your hands on the side handles for stability.",
      "Engage your abductors and slowly push your legs apart, away from the midline of your body.",
      "Pause for a moment at the end of the movement, then slowly bring your legs back together to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "upper legs",
    "equipment": "resistance band",
    "gifUrl": "https://v2.exercisedb.io/image/BgpYgt9rAMdSo3",
    "id": "3006",
    "name": "resistance band seated hip abduction",
    "target": "abductors",
    "secondaryMuscles": [
      "glutes",
      "hamstrings"
    ],
    "instructions": [
      "Sit on a chair or bench with your back straight and feet flat on the ground.",
      "Wrap the resistance band around your thighs, just above your knees.",
      "Place your hands on the sides of the chair or bench for support.",
      "Engage your abductors (outer thigh muscles) and slowly push your knees apart, against the resistance of the band.",
      "Pause for a moment at the end of the movement, then slowly bring your knees back together.",
      "Repeat for the desired number of repetitions."
    ]
  }
]
```