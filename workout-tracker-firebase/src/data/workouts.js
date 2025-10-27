const workouts = {
  "Monday": [ // 💥 Chest 80% / Triceps 20%
    { name: "Barbell Bench Press", sets: 5, reps: "6–8", weight: "", completed: false, notes: "Heavy compound", videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg" },
    { name: "Incline Dumbbell Press", sets: 4, reps: "8–10", weight: "", completed: false, notes: "Squeeze at top", videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8" },
    { name: "Chest Fly (Machine or Dumbbell)", sets: 4, reps: "12–15", weight: "", completed: false, notes: "Full stretch", videoUrl: "https://www.youtube.com/watch?v=eozdVDA78K0" },
    { name: "Cable Crossover (High to Low)", sets: 3, reps: "15", weight: "", completed: false, notes: "Focus on contraction", videoUrl: "https://www.youtube.com/watch?v=taI4XduLpTk" },
    { name: "Dumbbell Pullover", sets: 3, reps: "12", weight: "", completed: false, notes: "Keep chest expanded", videoUrl: "https://www.youtube.com/watch?v=2z8JmcrW-As" },
    { name: "Close-Grip Bench Press", sets: 3, reps: "10–12", weight: "", completed: false, notes: "Triceps finisher", videoUrl: "https://www.youtube.com/watch?v=ivjGVUZdS4o" },
    { name: "Overhead Dumbbell Extension", sets: 3, reps: "12–15", weight: "", completed: false, notes: "Full extension", videoUrl: "https://www.youtube.com/watch?v=_gsUck-7M74" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "50 Cal minimum", weight: "", completed: false, notes: "Moderate pace", videoUrl: "https://www.youtube.com/watch?v=Vf0rP3QZpE8" },
  ],

  "Tuesday": [ // 💪 Back 80% / Biceps 20%
    { name: "Deadlift", sets: 4, reps: "5–6", weight: "", completed: false, notes: "Heavy compound", videoUrl: "https://www.youtube.com/watch?v=op9kVnSso6Q" },
    { name: "Pull-Ups / Lat Pulldown", sets: 4, reps: "8–10", weight: "", completed: false, notes: "Wide grip focus", videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc" },
    { name: "Barbell Row", sets: 4, reps: "8–10", weight: "", completed: false, notes: "Parallel to ground", videoUrl: "https://www.youtube.com/watch?v=vT2GjY_Umpw" },
    { name: "Seated Cable Row", sets: 3, reps: "10–12", weight: "", completed: false, notes: "Full stretch and squeeze", videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74" },
    { name: "Single Arm Dumbbell Row", sets: 3, reps: "10–12 each", weight: "", completed: false, notes: "Focus on control", videoUrl: "https://www.youtube.com/watch?v=pYcpY20QaE8" },
    { name: "Dumbbell Shrugs", sets: 3, reps: "15", weight: "", completed: false, notes: "Top squeeze 2 sec", videoUrl: "https://www.youtube.com/watch?v=Ni2BmyMqD0A" },
    { name: "Barbell Bicep Curl", sets: 3, reps: "10–12", weight: "", completed: false, notes: "Strict form", videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo" },
    { name: "Incline Dumbbell Curl", sets: 3, reps: "12–15", weight: "", completed: false, notes: "Slow eccentric", videoUrl: "https://www.youtube.com/watch?v=soxrZlIl35U" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "50 Cal minimum", weight: "", completed: false, notes: "Steady state", videoUrl: "https://www.youtube.com/watch?v=Vf0rP3QZpE8" },
  ],

  "Wednesday": [ // 🧱 Shoulders 80% / Traps 20%
    { name: "Seated Barbell Overhead Press", sets: 5, reps: "6–8", weight: "", completed: false, notes: "Go heavy", videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog" },
    { name: "Dumbbell Arnold Press", sets: 4, reps: "10", weight: "", completed: false, notes: "Smooth rotation", videoUrl: "https://www.youtube.com/watch?v=vj2w851ZHRM" },
    { name: "Lateral Raises", sets: 4, reps: "12–15", weight: "", completed: false, notes: "Don’t swing", videoUrl: "https://www.youtube.com/watch?v=kDqklk1ZESo" },
    { name: "Front Raise (Plate or Dumbbell)", sets: 3, reps: "12–15", weight: "", completed: false, notes: "Controlled lift", videoUrl: "https://www.youtube.com/watch?v=-t7fuZ0KhDA" },
    { name: "Rear Delt Fly (Machine or Cable)", sets: 4, reps: "12–15", weight: "", completed: false, notes: "Focus on rear delts", videoUrl: "https://www.youtube.com/watch?v=eaRQF-7hhmo" },
    { name: "Upright Row (EZ Bar)", sets: 3, reps: "10–12", weight: "", completed: false, notes: "Keep elbows high", videoUrl: "https://www.youtube.com/watch?v=3hA_t3KQ7Ao" },
    { name: "Dumbbell Shrugs", sets: 4, reps: "15–20", weight: "", completed: false, notes: "Pause at top", videoUrl: "https://www.youtube.com/watch?v=Ni2BmyMqD0A" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "50 Cal minimum", weight: "", completed: false, notes: "Post-workout burn", videoUrl: "https://www.youtube.com/watch?v=Vf0rP3QZpE8" },
  ],

  "Thursday": [ // 🦵 Legs 100%
    { name: "Barbell Squat", sets: 5, reps: "6–8", weight: "", completed: false, notes: "Go heavy", videoUrl: "https://www.youtube.com/watch?v=Dy28eq2PjcM" },
    { name: "Romanian Deadlift", sets: 4, reps: "8–10", weight: "", completed: false, notes: "Stretch hamstrings", videoUrl: "https://www.youtube.com/watch?v=DJT3XqH0q9A" },
    { name: "Walking Lunges", sets: 3, reps: "20 (10/leg)", weight: "", completed: false, notes: "Long strides", videoUrl: "https://www.youtube.com/watch?v=D7KaRcUTQeE" },
    { name: "Leg Press", sets: 4, reps: "10–12", weight: "", completed: false, notes: "Deep range", videoUrl: "https://www.youtube.com/watch?v=IZxyjW7MPJQ" },
    { name: "Leg Curl Machine", sets: 3, reps: "12–15", weight: "", completed: false, notes: "Control tempo", videoUrl: "https://www.youtube.com/watch?v=1Tq3QdYUuHs" },
    { name: "Leg Extension", sets: 3, reps: "15", weight: "", completed: false, notes: "Pause at top", videoUrl: "https://www.youtube.com/watch?v=YyvSfVjQeL0" },
    { name: "Standing Calf Raises", sets: 4, reps: "15–20", weight: "", completed: false, notes: "Slow stretch", videoUrl: "https://www.youtube.com/watch?v=YMmgqO8Jo-k" },
    { name: "Seated Calf Raises", sets: 3, reps: "20", weight: "", completed: false, notes: "Squeeze at top", videoUrl: "https://www.youtube.com/watch?v=gwLzBJYoWlI" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "50 Cal minimum", weight: "", completed: false, notes: "Leg pump finisher", videoUrl: "https://www.youtube.com/watch?v=Vf0rP3QZpE8" },
  ],

  "Friday": [ // 💪 Arms (Biceps, Triceps, Forearms)
    { name: "Barbell Curl", sets: 4, reps: "8–10", weight: "", completed: false, notes: "Go heavy", videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo" },
    { name: "Hammer Curl", sets: 4, reps: "10–12", weight: "", completed: false, notes: "Focus on brachialis", videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4" },
    { name: "Preacher Curl (EZ Bar)", sets: 3, reps: "10–12", weight: "", completed: false, notes: "Controlled tempo", videoUrl: "https://www.youtube.com/watch?v=fIWP-FRFNU0" },
    { name: "Triceps Rope Pushdown", sets: 4, reps: "10–12", weight: "", completed: false, notes: "Full lockout", videoUrl: "https://www.youtube.com/watch?v=vB5OHsJ3EME" },
    { name: "Overhead Cable Extension", sets: 3, reps: "12–15", weight: "", completed: false, notes: "Elbows stable", videoUrl: "https://www.youtube.com/watch?v=d_J3bTeb4jw" },
    { name: "Close-Grip Bench Press", sets: 3, reps: "8–10", weight: "", completed: false, notes: "Power move", videoUrl: "https://www.youtube.com/watch?v=ivjGVUZdS4o" },
    { name: "Reverse Curl (EZ Bar)", sets: 3, reps: "15", weight: "", completed: false, notes: "Forearm emphasis", videoUrl: "https://www.youtube.com/watch?v=QZEqB6wUPxQ" },
    { name: "Wrist Curl / Reverse Wrist Curl", sets: 3, reps: "20 each", weight: "", completed: false, notes: "Burnout finisher", videoUrl: "https://www.youtube.com/watch?v=8WJU0YAHWJU" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "50 Cal minimum", weight: "", completed: false, notes: "Cooldown ride", videoUrl: "https://www.youtube.com/watch?v=Vf0rP3QZpE8" },
  ],

  "Saturday": [
    { name: "Rest Day", sets: "", reps: "", weight: "", completed: false, notes: "Active recovery or stretching", videoUrl: "" },
  ],

  "Sunday": [
    { name: "Rest Day", sets: "", reps: "", weight: "", completed: false, notes: "Full rest and recovery", videoUrl: "" },
  ],
};

export default workouts;
