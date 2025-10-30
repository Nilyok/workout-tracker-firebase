const workouts = {
  "Monday": [ // 💥 Chest 80% / Triceps 20%
    { name: "Barbell Bench Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg", imageUrl: "https://s3assets.skimble.com/assets/2289478/image_full.jpg" },
    { name: "Incline Dumbbell Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8", imageUrl:   "https://static.strengthlevel.com/images/exercises/incline-dumbbell-bench-press/incline-dumbbell-bench-press-800.jpg" },
    { name: "Chest Fly (Machine or Dumbbell)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=eozdVDA78K0", imageUrl: "https://static.strengthlevel.com/images/illustrations/machine-chest-fly-1000x1000.jpg" },
    { name: "Cable Crossover (High to Low)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=taI4XduLpTk", imageUrl: "https://www.endomondo.com/wp-content/uploads/2024/01/Standing-Cable-Decline-Press.jpg " },
    { name: "Dumbbell Pullover", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=2z8JmcrW-As", imageUrl: "https://s3assets.skimble.com/assets/1434139/image_full.jpg" },
    { name: "Close-Grip Bench Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=nEF0bv2FW94", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/ez-bar-close-grip-bench-press.jpg" },
    { name: "Overhead Dumbbell Extension", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=_gsUck-7M74", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-seated-triceps-extension.jpg" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://www.space-cycle.com/wp-content/uploads/people-biking-spinning-class-modern-gym-exercising-stationary-bike-group-caucasian-people-athletes-training-exercise-bike_183219-4520-1.jpg" },
  ],

  "Tuesday": [ // 💪 Back 80% / Biceps 20%
    { name: "Deadlift", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=op9kVnSso6Q", imageUrl: "https://i0.wp.com/physicalculturestudy.com/wp-content/uploads/2016/01/romaniandeadlift1.jpg?resize=563%2C312&ssl=1" },
    { name: "Pull-Ups / Lat Pulldown", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc", imageUrl: "https://fitliferegime.com/wp-content/uploads/2023/09/Lats-Pulldown-Muscle-Worked.jpg" },
    { name: "Barbell Row", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=vT2GjY_Umpw", imageUrl: "https://cdn.shopifycdn.net/s/files/1/0449/8453/3153/files/Barbell-Row-exercise_480x480.jpg?v=1620453635" },
    { name: "Seated Cable Row", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/cable-low-seated-row.jpg" },
    { name: "Single Arm Dumbbell Row", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=pYcpY20QaE8", imageUrl: "https://eothon.info/photo/cac-bai-tap-the-hinh-giup-tang-cuong-co-lung-4.jpg" },
    { name: "Dumbbell Shrugs", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=_t3lrPI6Ns4", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-shrug.jpg" },
    { name: "Barbell Bicep Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/ez-barbell-curl.jpg" },
    { name: "Incline Dumbbell Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=soxrZlIl35U", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-incline-biceps-curl.jpg" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://www.space-cycle.com/wp-content/uploads/people-biking-spinning-class-modern-gym-exercising-stationary-bike-group-caucasian-people-athletes-training-exercise-bike_183219-4520-1.jpg" },
  ],

  "Wednesday": [ // 🧱 Shoulders 80% / Traps 20%
    { name: "Seated Barbell Overhead Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/barbell-seated-overhead-press.jpg " },
    { name: "Dumbbell Arnold Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=vj2w851ZHRM", imageUrl: "https://trainingstation.co.uk/cdn/shop/articles/arnold-press-muscles-used_2c0f97f9-a3c6-4b2a-a1a5-aa0f48d8e8ae_800x.webp?v=1752939283" },
    { name: "Lateral Raises", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=kDqklk1ZESo", imageUrl: "https://www.burnthefatinnercircle.com/members/images/1758c.jpg" },
    { name: "Front Raise (Plate or Dumbbell)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=-t7fuZ0KhDA", imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-front-raise/dumbbell-front-raise-800.jpg " },
    { name: "Rear Delt Fly (Machine or Cable)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=eaRQF-7hhmo", imageUrl: "https://anabolicaliens.com/cdn/shop/articles/5f9892a2b0625c92c74ee6b8_rear-delt-fly-machine-picture.png?v=1641754148 " },
    { name: "Upright Row (EZ Bar)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=um3VVzqunPU", imageUrl: "https://s3assets.skimble.com/assets/2617423/image_full.jpg" },
    { name: "Dumbbell Shrugs", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=_t3lrPI6Ns4", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-shrug.jpg" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://www.space-cycle.com/wp-content/uploads/people-biking-spinning-class-modern-gym-exercising-stationary-bike-group-caucasian-people-athletes-training-exercise-bike_183219-4520-1.jpg" },
  ],

  "Thursday": [ // 🦵 Legs 100%
    { name: "Barbell Squat", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Dy28eq2PjcM", imageUrl: "https://i.pinimg.com/736x/08/5a/bd/085abd5d06aef294c4cf93d42b5cb64b.jpg" },
    { name: "Romanian Deadlift", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=xAL7lHwj30E", imageUrl: "https://i0.wp.com/physicalculturestudy.com/wp-content/uploads/2016/01/romaniandeadlift1.jpg?resize=563%2C312&ssl=1" },
    { name: "Walking Lunges", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=D7KaRcUTQeE", imageUrl: "https://www.burnthefatinnercircle.com/members/images/1768b.jpg" },
    { name: "Leg Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=IZxyjW7MPJQ", imageUrl: "https://static.strengthlevel.com/images/exercises/sled-leg-press/sled-leg-press-800.jpg " },
    { name: "Leg Curl Machine", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=1Tq3QdYUuHs", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/lever-lying-leg-curl.jpg" },
    { name: "Leg Extension", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=YyvSfVjQeL0", imageUrl: "https://weighttraining.guide/wp-content/uploads/2016/05/lever-leg-extension-resized.png " },
    { name: "Standing Calf Raises", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=YMmgqO8Jo-k", imageUrl: "https://s3assets.skimble.com/assets/819768/image_iphone.jpg  " },
    { name: "Seated Calf Raises", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=gwLzBJYoWlI", imageUrl: "https://i.pinimg.com/736x/fe/35/b0/fe35b02495f23099093b08d64e482026.jpg    " },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://www.space-cycle.com/wp-content/uploads/people-biking-spinning-class-modern-gym-exercising-stationary-bike-group-caucasian-people-athletes-training-exercise-bike_183219-4520-1.jpg" },
  ],

  "Friday": [ // 💪 Arms (Biceps, Triceps, Forearms)
    { name: "Barbell Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/ez-barbell-curl.jpg" },
    { name: "Hammer Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-seated-hammer-curl.jpg" },
    { name: "Preacher Curl (EZ Bar)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=fIWP-FRFNU0", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/ez-barbell-preacher-curl.jpg   " },
    { name: "Triceps Rope Pushdown", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=vB5OHsJ3EME", imageUrl: "https://www.hevyapp.com/wp-content/uploads/02001101-Cable-Pushdown-with-rope-attachment_Upper-Arms_small.jpg" },
    { name: "Overhead Cable Extension", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=1u18yJELsh0", imageUrl: "https://static.strengthlevel.com/images/exercises/cable-overhead-tricep-extension/cable-overhead-tricep-extension-800.jpg  " },
    { name: "Close-Grip Bench Press", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=FiQUzPtS90E", imageUrl: "https://liftmanual.com/wp-content/uploads/2023/04/ez-bar-close-grip-bench-press.jpg" },  
    { name: "Reverse Curl (EZ Bar)", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=QZEqB6wUPxQ", imageUrl: "https://weighttraining.guide/wp-content/uploads/2017/09/EZ-bar-reverse-curl-resized.png" },
    { name: "Wrist Curl / Reverse Wrist Curl", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=3VLTzIrnb5g", imageUrl: "https://static.strengthlevel.com/images/exercises/dumbbell-reverse-wrist-curl/dumbbell-reverse-wrist-curl-800.jpg" },
    { name: "Cardio – Bike 🚴‍♂️", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "https://www.youtube.com/watch?v=Wy7tQnprDHw", imageUrl: "https://www.space-cycle.com/wp-content/uploads/people-biking-spinning-class-modern-gym-exercising-stationary-bike-group-caucasian-people-athletes-training-exercise-bike_183219-4520-1.jpg" },
  ],

  "Saturday": [
    { name: "Rest Day", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "", imageUrl: "https://placehold.co/400x224/000000/FFFFFF?text=Rest+Day+%F0%9F%9B%8A%EF%B8%8F" },
  ],

  "Sunday": [
    { name: "Rest Day", sets: "", reps: "", weight: "", completed: false, notes: "", videoUrl: "", imageUrl: "https://placehold.co/400x224/000000/FFFFFF?text=Rest+Day+%F0%9F%9B%8A%EF%B8%8F" },
  ],
};

export default workouts;
