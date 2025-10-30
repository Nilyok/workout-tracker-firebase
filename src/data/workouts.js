const workouts = {
  "Monday": [ // 💥 Chest 80% / Triceps 20%
    { name: "Barbell Bench Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" },
    { name: "Incline Dumbbell Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop" },
    { name: "Chest Fly (Machine or Dumbbell)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=eozdVDA78K0", imageUrl: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=500&h=500&fit=crop" },
    { name: "Cable Crossover (High to Low)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=taI4XduLpTk", imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop" },
    { name: "Dumbbell Pullover", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=2z8JmcrW-As", imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=500&fit=crop" },
    { name: "Close-Grip Bench Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=nEF0bv2FW94", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" },
    { name: "Overhead Dumbbell Extension", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=_gsUck-7M74", imageUrl: "https://images.unsplash.com/photo-1571019614287-69aea63fd9db?w=500&h=500&fit=crop" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop" },
  ],

  "Tuesday": [ // 💪 Back 80% / Biceps 20%
    { name: "Deadlift", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=op9kVnSso6Q", imageUrl: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=500&h=500&fit=crop" },
    { name: "Pull-Ups / Lat Pulldown", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc", imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=500&fit=crop" },
    { name: "Barbell Row", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=vT2GjY_Umpw", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop" },
    { name: "Seated Cable Row", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" },
    { name: "Single Arm Dumbbell Row", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=pYcpY20QaE8", imageUrl: "https://images.unsplash.com/photo-1571019614287-69aea63fd9db?w=500&h=500&fit=crop" },
    { name: "Dumbbell Shrugs", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=_t3lrPI6Ns4", imageUrl: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=500&h=500&fit=crop" },
    { name: "Barbell Bicep Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo", imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=500&fit=crop" },
    { name: "Incline Dumbbell Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=soxrZlIl35U", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop" },
  ],

  "Wednesday": [ // 🧱 Shoulders 80% / Traps 20%
    { name: "Seated Barbell Overhead Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" },
    { name: "Dumbbell Arnold Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=vj2w851ZHRM", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop" },
    { name: "Lateral Raises", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=kDqklk1ZESo", imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=500&fit=crop" },
    { name: "Front Raise (Plate or Dumbbell)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=-t7fuZ0KhDA", imageUrl: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=500&h=500&fit=crop" },
    { name: "Rear Delt Fly (Machine or Cable)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=eaRQF-7hhmo", imageUrl: "https://images.unsplash.com/photo-1571019614287-69aea63fd9db?w=500&h=500&fit=crop" },
    { name: "Upright Row (EZ Bar)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=um3VVzqunPU", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" },
    { name: "Dumbbell Shrugs", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=_t3lrPI6Ns4", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop" },
  ],

  "Thursday": [ // 🦵 Legs 100%
    { name: "Barbell Squat", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Dy28eq2PjcM", imageUrl: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=500&h=500&fit=crop" },
    { name: "Romanian Deadlift", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=xAL7lHwj30E", imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=500&fit=crop" },
    { name: "Walking Lunges", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=D7KaRcUTQeE", imageUrl: "https://images.unsplash.com/photo-1571019614287-69aea63fd9db?w=500&h=500&fit=crop" },
    { name: "Leg Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=IZxyjW7MPJQ", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" },
    { name: "Leg Curl Machine", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=1Tq3QdYUuHs", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop" },
    { name: "Leg Extension", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=YyvSfVjQeL0", imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=500&fit=crop" },
    { name: "Standing Calf Raises", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=YMmgqO8Jo-k", imageUrl: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=500&h=500&fit=crop" },
    { name: "Seated Calf Raises", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=gwLzBJYoWlI", imageUrl: "https://images.unsplash.com/photo-1571019614287-69aea63fd9db?w=500&h=500&fit=crop" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop" },
  ],

  "Friday": [ // 💪 Arms (Biceps, Triceps, Forearms)
    { name: "Barbell Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo", imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=500&fit=crop" },
    { name: "Hammer Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop" },
    { name: "Preacher Curl (EZ Bar)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=fIWP-FRFNU0", imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop" },
    { name: "Triceps Rope Pushdown", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=vB5OHsJ3EME", imageUrl: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=500&h=500&fit=crop" },
    { name: "Overhead Cable Extension", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=1u18yJELsh0", imageUrl: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=500&h=500&fit=crop" },
    { name: "Close-Grip Bench Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=FiQUzPtS90E", imageUrl: "https://images.unsplash.com/photo-1571019614287-69aea63fd9db?w=500&h=500&fit=crop" },
    { name: "Reverse Curl (EZ Bar)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=QZEqB6wUPxQ", imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=500&fit=crop" },
    { name: "Wrist Curl / Reverse Wrist Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=3VLTzIrnb5g", imageUrl: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?w=500&h=500&fit=crop" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop" },
  ],

  "Saturday": [
    { name: "Rest Day", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop" },
  ],

  "Sunday": [
    { name: "Rest Day", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop" },
  ],
};

export default workouts;