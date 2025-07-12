// Comprehensive Exercise Database with Detailed Information
const exerciseDatabase = {
    'Bench Press': {
        category: 'chest',
        difficulty: 'Intermediate',
        equipment: 'Barbell, Bench',
        muscles: ['Pectoralis Major', 'Triceps', 'Anterior Deltoids', 'Serratus Anterior'],
        primaryMuscles: ['Pectoralis Major (Clavicular Head)', 'Pectoralis Major (Sternal Head)'],
        secondaryMuscles: ['Triceps Brachii', 'Anterior Deltoids', 'Serratus Anterior'],
        instructions: [
            'Lie on a flat bench with your feet planted firmly on the ground',
            'Position your eyes directly under the barbell',
            'Grip the barbell slightly wider than shoulder width (about 1.5x shoulder width)',
            'Retract your shoulder blades and arch your upper back slightly',
            'Unrack the bar with straight arms and bring it to starting position',
            'Lower the bar to your mid-chest with control (2-3 seconds)',
            'Touch the bar lightly to your chest without bouncing',
            'Press the bar back up explosively while maintaining form',
            'Lock out your elbows at the top of the movement',
            'Keep your core tight and maintain the arch throughout'
        ],
        tips: [
            'Keep your shoulder blades retracted throughout the entire movement',
            'Don\'t bounce the bar off your chest - control the descent',
            'Breathe out as you press up, inhale as you lower',
            'Start with lighter weights to perfect form before progressing',
            'Keep your feet flat on the ground and drive through them',
            'Maintain a slight arch in your lower back',
            'Don\'t let your elbows flare out too much - keep them at 45 degrees'
        ],
        commonMistakes: [
            'Bouncing the bar off the chest',
            'Flaring elbows too wide',
            'Lifting hips off the bench',
            'Not retracting shoulder blades',
            'Rushing the movement'
        ],
        variations: [
            'Incline Bench Press (targets upper chest)',
            'Decline Bench Press (targets lower chest)',
            'Dumbbell Bench Press (greater range of motion)',
            'Close-Grip Bench Press (more tricep focus)',
            'Pause Bench Press (pause at chest for strength)'
        ],
        sets: '3-5 sets',
        reps: '6-12 reps',
        rest: '2-4 minutes between sets',
        tempo: '2-3 second descent, explosive ascent',
        progression: 'Start with 50-60% of 1RM, gradually increase weight',
        safetyNotes: 'Always use a spotter for heavy weights, ensure proper form before increasing weight'
    },
    'Push-ups': {
        category: 'chest',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        muscles: ['Pectoralis Major', 'Triceps', 'Anterior Deltoids', 'Core', 'Serratus Anterior'],
        primaryMuscles: ['Pectoralis Major', 'Triceps Brachii'],
        secondaryMuscles: ['Anterior Deltoids', 'Serratus Anterior', 'Rectus Abdominis'],
        instructions: [
            'Start in a high plank position with hands slightly wider than shoulders',
            'Position your hands at chest level, fingers pointing forward',
            'Keep your body in a straight line from head to heels',
            'Engage your core and glutes to maintain stability',
            'Lower your body by bending your elbows (keep them close to body)',
            'Descend until your chest nearly touches the ground',
            'Keep your neck neutral - don\'t look up or down',
            'Push through your palms to return to starting position',
            'Fully extend your arms at the top without locking elbows',
            'Maintain the straight body position throughout'
        ],
        tips: [
            'Keep your core engaged throughout the entire movement',
            'Don\'t let your hips sag or lift too high',
            'Breathe steadily - inhale on the way down, exhale on the way up',
            'Keep your elbows at about 45 degrees to your body',
            'Modify on knees if needed for beginners',
            'Focus on controlled movement rather than speed',
            'Keep your head in line with your spine'
        ],
        commonMistakes: [
            'Sagging hips',
            'Flaring elbows too wide',
            'Not going low enough',
            'Rushing the movement',
            'Looking up or down'
        ],
        variations: [
            'Knee Push-ups (easier variation)',
            'Diamond Push-ups (tricep focus)',
            'Wide Push-ups (chest focus)',
            'Decline Push-ups (increased difficulty)',
            'Pike Push-ups (shoulder focus)',
            'One-Arm Push-ups (advanced)'
        ],
        sets: '3-4 sets',
        reps: '10-25 reps',
        rest: '1-2 minutes between sets',
        tempo: '2-3 second descent, 1-2 second ascent',
        progression: 'Start with knee push-ups, progress to full push-ups, then add variations',
        safetyNotes: 'Stop if you feel pain in shoulders or wrists, modify as needed'
    },
    'Pull-ups': {
        category: 'back',
        difficulty: 'Intermediate',
        equipment: 'Pull-up Bar',
        muscles: ['Latissimus Dorsi', 'Biceps', 'Rhomboids', 'Trapezius', 'Teres Major'],
        primaryMuscles: ['Latissimus Dorsi', 'Biceps Brachii'],
        secondaryMuscles: ['Rhomboids', 'Trapezius', 'Teres Major', 'Infraspinatus'],
        instructions: [
            'Grab the pull-up bar with an overhand grip (palms facing away)',
            'Position your hands slightly wider than shoulder width',
            'Hang with arms fully extended and shoulders engaged',
            'Engage your core and keep your body straight',
            'Pull your body up by engaging your lats and pulling your elbows down',
            'Continue pulling until your chin is over the bar',
            'Keep your chest up and shoulders back throughout the movement',
            'Lower yourself back down with control (2-3 seconds)',
            'Fully extend your arms at the bottom without losing tension',
            'Maintain control throughout the entire range of motion'
        ],
        tips: [
            'Engage your lats to initiate the movement - think "pull elbows to pockets"',
            'Don\'t swing or use momentum - control the movement',
            'Keep your core tight to prevent swinging',
            'Start with assisted pull-ups if you can\'t do full pull-ups',
            'Focus on pulling with your back, not just your arms',
            'Keep your chest up and shoulders back',
            'Don\'t rush the negative portion'
        ],
        commonMistakes: [
            'Using momentum/swinging',
            'Not going high enough (chin over bar)',
            'Not fully extending at the bottom',
            'Pulling with arms instead of back',
            'Rushing the movement'
        ],
        variations: [
            'Assisted Pull-ups (with resistance band)',
            'Negative Pull-ups (jump up, slow descent)',
            'Wide-Grip Pull-ups (more lat focus)',
            'Close-Grip Pull-ups (more bicep focus)',
            'Neutral-Grip Pull-ups (easier on shoulders)',
            'Weighted Pull-ups (add weight for progression)'
        ],
        sets: '3-5 sets',
        reps: '5-15 reps',
        rest: '2-3 minutes between sets',
        tempo: '1-2 second pull, 2-3 second descent',
        progression: 'Start with assisted pull-ups, progress to full pull-ups, then add weight',
        safetyNotes: 'Ensure proper shoulder mobility, stop if you feel shoulder pain'
    },
    'Deadlift': {
        category: 'back',
        difficulty: 'Intermediate',
        equipment: 'Barbell, Weight Plates',
        muscles: ['Erector Spinae', 'Glutes', 'Hamstrings', 'Quadriceps', 'Trapezius', 'Rhomboids'],
        primaryMuscles: ['Erector Spinae', 'Gluteus Maximus', 'Hamstrings'],
        secondaryMuscles: ['Quadriceps', 'Trapezius', 'Rhomboids', 'Core'],
        instructions: [
            'Stand with feet hip-width apart, bar over mid-foot',
            'Bend at hips and knees to grip the bar',
            'Grip the bar with hands shoulder-width apart',
            'Keep your chest up and back straight',
            'Take a deep breath and brace your core',
            'Drive through your heels to stand up',
            'Keep the bar close to your body throughout the movement',
            'Stand tall at the top with shoulders back',
            'Reverse the movement by hinging at hips first',
            'Lower the bar back to the ground with control'
        ],
        tips: [
            'Keep the bar close to your body throughout the movement',
            'Brace your core before lifting - imagine someone is about to punch you',
            'Drive through your heels, not your toes',
            'Keep your chest up and back straight',
            'Don\'t round your back at any point',
            'Start with lighter weights to perfect form',
            'Focus on hip hinge movement'
        ],
        commonMistakes: [
            'Rounding the back',
            'Lifting with the back instead of legs',
            'Bar too far from body',
            'Not bracing core',
            'Rushing the movement'
        ],
        variations: [
            'Romanian Deadlift (more hamstring focus)',
            'Sumo Deadlift (wider stance, more quad focus)',
            'Trap Bar Deadlift (easier on back)',
            'Single-Leg Deadlift (unilateral)',
            'Dumbbell Deadlift (easier to learn)'
        ],
        sets: '3-5 sets',
        reps: '5-8 reps',
        rest: '3-5 minutes between sets',
        tempo: 'Controlled descent, explosive ascent',
        progression: 'Start with bodyweight hip hinges, progress to light deadlifts',
        safetyNotes: 'Critical to maintain proper form, consider working with a coach initially'
    },
    'Squats': {
        category: 'legs',
        difficulty: 'Beginner',
        equipment: 'Bodyweight/Barbell',
        muscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core', 'Calves'],
        primaryMuscles: ['Quadriceps', 'Gluteus Maximus'],
        secondaryMuscles: ['Hamstrings', 'Core', 'Calves', 'Adductors'],
        instructions: [
            'Stand with feet shoulder-width apart, toes slightly out',
            'Keep your chest up and core engaged',
            'Initiate the movement by pushing your hips back',
            'Bend your knees and lower your body',
            'Keep your knees in line with your toes',
            'Lower until your thighs are parallel to the ground',
            'Keep your weight in your heels',
            'Drive through your heels to stand back up',
            'Squeeze your glutes at the top',
            'Maintain proper form throughout'
        ],
        tips: [
            'Keep your weight in your heels, not your toes',
            'Don\'t let your knees cave inward',
            'Keep your chest up throughout the movement',
            'Breathe steadily - inhale on the way down, exhale on the way up',
            'Start with bodyweight squats to perfect form',
            'Focus on hip hinge movement',
            'Keep your core engaged'
        ],
        commonMistakes: [
            'Knees caving inward',
            'Weight on toes instead of heels',
            'Not going deep enough',
            'Rounding the back',
            'Rushing the movement'
        ],
        variations: [
            'Bodyweight Squats (beginner)',
            'Goblet Squats (with dumbbell)',
            'Back Squats (barbell on back)',
            'Front Squats (barbell on front)',
            'Split Squats (unilateral)',
            'Jump Squats (plyometric)'
        ],
        sets: '3-5 sets',
        reps: '10-15 reps',
        rest: '2-3 minutes between sets',
        tempo: '2-3 second descent, explosive ascent',
        progression: 'Start with bodyweight, progress to weighted variations',
        safetyNotes: 'Ensure proper knee alignment, stop if you feel knee pain'
    },
    'Lunges': {
        category: 'legs',
        difficulty: 'Beginner',
        equipment: 'Bodyweight/Dumbbells',
        muscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core', 'Calves'],
        primaryMuscles: ['Quadriceps', 'Gluteus Maximus'],
        secondaryMuscles: ['Hamstrings', 'Core', 'Calves', 'Adductors'],
        instructions: [
            'Stand with feet hip-width apart',
            'Step forward with one leg, landing on your heel',
            'Lower your body until both knees are bent at 90 degrees',
            'Keep your front knee behind your toes',
            'Keep your back knee hovering just above the ground',
            'Drive through your front heel to return to starting position',
            'Alternate legs or complete all reps on one side',
            'Keep your torso upright throughout',
            'Engage your core for stability',
            'Maintain control throughout the movement'
        ],
        tips: [
            'Keep your front knee behind your toes',
            'Don\'t let your back knee touch the ground',
            'Keep your torso upright',
            'Drive through your front heel',
            'Engage your core for stability',
            'Start with bodyweight lunges',
            'Focus on balance and control'
        ],
        commonMistakes: [
            'Front knee going past toes',
            'Back knee touching ground',
            'Leaning forward too much',
            'Not going deep enough',
            'Losing balance'
        ],
        variations: [
            'Walking Lunges',
            'Reverse Lunges',
            'Side Lunges',
            'Curtsy Lunges',
            'Jumping Lunges',
            'Weighted Lunges (with dumbbells)'
        ],
        sets: '3-4 sets',
        reps: '10-15 reps per leg',
        rest: '1-2 minutes between sets',
        tempo: '2-3 second descent, 1-2 second ascent',
        progression: 'Start with bodyweight, add weight for progression',
        safetyNotes: 'Ensure proper knee alignment, modify if you have knee issues'
    },
    'Overhead Press': {
        category: 'shoulders',
        difficulty: 'Intermediate',
        equipment: 'Barbell/Dumbbells',
        muscles: ['Deltoids', 'Triceps', 'Trapezius', 'Core'],
        primaryMuscles: ['Anterior Deltoids', 'Lateral Deltoids'],
        secondaryMuscles: ['Triceps Brachii', 'Trapezius', 'Core'],
        instructions: [
            'Stand with feet shoulder-width apart',
            'Hold the barbell at shoulder level with palms facing forward',
            'Keep your core engaged and chest up',
            'Press the bar overhead while keeping your core tight',
            'Keep the bar close to your face as you press',
            'Lock out your arms at the top',
            'Lower the bar back to starting position with control',
            'Keep your body stable throughout the movement',
            'Don\'t lean back excessively',
            'Breathe steadily throughout'
        ],
        tips: [
            'Don\'t lean back excessively - keep your core engaged',
            'Keep the bar close to your face as you press',
            'Breathe out as you press up',
            'Start with lighter weights to perfect form',
            'Keep your core tight throughout',
            'Focus on pressing with your shoulders, not just arms',
            'Keep your feet planted firmly'
        ],
        commonMistakes: [
            'Leaning back too much',
            'Not keeping core engaged',
            'Bar too far from face',
            'Rushing the movement',
            'Not going through full range of motion'
        ],
        variations: [
            'Dumbbell Shoulder Press',
            'Seated Shoulder Press',
            'Push Press (with leg drive)',
            'Arnold Press (rotating dumbbells)',
            'Military Press (strict form)'
        ],
        sets: '3-4 sets',
        reps: '8-12 reps',
        rest: '2-3 minutes between sets',
        tempo: '2-3 second descent, explosive ascent',
        progression: 'Start with light weights, focus on form before increasing',
        safetyNotes: 'Ensure proper shoulder mobility, stop if you feel shoulder pain'
    },
    'Lateral Raises': {
        category: 'shoulders',
        difficulty: 'Beginner',
        equipment: 'Dumbbells',
        muscles: ['Lateral Deltoids', 'Anterior Deltoids', 'Trapezius'],
        primaryMuscles: ['Lateral Deltoids'],
        secondaryMuscles: ['Anterior Deltoids', 'Trapezius'],
        instructions: [
            'Stand with feet shoulder-width apart',
            'Hold dumbbells at your sides with palms facing your body',
            'Keep your core engaged and chest up',
            'Raise the dumbbells out to the sides',
            'Keep your arms slightly bent throughout the movement',
            'Raise until your arms are parallel to the ground',
            'Keep your thumbs pointing down',
            'Lower the dumbbells back to starting position with control',
            'Don\'t swing the weights - control the movement',
            'Keep your body stable throughout'
        ],
        tips: [
            'Don\'t swing the weights - use controlled movement',
            'Keep your arms slightly bent throughout',
            'Raise to shoulder level, not higher',
            'Keep your thumbs pointing down',
            'Focus on using your shoulders, not momentum',
            'Start with lighter weights',
            'Keep your core engaged'
        ],
        commonMistakes: [
            'Swinging the weights',
            'Raising arms too high',
            'Using momentum instead of muscle',
            'Not controlling the descent',
            'Rounding the back'
        ],
        variations: [
            'Seated Lateral Raises',
            'Cable Lateral Raises',
            'Bent-Over Lateral Raises (rear delts)',
            'Single-Arm Lateral Raises',
            'Plate Lateral Raises'
        ],
        sets: '3-4 sets',
        reps: '12-15 reps',
        rest: '1-2 minutes between sets',
        tempo: '2-3 second raise, 2-3 second descent',
        progression: 'Start with light weights, focus on form and mind-muscle connection',
        safetyNotes: 'Use light weights initially, focus on proper form over weight'
    },
    'Bicep Curls': {
        category: 'arms',
        difficulty: 'Beginner',
        equipment: 'Dumbbells/Barbell',
        muscles: ['Biceps Brachii', 'Brachialis', 'Brachioradialis'],
        primaryMuscles: ['Biceps Brachii'],
        secondaryMuscles: ['Brachialis', 'Brachioradialis', 'Forearms'],
        instructions: [
            'Stand with feet shoulder-width apart',
            'Hold dumbbells at your sides with palms facing forward',
            'Keep your upper arms stationary throughout the movement',
            'Curl the weights up toward your shoulders',
            'Keep your elbows close to your body',
            'Squeeze your biceps at the top of the movement',
            'Lower the weights back down with control',
            'Don\'t swing the weights - use controlled movement',
            'Keep your core engaged for stability',
            'Repeat the movement'
        ],
        tips: [
            'Don\'t swing the weights - keep your upper arms stationary',
            'Keep your elbows close to your body',
            'Squeeze your biceps at the top',
            'Control the negative portion of the movement',
            'Focus on mind-muscle connection',
            'Start with lighter weights',
            'Keep your core engaged'
        ],
        commonMistakes: [
            'Swinging the weights',
            'Moving upper arms',
            'Not controlling the descent',
            'Using too much weight',
            'Not squeezing at the top'
        ],
        variations: [
            'Hammer Curls (palms facing each other)',
            'Preacher Curls (isolated movement)',
            'Concentration Curls (single arm)',
            'Cable Curls',
            'Barbell Curls',
            'Incline Dumbbell Curls'
        ],
        sets: '3-4 sets',
        reps: '10-15 reps',
        rest: '1-2 minutes between sets',
        tempo: '2-3 second curl, 2-3 second descent',
        progression: 'Start with light weights, focus on form and mind-muscle connection',
        safetyNotes: 'Use controlled movement, avoid swinging or using momentum'
    },
    'Tricep Dips': {
        category: 'arms',
        difficulty: 'Intermediate',
        equipment: 'Dip Bars/Parallel Bars',
        muscles: ['Triceps Brachii', 'Anterior Deltoids', 'Pectoralis Major'],
        primaryMuscles: ['Triceps Brachii'],
        secondaryMuscles: ['Anterior Deltoids', 'Pectoralis Major'],
        instructions: [
            'Grip the dip bars with palms facing down',
            'Lift yourself up so your arms are fully extended',
            'Keep your body straight and core engaged',
            'Lower your body by bending your elbows',
            'Keep your elbows close to your body',
            'Lower until your upper arms are parallel to the ground',
            'Push through your palms to return to starting position',
            'Fully extend your arms at the top',
            'Keep your body straight throughout',
            'Control the movement throughout'
        ],
        tips: [
            'Keep your elbows close to your body',
            'Don\'t let your body swing',
            'Keep your core engaged',
            'Lower yourself with control',
            'Focus on using your triceps',
            'Start with assisted dips if needed',
            'Keep your body straight'
        ],
        commonMistakes: [
            'Swinging the body',
            'Flaring elbows out',
            'Not going low enough',
            'Rushing the movement',
            'Not fully extending at the top'
        ],
        variations: [
            'Assisted Dips (with resistance band)',
            'Bench Dips (easier variation)',
            'Weighted Dips (add weight for progression)',
            'Ring Dips (unstable surface)',
            'Single-Arm Dips (advanced)'
        ],
        sets: '3-4 sets',
        reps: '8-15 reps',
        rest: '2-3 minutes between sets',
        tempo: '2-3 second descent, explosive ascent',
        progression: 'Start with assisted dips, progress to full dips, then add weight',
        safetyNotes: 'Ensure proper shoulder stability, stop if you feel shoulder pain'
    },
    'Planks': {
        category: 'core',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        muscles: ['Rectus Abdominis', 'Transverse Abdominis', 'Obliques', 'Erector Spinae'],
        primaryMuscles: ['Transverse Abdominis', 'Rectus Abdominis'],
        secondaryMuscles: ['Obliques', 'Erector Spinae', 'Shoulders'],
        instructions: [
            'Start in a forearm plank position',
            'Place your forearms on the ground, elbows under shoulders',
            'Extend your legs behind you, feet together',
            'Keep your body in a straight line from head to heels',
            'Engage your core muscles (draw belly button toward spine)',
            'Keep your neck neutral - don\'t look up or down',
            'Hold the position while maintaining proper form',
            'Breathe steadily throughout the hold',
            'Keep your glutes engaged',
            'Don\'t let your hips sag or lift too high'
        ],
        tips: [
            'Don\'t let your hips sag - keep your body straight',
            'Keep your neck neutral - look at the ground',
            'Engage your glutes to help maintain position',
            'Breathe steadily throughout',
            'Start with shorter holds and progress',
            'Focus on quality over quantity',
            'Keep your core engaged throughout'
        ],
        commonMistakes: [
            'Sagging hips',
            'Lifting hips too high',
            'Looking up or down',
            'Not engaging core',
            'Holding breath'
        ],
        variations: [
            'High Plank (on hands instead of forearms)',
            'Side Plank (oblique focus)',
            'Plank with Leg Lift',
            'Plank with Arm Reach',
            'Mountain Climber Planks',
            'Plank Jacks'
        ],
        sets: '3-4 sets',
        reps: '30-60 seconds hold',
        rest: '1 minute between sets',
        tempo: 'Hold position with steady breathing',
        progression: 'Start with 10-20 seconds, gradually increase hold time',
        safetyNotes: 'Stop if you feel back pain, focus on proper form over duration'
    },
    'Crunches': {
        category: 'core',
        difficulty: 'Beginner',
        equipment: 'Bodyweight',
        muscles: ['Rectus Abdominis', 'Obliques'],
        primaryMuscles: ['Rectus Abdominis'],
        secondaryMuscles: ['Obliques'],
        instructions: [
            'Lie on your back with knees bent and feet flat on the ground',
            'Place your hands behind your head or cross them on your chest',
            'Engage your core muscles',
            'Lift your shoulders off the ground',
            'Curl your upper body toward your knees',
            'Keep your lower back pressed into the ground',
            'Exhale as you crunch up',
            'Lower back down with control',
            'Don\'t pull on your neck with your hands',
            'Focus on using your abs, not momentum'
        ],
        tips: [
            'Don\'t pull on your neck with your hands',
            'Keep your lower back pressed into the ground',
            'Focus on using your abs, not momentum',
            'Exhale as you crunch up',
            'Control the movement in both directions',
            'Start with fewer reps and perfect form',
            'Keep your chin toward your chest'
        ],
        commonMistakes: [
            'Pulling on neck with hands',
            'Lifting lower back off ground',
            'Using momentum instead of abs',
            'Not controlling the descent',
            'Going too fast'
        ],
        variations: [
            'Bicycle Crunches',
            'Reverse Crunches',
            'Oblique Crunches',
            'Cable Crunches',
            'Decline Crunches',
            'Weighted Crunches'
        ],
        sets: '3-4 sets',
        reps: '15-25 reps',
        rest: '1 minute between sets',
        tempo: '2-3 second crunch, 2-3 second descent',
        progression: 'Start with basic crunches, add variations for progression',
        safetyNotes: 'Keep lower back pressed to ground, don\'t strain your neck'
    },
    'Russian Twists': {
        category: 'core',
        difficulty: 'Intermediate',
        equipment: 'Bodyweight/Weight',
        muscles: ['Obliques', 'Rectus Abdominis', 'Transverse Abdominis'],
        primaryMuscles: ['Obliques'],
        secondaryMuscles: ['Rectus Abdominis', 'Transverse Abdominis'],
        instructions: [
            'Sit on the ground with knees bent and feet flat',
            'Lean back slightly and lift your feet off the ground',
            'Hold a weight (dumbbell, medicine ball, or no weight) in front of you',
            'Engage your core to maintain balance',
            'Rotate your torso to one side, bringing the weight toward the ground',
            'Keep your feet off the ground throughout',
            'Rotate to the other side',
            'Continue alternating sides',
            'Keep your core engaged throughout',
            'Control the movement throughout'
        ],
        tips: [
            'Keep your feet off the ground throughout',
            'Engage your core to maintain balance',
            'Control the movement - don\'t swing',
            'Start without weight to perfect form',
            'Focus on rotating from your core, not just arms',
            'Keep your chest up',
            'Breathe steadily throughout'
        ],
        commonMistakes: [
            'Putting feet down',
            'Swinging instead of controlled movement',
            'Not engaging core',
            'Using too much weight initially',
            'Rushing the movement'
        ],
        variations: [
            'Weighted Russian Twists',
            'Medicine Ball Russian Twists',
            'Cable Russian Twists',
            'Seated Russian Twists (feet on ground)',
            'Standing Russian Twists'
        ],
        sets: '3-4 sets',
        reps: '20-30 reps (10-15 each side)',
        rest: '1 minute between sets',
        tempo: 'Controlled rotation to each side',
        progression: 'Start without weight, add weight for progression',
        safetyNotes: 'Keep core engaged, stop if you feel back pain'
    }
};

// AI Gym Partner - Workout Recommendation System
class GymPartner {
    constructor() {
        this.userProfile = {
            experience: 'beginner',
            goals: ['strength', 'muscle'],
            availableDays: 3,
            equipment: 'basic',
            injuries: [],
            preferences: []
        };
        
        this.workoutHistory = [];
        this.currentWeek = 1;
        this.progress = {
            entries: [],
            exercises: {}
        };
    }

    // Generate personalized workout recommendations
    generateWorkoutPlan() {
        const plans = {
            beginner: {
                3: this.getBeginner3DayPlan(),
                4: this.getBeginner4DayPlan(),
                5: this.getBeginner5DayPlan()
            },
            intermediate: {
                4: this.getIntermediate4DayPlan(),
                5: this.getIntermediate5DayPlan(),
                6: this.getIntermediate6DayPlan()
            },
            advanced: {
                5: this.getAdvanced5DayPlan(),
                6: this.getAdvanced6DayPlan(),
                7: this.getAdvanced7DayPlan()
            }
        };

        return plans[this.userProfile.experience][this.userProfile.availableDays];
    }

    // Beginner 3-Day Full Body Split
    getBeginner3DayPlan() {
        return {
            name: "Beginner Full Body",
            description: "Perfect for newcomers to strength training",
            duration: "8-12 weeks",
            schedule: {
                "Day 1": {
                    name: "Push Day",
                    focus: "Chest, Shoulders, Triceps",
                    exercises: [
                        {
                            name: "Push-ups",
                            sets: 3,
                            reps: "8-12",
                            rest: "90s",
                            notes: "Start with knee push-ups if needed"
                        },
                        {
                            name: "Dumbbell Shoulder Press",
                            sets: 3,
                            reps: "10-12",
                            rest: "90s",
                            notes: "Focus on form over weight"
                        },
                        {
                            name: "Tricep Dips",
                            sets: 3,
                            reps: "8-12",
                            rest: "60s",
                            notes: "Use assistance if needed"
                        },
                        {
                            name: "Planks",
                            sets: 3,
                            reps: "30s",
                            rest: "60s",
                            notes: "Hold position with good form"
                        }
                    ],
                    tips: [
                        "Focus on proper form over weight",
                        "Breathe steadily throughout exercises",
                        "Rest between sets as indicated",
                        "Don't rush - quality over quantity"
                    ]
                },
                "Day 2": {
                    name: "Pull Day",
                    focus: "Back, Biceps, Core",
                    exercises: [
                        {
                            name: "Assisted Pull-ups",
                            sets: 3,
                            reps: "5-8",
                            rest: "120s",
                            notes: "Use resistance band assistance"
                        },
                        {
                            name: "Dumbbell Rows",
                            sets: 3,
                            reps: "10-12 each arm",
                            rest: "90s",
                            notes: "Keep back straight"
                        },
                        {
                            name: "Bicep Curls",
                            sets: 3,
                            reps: "12-15",
                            rest: "60s",
                            notes: "Control the movement"
                        },
                        {
                            name: "Crunches",
                            sets: 3,
                            reps: "15-20",
                            rest: "60s",
                            notes: "Engage core muscles"
                        }
                    ],
                    tips: [
                        "Pull with your back, not just arms",
                        "Keep your core engaged",
                        "Maintain good posture",
                        "Focus on mind-muscle connection"
                    ]
                },
                "Day 3": {
                    name: "Legs Day",
                    focus: "Legs, Glutes, Core",
                    exercises: [
                        {
                            name: "Bodyweight Squats",
                            sets: 3,
                            reps: "15-20",
                            rest: "90s",
                            notes: "Go as deep as comfortable"
                        },
                        {
                            name: "Lunges",
                            sets: 3,
                            reps: "10-12 each leg",
                            rest: "90s",
                            notes: "Keep front knee behind toes"
                        },
                        {
                            name: "Calf Raises",
                            sets: 3,
                            reps: "20-25",
                            rest: "60s",
                            notes: "Full range of motion"
                        },
                        {
                            name: "Russian Twists",
                            sets: 3,
                            reps: "20 (10 each side)",
                            rest: "60s",
                            notes: "Keep feet off ground"
                        }
                    ],
                    tips: [
                        "Drive through your heels",
                        "Keep your chest up",
                        "Don't let knees cave inward",
                        "Breathe steadily throughout"
                    ]
                }
            },
            progression: {
                week1to4: "Focus on form and building consistency",
                week5to8: "Increase weight by 2.5-5 lbs when possible",
                week9to12: "Add one more set to each exercise"
            }
        };
    }

    // Beginner 4-Day Upper/Lower Split
    getBeginner4DayPlan() {
        return {
            name: "Beginner Upper/Lower Split",
            description: "Balanced upper and lower body focus",
            duration: "8-12 weeks",
            schedule: {
                "Day 1": {
                    name: "Upper Body A",
                    focus: "Chest, Shoulders, Triceps",
                    exercises: [
                        { name: "Bench Press", sets: 3, reps: "8-12", rest: "120s" },
                        { name: "Push-ups", sets: 3, reps: "8-12", rest: "90s" },
                        { name: "Overhead Press", sets: 3, reps: "8-12", rest: "90s" },
                        { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Tricep Dips", sets: 3, reps: "8-12", rest: "60s" }
                    ]
                },
                "Day 2": {
                    name: "Lower Body A",
                    focus: "Quads, Glutes, Hamstrings",
                    exercises: [
                        { name: "Squats", sets: 3, reps: "10-15", rest: "120s" },
                        { name: "Lunges", sets: 3, reps: "10-12 each", rest: "90s" },
                        { name: "Romanian Deadlift", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Calf Raises", sets: 3, reps: "20-25", rest: "60s" }
                    ]
                },
                "Day 3": {
                    name: "Upper Body B",
                    focus: "Back, Biceps, Core",
                    exercises: [
                        { name: "Pull-ups", sets: 3, reps: "5-10", rest: "120s" },
                        { name: "Bent-over Rows", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Bicep Curls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Planks", sets: 3, reps: "45s", rest: "60s" }
                    ]
                },
                "Day 4": {
                    name: "Lower Body B",
                    focus: "Legs, Core, Cardio",
                    exercises: [
                        { name: "Deadlift", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Leg Press", sets: 3, reps: "12-15", rest: "90s" },
                        { name: "Step-ups", sets: 3, reps: "10-12 each", rest: "90s" },
                        { name: "Russian Twists", sets: 3, reps: "20", rest: "60s" }
                    ]
                }
            }
        };
    }

    // Beginner 5-Day Push/Pull/Legs
    getBeginner5DayPlan() {
        return {
            name: "Beginner Push/Pull/Legs",
            description: "Advanced beginner split routine",
            duration: "8-12 weeks",
            schedule: {
                "Day 1": {
                    name: "Push Day",
                    focus: "Chest, Shoulders, Triceps",
                    exercises: [
                        { name: "Bench Press", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Overhead Press", sets: 3, reps: "8-12", rest: "90s" },
                        { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 2": {
                    name: "Pull Day",
                    focus: "Back, Biceps, Rear Delts",
                    exercises: [
                        { name: "Pull-ups", sets: 4, reps: "6-10", rest: "120s" },
                        { name: "Bent-over Rows", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Bicep Curls", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 3": {
                    name: "Legs Day",
                    focus: "Quads, Hamstrings, Glutes",
                    exercises: [
                        { name: "Squats", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Romanian Deadlift", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Leg Press", sets: 3, reps: "12-15", rest: "90s" },
                        { name: "Lunges", sets: 3, reps: "10-12 each", rest: "90s" },
                        { name: "Calf Raises", sets: 4, reps: "20-25", rest: "60s" }
                    ]
                },
                "Day 4": {
                    name: "Push Day 2",
                    focus: "Shoulders, Triceps, Chest",
                    exercises: [
                        { name: "Overhead Press", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Dumbbell Flyes", sets: 3, reps: "12-15", rest: "90s" },
                        { name: "Arnold Press", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Tricep Dips", sets: 3, reps: "8-12", rest: "60s" },
                        { name: "Push-ups", sets: 3, reps: "10-15", rest: "60s" }
                    ]
                },
                "Day 5": {
                    name: "Pull Day 2",
                    focus: "Back, Biceps, Core",
                    exercises: [
                        { name: "Deadlift", sets: 4, reps: "6-8", rest: "120s" },
                        { name: "T-Bar Rows", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Cable Rows", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Planks", sets: 3, reps: "60s", rest: "60s" }
                    ]
                }
            }
        };
    }

    // Intermediate 4-Day Split
    getIntermediate4DayPlan() {
        return {
            name: "Intermediate 4-Day Split",
            description: "Balanced strength and hypertrophy focus",
            duration: "12-16 weeks",
            schedule: {
                "Day 1": {
                    name: "Chest & Triceps",
                    focus: "Upper body push",
                    exercises: [
                        { name: "Bench Press", sets: 4, reps: "6-8", rest: "180s" },
                        { name: "Incline Bench Press", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Dumbbell Flyes", sets: 3, reps: "12-15", rest: "90s" },
                        { name: "Close-Grip Bench Press", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Overhead Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 2": {
                    name: "Back & Biceps",
                    focus: "Upper body pull",
                    exercises: [
                        { name: "Deadlift", sets: 4, reps: "5-7", rest: "180s" },
                        { name: "Pull-ups", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Bent-over Rows", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "60s" },
                        { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 3": {
                    name: "Shoulders & Core",
                    focus: "Shoulder development and stability",
                    exercises: [
                        { name: "Overhead Press", sets: 4, reps: "6-8", rest: "120s" },
                        { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "90s" },
                        { name: "Rear Delt Flyes", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Upright Rows", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Planks", sets: 3, reps: "60s", rest: "60s" },
                        { name: "Russian Twists", sets: 3, reps: "20", rest: "60s" }
                    ]
                },
                "Day 4": {
                    name: "Legs",
                    focus: "Lower body strength",
                    exercises: [
                        { name: "Squats", sets: 4, reps: "6-8", rest: "180s" },
                        { name: "Romanian Deadlift", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Leg Press", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Calf Raises", sets: 4, reps: "20-25", rest: "60s" }
                    ]
                }
            }
        };
    }

    // Intermediate 5-Day Split
    getIntermediate5DayPlan() {
        return {
            name: "Intermediate 5-Day Split",
            description: "Advanced intermediate routine with specialization",
            duration: "12-16 weeks",
            schedule: {
                "Day 1": {
                    name: "Chest",
                    focus: "Chest development and strength",
                    exercises: [
                        { name: "Bench Press", sets: 4, reps: "6-8", rest: "180s" },
                        { name: "Incline Bench Press", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Decline Bench Press", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Dumbbell Flyes", sets: 3, reps: "12-15", rest: "90s" },
                        { name: "Cable Crossovers", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Push-ups", sets: 3, reps: "15-20", rest: "60s" }
                    ]
                },
                "Day 2": {
                    name: "Back",
                    focus: "Back thickness and width",
                    exercises: [
                        { name: "Deadlift", sets: 4, reps: "5-7", rest: "180s" },
                        { name: "Pull-ups", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Bent-over Rows", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "T-Bar Rows", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 3": {
                    name: "Shoulders",
                    focus: "Shoulder development and balance",
                    exercises: [
                        { name: "Overhead Press", sets: 4, reps: "6-8", rest: "120s" },
                        { name: "Arnold Press", sets: 3, reps: "8-10", rest: "90s" },
                        { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "60s" },
                        { name: "Rear Delt Flyes", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Upright Rows", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Shrugs", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 4": {
                    name: "Arms",
                    focus: "Bicep and tricep development",
                    exercises: [
                        { name: "Close-Grip Bench Press", sets: 4, reps: "8-10", rest: "120s" },
                        { name: "Bicep Curls", sets: 4, reps: "10-12", rest: "90s" },
                        { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Overhead Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Preacher Curls", sets: 3, reps: "10-12", rest: "60s" }
                    ]
                },
                "Day 5": {
                    name: "Legs",
                    focus: "Lower body strength and development",
                    exercises: [
                        { name: "Squats", sets: 4, reps: "6-8", rest: "180s" },
                        { name: "Romanian Deadlift", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Leg Press", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Lunges", sets: 3, reps: "10-12 each", rest: "90s" },
                        { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Calf Raises", sets: 4, reps: "20-25", rest: "60s" }
                    ]
                }
            }
        };
    }

    // Advanced routines
    getAdvanced5DayPlan() {
        return {
            name: "Advanced 5-Day Powerbuilding",
            description: "Combines strength and hypertrophy training",
            duration: "16-20 weeks",
            schedule: {
                "Day 1": {
                    name: "Heavy Chest & Triceps",
                    focus: "Strength focus with heavy compounds",
                    exercises: [
                        { name: "Bench Press", sets: 5, reps: "3-5", rest: "240s" },
                        { name: "Incline Bench Press", sets: 4, reps: "6-8", rest: "180s" },
                        { name: "Weighted Dips", sets: 3, reps: "6-8", rest: "120s" },
                        { name: "Close-Grip Bench Press", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 2": {
                    name: "Heavy Back & Biceps",
                    focus: "Deadlift and pull strength",
                    exercises: [
                        { name: "Deadlift", sets: 5, reps: "3-5", rest: "240s" },
                        { name: "Weighted Pull-ups", sets: 4, reps: "6-8", rest: "180s" },
                        { name: "Bent-over Rows", sets: 4, reps: "6-8", rest: "120s" },
                        { name: "T-Bar Rows", sets: 3, reps: "8-10", rest: "90s" },
                        { name: "Bicep Curls", sets: 3, reps: "8-10", rest: "60s" }
                    ]
                },
                "Day 3": {
                    name: "Heavy Legs",
                    focus: "Squat and leg strength",
                    exercises: [
                        { name: "Squats", sets: 5, reps: "3-5", rest: "240s" },
                        { name: "Romanian Deadlift", sets: 4, reps: "6-8", rest: "180s" },
                        { name: "Leg Press", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60s" }
                    ]
                },
                "Day 4": {
                    name: "Hypertrophy Upper",
                    focus: "Muscle building focus",
                    exercises: [
                        { name: "Dumbbell Bench Press", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s" },
                        { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "60s" },
                        { name: "Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 5": {
                    name: "Hypertrophy Lower",
                    focus: "Leg development",
                    exercises: [
                        { name: "Front Squats", sets: 4, reps: "8-10", rest: "120s" },
                        { name: "Leg Press", sets: 4, reps: "10-12", rest: "90s" },
                        { name: "Lunges", sets: 3, reps: "10-12 each", rest: "90s" },
                        { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                }
            }
        };
    }

    // Intermediate 6-Day Split
    getIntermediate6DayPlan() {
        return {
            name: "Intermediate 6-Day Push/Pull/Legs",
            description: "High frequency training for muscle growth",
            duration: "12-16 weeks",
            schedule: {
                "Day 1": {
                    name: "Push A",
                    focus: "Heavy chest and shoulders",
                    exercises: [
                        { name: "Bench Press", sets: 4, reps: "6-8", rest: "180s" },
                        { name: "Overhead Press", sets: 3, reps: "6-8", rest: "120s" },
                        { name: "Incline Dumbbell Press", sets: 3, reps: "8-10", rest: "90s" },
                        { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 2": {
                    name: "Pull A",
                    focus: "Heavy back and biceps",
                    exercises: [
                        { name: "Deadlift", sets: 4, reps: "5-7", rest: "180s" },
                        { name: "Pull-ups", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Bent-over Rows", sets: 3, reps: "8-10", rest: "90s" },
                        { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "60s" },
                        { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 3": {
                    name: "Legs A",
                    focus: "Heavy legs",
                    exercises: [
                        { name: "Squats", sets: 4, reps: "6-8", rest: "180s" },
                        { name: "Romanian Deadlift", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Leg Press", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Calf Raises", sets: 4, reps: "20-25", rest: "60s" }
                    ]
                },
                "Day 4": {
                    name: "Push B",
                    focus: "Volume chest and triceps",
                    exercises: [
                        { name: "Dumbbell Bench Press", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Arnold Press", sets: 3, reps: "8-10", rest: "90s" },
                        { name: "Dumbbell Flyes", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Tricep Dips", sets: 3, reps: "8-12", rest: "60s" },
                        { name: "Overhead Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 5": {
                    name: "Pull B",
                    focus: "Volume back and rear delts",
                    exercises: [
                        { name: "T-Bar Rows", sets: 4, reps: "8-10", rest: "120s" },
                        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Cable Rows", sets: 3, reps: "10-12", rest: "90s" },
                        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Rear Delt Flyes", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 6": {
                    name: "Legs B",
                    focus: "Volume legs",
                    exercises: [
                        { name: "Front Squats", sets: 4, reps: "8-10", rest: "120s" },
                        { name: "Lunges", sets: 3, reps: "10-12 each", rest: "90s" },
                        { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Seated Calf Raises", sets: 4, reps: "20-25", rest: "60s" }
                    ]
                }
            }
        };
    }

    // Advanced 6-Day Split
    getAdvanced6DayPlan() {
        return {
            name: "Advanced 6-Day Powerbuilding",
            description: "Elite level training with specialization",
            duration: "16-20 weeks",
            schedule: {
                "Day 1": {
                    name: "Heavy Chest",
                    focus: "Maximal strength chest",
                    exercises: [
                        { name: "Bench Press", sets: 6, reps: "3-5", rest: "240s" },
                        { name: "Incline Bench Press", sets: 4, reps: "5-7", rest: "180s" },
                        { name: "Weighted Dips", sets: 3, reps: "6-8", rest: "120s" },
                        { name: "Dumbbell Flyes", sets: 3, reps: "10-12", rest: "90s" }
                    ]
                },
                "Day 2": {
                    name: "Heavy Back",
                    focus: "Maximal strength back",
                    exercises: [
                        { name: "Deadlift", sets: 6, reps: "3-5", rest: "240s" },
                        { name: "Weighted Pull-ups", sets: 4, reps: "5-7", rest: "180s" },
                        { name: "Bent-over Rows", sets: 4, reps: "6-8", rest: "120s" },
                        { name: "T-Bar Rows", sets: 3, reps: "8-10", rest: "90s" }
                    ]
                },
                "Day 3": {
                    name: "Heavy Legs",
                    focus: "Maximal strength legs",
                    exercises: [
                        { name: "Squats", sets: 6, reps: "3-5", rest: "240s" },
                        { name: "Romanian Deadlift", sets: 4, reps: "5-7", rest: "180s" },
                        { name: "Leg Press", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60s" }
                    ]
                },
                "Day 4": {
                    name: "Hypertrophy Upper",
                    focus: "Muscle building upper body",
                    exercises: [
                        { name: "Dumbbell Bench Press", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s" },
                        { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "60s" },
                        { name: "Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "60s" }
                    ]
                },
                "Day 5": {
                    name: "Hypertrophy Lower",
                    focus: "Muscle building lower body",
                    exercises: [
                        { name: "Front Squats", sets: 4, reps: "8-10", rest: "120s" },
                        { name: "Leg Press", sets: 4, reps: "10-12", rest: "90s" },
                        { name: "Lunges", sets: 3, reps: "10-12 each", rest: "90s" },
                        { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Leg Curls", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 6": {
                    name: "Accessory & Core",
                    focus: "Weak point training",
                    exercises: [
                        { name: "Shrugs", sets: 4, reps: "12-15", rest: "60s" },
                        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Planks", sets: 3, reps: "60s", rest: "60s" },
                        { name: "Russian Twists", sets: 3, reps: "20", rest: "60s" },
                        { name: "Hanging Leg Raises", sets: 3, reps: "10-15", rest: "60s" }
                    ]
                }
            }
        };
    }

    // Advanced 7-Day Split
    getAdvanced7DayPlan() {
        return {
            name: "Advanced 7-Day Competition Prep",
            description: "Elite level training for competition",
            duration: "20-24 weeks",
            schedule: {
                "Day 1": {
                    name: "Heavy Chest & Triceps",
                    focus: "Maximal strength",
                    exercises: [
                        { name: "Bench Press", sets: 6, reps: "3-5", rest: "240s" },
                        { name: "Incline Bench Press", sets: 4, reps: "5-7", rest: "180s" },
                        { name: "Close-Grip Bench Press", sets: 3, reps: "6-8", rest: "120s" },
                        { name: "Weighted Dips", sets: 3, reps: "6-8", rest: "120s" }
                    ]
                },
                "Day 2": {
                    name: "Heavy Back & Biceps",
                    focus: "Maximal strength",
                    exercises: [
                        { name: "Deadlift", sets: 6, reps: "3-5", rest: "240s" },
                        { name: "Weighted Pull-ups", sets: 4, reps: "5-7", rest: "180s" },
                        { name: "Bent-over Rows", sets: 4, reps: "6-8", rest: "120s" },
                        { name: "Bicep Curls", sets: 3, reps: "8-10", rest: "60s" }
                    ]
                },
                "Day 3": {
                    name: "Heavy Legs",
                    focus: "Maximal strength",
                    exercises: [
                        { name: "Squats", sets: 6, reps: "3-5", rest: "240s" },
                        { name: "Romanian Deadlift", sets: 4, reps: "5-7", rest: "180s" },
                        { name: "Leg Press", sets: 3, reps: "8-10", rest: "120s" },
                        { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60s" }
                    ]
                },
                "Day 4": {
                    name: "Volume Upper",
                    focus: "Muscle building",
                    exercises: [
                        { name: "Dumbbell Bench Press", sets: 4, reps: "8-12", rest: "120s" },
                        { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s" },
                        { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "60s" },
                        { name: "Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 5": {
                    name: "Volume Lower",
                    focus: "Muscle building",
                    exercises: [
                        { name: "Front Squats", sets: 4, reps: "8-10", rest: "120s" },
                        { name: "Leg Press", sets: 4, reps: "10-12", rest: "90s" },
                        { name: "Lunges", sets: 3, reps: "10-12 each", rest: "90s" },
                        { name: "Leg Extensions", sets: 3, reps: "12-15", rest: "60s" }
                    ]
                },
                "Day 6": {
                    name: "Accessory & Weak Points",
                    focus: "Targeted training",
                    exercises: [
                        { name: "Shrugs", sets: 4, reps: "12-15", rest: "60s" },
                        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Rear Delt Flyes", sets: 3, reps: "12-15", rest: "60s" },
                        { name: "Planks", sets: 3, reps: "60s", rest: "60s" }
                    ]
                },
                "Day 7": {
                    name: "Active Recovery",
                    focus: "Recovery and mobility",
                    exercises: [
                        { name: "Light Cardio", sets: 1, reps: "20-30 min", rest: "N/A" },
                        { name: "Stretching", sets: 1, reps: "15-20 min", rest: "N/A" },
                        { name: "Foam Rolling", sets: 1, reps: "10-15 min", rest: "N/A" },
                        { name: "Mobility Work", sets: 1, reps: "10-15 min", rest: "N/A" }
                    ]
                }
            }
        };
    }

    // AI Workout Suggestions
    suggestWorkout() {
        const suggestions = {
            strength: [
                "Focus on compound movements with heavy weights",
                "Keep reps in the 3-6 range for main lifts",
                "Increase rest periods to 3-5 minutes",
                "Prioritize form over weight progression"
            ],
            muscle: [
                "Use moderate weights with 8-12 reps",
                "Include both compound and isolation exercises",
                "Rest 60-90 seconds between sets",
                "Focus on mind-muscle connection"
            ],
            endurance: [
                "Higher rep ranges (15-20 reps)",
                "Shorter rest periods (30-60 seconds)",
                "Include circuit training",
                "Add cardio sessions"
            ],
            fat_loss: [
                "Combine strength training with cardio",
                "Use supersets and circuits",
                "Keep rest periods short",
                "Focus on compound movements"
            ]
        };

        return suggestions[this.userProfile.goals[0]] || suggestions.strength;
    }

    // Advanced Progress tracking
    trackProgress(exercise, weight, reps, sets, notes = "", date = new Date()) {
        const progressEntry = {
            exercise: exercise,
            weight: weight,
            reps: reps,
            sets: sets,
            notes: notes,
            date: date.toISOString(),
            volume: weight * reps * sets,
            oneRM: this.calculateOneRM(weight, reps)
        };
        
        this.progress.entries.push(progressEntry);
        this.progress.exercises[exercise] = this.progress.exercises[exercise] || [];
        this.progress.exercises[exercise].push(progressEntry);
        
        // Auto-save to localStorage
        autoSaveProgress();
        
        return progressEntry;
    }

    // Calculate One Rep Max using Epley formula
    calculateOneRM(weight, reps) {
        return weight * (1 + reps / 30);
    }

    // Get comprehensive progress insights
    getProgressInsights() {
        if (this.progress.entries.length < 2) {
            return {
                message: "Keep tracking your progress to see detailed insights!",
                trends: [],
                recommendations: ["Start logging your workouts regularly"]
            };
        }

        const insights = {
            message: "",
            trends: [],
            recommendations: []
        };

        // Analyze overall progress
        const recentEntries = this.progress.entries.slice(-10);
        const olderEntries = this.progress.entries.slice(-20, -10);
        
        if (recentEntries.length >= 5 && olderEntries.length >= 5) {
            const recentAvgVolume = recentEntries.reduce((sum, entry) => sum + entry.volume, 0) / recentEntries.length;
            const olderAvgVolume = olderEntries.reduce((sum, entry) => sum + entry.volume, 0) / olderEntries.length;
            
            if (recentAvgVolume > olderAvgVolume * 1.1) {
                insights.trends.push("📈 Your training volume is increasing significantly!");
            } else if (recentAvgVolume > olderAvgVolume) {
                insights.trends.push("📊 Steady progress in training volume");
            } else {
                insights.trends.push("⚠️ Consider increasing intensity or volume");
            }
        }

        // Exercise-specific insights
        Object.keys(this.progress.exercises).forEach(exercise => {
            const exerciseData = this.progress.exercises[exercise];
            if (exerciseData.length >= 3) {
                const recent = exerciseData.slice(-3);
                const older = exerciseData.slice(-6, -3);
                
                if (recent.length >= 3 && older.length >= 3) {
                    const recentAvgWeight = recent.reduce((sum, entry) => sum + entry.weight, 0) / recent.length;
                    const olderAvgWeight = older.reduce((sum, entry) => sum + entry.weight, 0) / older.length;
                    
                    if (recentAvgWeight > olderAvgWeight * 1.05) {
                        insights.trends.push(`💪 ${exercise}: Weight progression is excellent!`);
                    }
                }
            }
        });

        // Generate recommendations
        const lastEntry = this.progress.entries[this.progress.entries.length - 1];
        if (lastEntry) {
            if (lastEntry.reps < 5) {
                insights.recommendations.push("Consider increasing reps for better endurance");
            } else if (lastEntry.reps > 15) {
                insights.recommendations.push("Try increasing weight to build more strength");
            }
            
            if (lastEntry.sets < 3) {
                insights.recommendations.push("Add more sets for better volume");
            }
        }

        insights.message = insights.trends.length > 0 ? 
            "Great progress! Here's what we found:" : 
            "Keep pushing! Consistency is key to success.";

        return insights;
    }

    // Get progress statistics
    getProgressStats() {
        if (this.progress.entries.length === 0) {
            return {
                totalWorkouts: 0,
                totalVolume: 0,
                averageWeight: 0,
                averageReps: 0,
                favoriteExercise: "None",
                improvementRate: 0
            };
        }

        const totalWorkouts = this.progress.entries.length;
        const totalVolume = this.progress.entries.reduce((sum, entry) => sum + entry.volume, 0);
        const averageWeight = this.progress.entries.reduce((sum, entry) => sum + entry.weight, 0) / totalWorkouts;
        const averageReps = this.progress.entries.reduce((sum, entry) => sum + entry.reps, 0) / totalWorkouts;
        
        // Find favorite exercise
        const exerciseCounts = {};
        this.progress.entries.forEach(entry => {
            exerciseCounts[entry.exercise] = (exerciseCounts[entry.exercise] || 0) + 1;
        });
        const favoriteExercise = Object.keys(exerciseCounts).reduce((a, b) => 
            exerciseCounts[a] > exerciseCounts[b] ? a : b
        );

        // Calculate improvement rate
        let improvementRate = 0;
        if (this.progress.entries.length >= 10) {
            const recent = this.progress.entries.slice(-5);
            const older = this.progress.entries.slice(-10, -5);
            const recentAvgVolume = recent.reduce((sum, entry) => sum + entry.volume, 0) / recent.length;
            const olderAvgVolume = older.reduce((sum, entry) => sum + entry.volume, 0) / older.length;
            improvementRate = ((recentAvgVolume - olderAvgVolume) / olderAvgVolume) * 100;
        }

        return {
            totalWorkouts,
            totalVolume: Math.round(totalVolume),
            averageWeight: Math.round(averageWeight),
            averageReps: Math.round(averageReps),
            favoriteExercise,
            improvementRate: Math.round(improvementRate)
        };
    }

    // Get exercise history
    getExerciseHistory(exerciseName) {
        return this.progress.exercises[exerciseName] || [];
    }

    // Export progress data
    exportProgressData() {
        return {
            entries: this.progress.entries,
            stats: this.getProgressStats(),
            insights: this.getProgressInsights(),
            exportDate: new Date().toISOString()
        };
    }
}

// Initialize Gym Partner
const gymPartner = new GymPartner();

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Exercise modal functionality
    const exerciseItems = document.querySelectorAll('.exercise-item');
    const exerciseModal = document.getElementById('exercise-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');

    exerciseItems.forEach(item => {
        item.addEventListener('click', function() {
            const exerciseName = this.querySelector('h4').textContent;
            const exerciseData = exerciseDatabase[exerciseName];
            
            if (exerciseData) {
                modalTitle.textContent = exerciseName;
                modalContent.innerHTML = `
                    <div class="space-y-6">
                        <!-- Exercise Overview -->
                        <div class="grid md:grid-cols-3 gap-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-blue-800 mb-3">Exercise Details</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Difficulty:</span>
                                        <span class="font-semibold">${exerciseData.difficulty}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Equipment:</span>
                                        <span class="font-semibold">${exerciseData.equipment}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Sets:</span>
                                        <span class="font-semibold">${exerciseData.sets}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Reps:</span>
                                        <span class="font-semibold">${exerciseData.reps}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Rest:</span>
                                        <span class="font-semibold">${exerciseData.rest}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600">Tempo:</span>
                                        <span class="font-semibold">${exerciseData.tempo}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-green-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-green-800 mb-3">Muscle Groups</h4>
                                <div class="space-y-2">
                                    <div>
                                        <span class="text-sm font-semibold text-gray-700">Primary:</span>
                                        <div class="flex flex-wrap gap-1 mt-1">
                                            ${exerciseData.primaryMuscles.map(muscle => 
                                                `<span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">${muscle}</span>`
                                            ).join('')}
                                        </div>
                                    </div>
                                    <div>
                                        <span class="text-sm font-semibold text-gray-700">Secondary:</span>
                                        <div class="flex flex-wrap gap-1 mt-1">
                                            ${exerciseData.secondaryMuscles.map(muscle => 
                                                `<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">${muscle}</span>`
                                            ).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-yellow-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-yellow-800 mb-3">Training Info</h4>
                                <div class="space-y-2 text-sm">
                                    <div>
                                        <span class="text-gray-600">Progression:</span>
                                        <p class="text-xs mt-1">${exerciseData.progression}</p>
                                    </div>
                                    <div>
                                        <span class="text-gray-600">Safety:</span>
                                        <p class="text-xs mt-1">${exerciseData.safetyNotes}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Instructions and Tips -->
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Step-by-Step Instructions</h4>
                                <ol class="list-decimal list-inside space-y-2 text-sm text-gray-600">
                                    ${exerciseData.instructions.map(instruction => 
                                        `<li class="pb-2">${instruction}</li>`
                                    ).join('')}
                                </ol>
                            </div>
                            
                            <div>
                                <h4 class="font-semibold text-gray-800 mb-3">Pro Tips</h4>
                                <ul class="list-disc list-inside space-y-2 text-sm text-gray-600">
                                    ${exerciseData.tips.map(tip => 
                                        `<li class="pb-1">${tip}</li>`
                                    ).join('')}
                                </ul>
                            </div>
                        </div>

                        <!-- Common Mistakes and Variations -->
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-red-800 mb-3">Common Mistakes to Avoid</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
                                    ${exerciseData.commonMistakes.map(mistake => 
                                        `<li class="pb-1">${mistake}</li>`
                                    ).join('')}
                                </ul>
                            </div>
                            
                            <div>
                                <h4 class="font-semibold text-purple-800 mb-3">Exercise Variations</h4>
                                <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
                                    ${exerciseData.variations.map(variation => 
                                        `<li class="pb-1">${variation}</li>`
                                    ).join('')}
                                </ul>
                            </div>
                        </div>

                        <!-- Visual Guide with Images -->
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <h4 class="font-semibold text-gray-700 mb-4 text-center">Exercise Visual Guide</h4>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-center">
                                    <img src="best-workout-routine-for-gym-beginners-135325.webp" alt="Exercise Form" class="w-full h-32 object-cover rounded-lg mb-2">
                                    <p class="text-xs text-gray-600">Proper Form</p>
                                </div>
                                <div class="text-center">
                                    <img src="istockphoto-1370782467-612x612.jpg" alt="Training Technique" class="w-full h-32 object-cover rounded-lg mb-2">
                                    <p class="text-xs text-gray-600">Training Technique</p>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-4 text-center">Visual demonstrations show proper form and movement patterns for optimal results.</p>
                        </div>
                    </div>
                `;
                exerciseModal.classList.remove('hidden');
            }
        });
    });

    closeModal.addEventListener('click', function() {
        exerciseModal.classList.add('hidden');
    });

    exerciseModal.addEventListener('click', function(e) {
        if (e.target === exerciseModal) {
            exerciseModal.classList.add('hidden');
        }
    });

    // Body calculator functionality
    const bodyCalculatorForm = document.getElementById('body-calculator-form');
    const resultsDiv = document.getElementById('results');

    bodyCalculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const height = parseInt(document.getElementById('height').value);
        const weight = parseInt(document.getElementById('weight').value);
        const activity = parseFloat(document.getElementById('activity').value);
        const goal = document.getElementById('goal').value;

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        
        // Determine BMI category
        let bmiCategory = '';
        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiCategory = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            bmiCategory = 'Overweight';
        } else {
            bmiCategory = 'Obese';
        }

        // Calculate BMR using Mifflin-St Jeor Equation
        let bmr;
        if (gender === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        // Calculate daily calorie needs
        const dailyCalories = Math.round(bmr * activity);

        // Calculate adjusted calories based on goal
        let adjustedCalories = dailyCalories;
        let calorieAdjustment = '';
        
        if (goal === 'lose') {
            adjustedCalories = dailyCalories - 500;
            calorieAdjustment = '500 calories deficit for weight loss';
        } else if (goal === 'gain') {
            adjustedCalories = dailyCalories + 300;
            calorieAdjustment = '300 calories surplus for weight gain';
        } else {
            calorieAdjustment = 'Maintenance calories';
        }

        // Generate recommendations
        const recommendations = generateRecommendations(bmi, goal, gender, age);

        // Display results
        document.getElementById('bmi-result').textContent = bmi;
        document.getElementById('bmi-category').textContent = bmiCategory;
        document.getElementById('bmr-result').textContent = Math.round(bmr) + ' calories/day';
        document.getElementById('calories-result').textContent = adjustedCalories + ' calories/day';

        const recommendationsDiv = document.getElementById('recommendations');
        recommendationsDiv.innerHTML = recommendations.map(rec => 
            `<div class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span class="text-sm">${rec}</span>
            </div>`
        ).join('');

        resultsDiv.classList.remove('hidden');
        
        // Smooth scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Generate personalized recommendations
    function generateRecommendations(bmi, goal, gender, age) {
        const recommendations = [];
        
        // BMI-based recommendations
        if (bmi < 18.5) {
            recommendations.push('Focus on strength training to build muscle mass');
            recommendations.push('Increase caloric intake with nutrient-dense foods');
            recommendations.push('Include compound exercises in your routine');
        } else if (bmi >= 25) {
            recommendations.push('Combine cardio and strength training for optimal results');
            recommendations.push('Focus on portion control and meal timing');
            recommendations.push('Aim for 150+ minutes of moderate cardio weekly');
        } else {
            recommendations.push('Maintain current weight with balanced nutrition');
            recommendations.push('Focus on muscle definition and strength');
            recommendations.push('Include variety in your workout routine');
        }

        // Goal-based recommendations
        if (goal === 'lose') {
            recommendations.push('Create a 500-calorie daily deficit');
            recommendations.push('Prioritize protein intake (1.6-2.2g per kg body weight)');
            recommendations.push('Include high-intensity interval training');
        } else if (goal === 'gain') {
            recommendations.push('Create a 300-calorie daily surplus');
            recommendations.push('Focus on progressive overload in strength training');
            recommendations.push('Eat protein with every meal');
        }

        // Age-based recommendations
        if (age > 40) {
            recommendations.push('Include flexibility and mobility work');
            recommendations.push('Focus on bone health with weight-bearing exercises');
            recommendations.push('Consider working with a fitness professional');
        }

        return recommendations.slice(0, 5); // Return top 5 recommendations
    }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Gym Partner Functionality
    function initializeGymPartner() {
        // Create gym partner interface
        const gymPartnerSection = document.createElement('section');
        gymPartnerSection.id = 'gym-partner';
        gymPartnerSection.className = 'py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white';
        gymPartnerSection.innerHTML = `
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold mb-4">Your AI Gym Partner</h2>
                    <p class="text-xl text-purple-200">Get personalized workout recommendations and track your progress</p>
                    

                </div>
                
                <div class="grid md:grid-cols-2 gap-8 mb-12">
                    <!-- Profile Setup -->
                    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h3 class="text-2xl font-bold mb-4">Profile Setup</h3>
                        <form id="profile-form" class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-2">Experience Level</label>
                                <select id="experience" class="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white">
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Primary Goal</label>
                                <select id="goal" class="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white">
                                    <option value="strength">Strength</option>
                                    <option value="muscle">Muscle Building</option>
                                    <option value="endurance">Endurance</option>
                                    <option value="fat_loss">Fat Loss</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Available Days per Week</label>
                                <select id="days" class="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white">
                                    <option value="3">3 Days</option>
                                    <option value="4">4 Days</option>
                                    <option value="5">5 Days</option>
                                    <option value="6">6 Days</option>
                                    <option value="7">7 Days</option>
                                </select>
                            </div>
                            <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
                                Generate Workout Plan
                            </button>
                        </form>
                    </div>
                    
                    <!-- AI Suggestions -->
                    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <h3 class="text-2xl font-bold mb-4">AI Recommendations</h3>
                        <div id="ai-suggestions" class="space-y-3">
                            <div class="bg-white/10 p-3 rounded">
                                <i class="fas fa-lightbulb text-yellow-400 mr-2"></i>
                                <span>Focus on compound movements for maximum efficiency</span>
                            </div>
                            <div class="bg-white/10 p-3 rounded">
                                <i class="fas fa-clock text-blue-400 mr-2"></i>
                                <span>Rest 2-3 minutes between heavy compound sets</span>
                            </div>
                            <div class="bg-white/10 p-3 rounded">
                                <i class="fas fa-heart text-red-400 mr-2"></i>
                                <span>Prioritize form over weight to prevent injuries</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Generated Workout Plan -->
                <div id="workout-plan-display" class="hidden">
                    <h3 class="text-3xl font-bold mb-6 text-center">Your Personalized Workout Plan</h3>
                    <div id="workout-schedule" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Workout days will be populated here -->
                    </div>
                </div>
                
                <!-- Advanced Progress Tracking -->
                <div class="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 class="text-2xl font-bold mb-6">Advanced Progress Tracking</h3>
                    
                    <!-- Progress Stats Dashboard -->
                    <div class="grid md:grid-cols-3 gap-4 mb-6">
                        <div class="bg-white/10 p-4 rounded-lg">
                            <h4 class="text-lg font-semibold mb-2">Total Workouts</h4>
                            <div id="total-workouts" class="text-3xl font-bold text-green-400">0</div>
                        </div>
                        <div class="bg-white/10 p-4 rounded-lg">
                            <h4 class="text-lg font-semibold mb-2">Total Volume</h4>
                            <div id="total-volume" class="text-3xl font-bold text-blue-400">0 lbs</div>
                        </div>
                        <div class="bg-white/10 p-4 rounded-lg">
                            <h4 class="text-lg font-semibold mb-2">Improvement Rate</h4>
                            <div id="improvement-rate" class="text-3xl font-bold text-purple-400">0%</div>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Track Workout Form -->
                        <div>
                            <h4 class="text-lg font-semibold mb-3">Track Your Workout</h4>
                            <form id="progress-form" class="space-y-3">
                                <input type="text" id="exercise-name" placeholder="Exercise Name" class="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70">
                                <input type="number" id="weight" placeholder="Weight (lbs)" class="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70">
                                <input type="number" id="reps" placeholder="Reps" class="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70">
                                <input type="number" id="sets" placeholder="Sets" class="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70">
                                <textarea id="notes" placeholder="Notes (optional)" class="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70" rows="2"></textarea>
                                <button type="submit" class="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                                    <i class="fas fa-save mr-2"></i>Log Progress
                                </button>
                            </form>
                        </div>
                        
                        <!-- Progress Insights -->
                        <div>
                            <h4 class="text-lg font-semibold mb-3">Progress Insights</h4>
                            <div id="progress-insights" class="bg-white/10 p-4 rounded-lg space-y-3">
                                <p class="text-green-300">Start tracking your workouts to see detailed insights!</p>
                            </div>
                            
                            <!-- Quick Stats -->
                            <div class="mt-4 space-y-2">
                                <div class="bg-white/10 p-3 rounded-lg">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm">Average Weight:</span>
                                        <span id="avg-weight" class="font-semibold text-blue-300">0 lbs</span>
                                    </div>
                                </div>
                                <div class="bg-white/10 p-3 rounded-lg">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm">Average Reps:</span>
                                        <span id="avg-reps" class="font-semibold text-green-300">0</span>
                                    </div>
                                </div>
                                <div class="bg-white/10 p-3 rounded-lg">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm">Favorite Exercise:</span>
                                        <span id="favorite-exercise" class="font-semibold text-purple-300">None</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Progress Visualization -->
                    <div class="mt-6">
                        <h4 class="text-lg font-semibold mb-3">Progress Trends</h4>
                        <div id="progress-chart" class="bg-white/10 p-4 rounded-lg h-48 flex items-center justify-center">
                            <p class="text-gray-300">Log more workouts to see progress trends!</p>
                        </div>
                    </div>
                    
                    <!-- Recent Progress History -->
                    <div class="mt-6">
                        <h4 class="text-lg font-semibold mb-3">Recent Progress</h4>
                        <div id="progress-history" class="bg-white/10 p-4 rounded-lg max-h-64 overflow-y-auto">
                            <p class="text-gray-300">No progress logged yet. Start your fitness journey!</p>
                        </div>
                    </div>
                    
                    <!-- Data Management Status -->
                    <div class="mt-4 bg-white/10 p-4 rounded-lg">
                        <h4 class="text-lg font-semibold mb-3">Data Management</h4>
                        <div class="grid md:grid-cols-2 gap-4 text-sm">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-300">Last Saved:</span>
                                <span id="last-save-time" class="text-green-300">Never</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-300">Total Entries:</span>
                                <span id="total-entries" class="text-blue-300">0</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-300">Data Status:</span>
                                <span id="data-status" class="text-yellow-300">No Data</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-300">Auto-Save:</span>
                                <span class="text-green-300">Enabled</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Export Progress -->
                    <div class="mt-4 text-center space-y-3">
                        <div class="flex flex-col sm:flex-row gap-3 justify-center">
                            <button id="export-progress" class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                <i class="fas fa-download mr-2"></i>Export JSON
                            </button>
                            <button id="export-pdf" class="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                <i class="fas fa-file-pdf mr-2"></i>Export PDF
                            </button>
                        </div>
                        
                        <!-- Import Data -->
                        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <input type="file" id="import-file" accept=".json" class="hidden">
                            <button id="import-progress" class="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                <i class="fas fa-upload mr-2"></i>Import Data
                            </button>
                            <button id="backup-data" class="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                <i class="fas fa-cloud-upload-alt mr-2"></i>Backup Data
                            </button>
                            <span class="text-sm text-gray-300">Supported: JSON files</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert before footer
        const footer = document.querySelector('footer');
        footer.parentNode.insertBefore(gymPartnerSection, footer);
        
        // Add event listeners
        document.getElementById('profile-form').addEventListener('submit', function(e) {
            e.preventDefault();
            updateUserProfile();
            generateWorkoutPlan();
        });
        
        document.getElementById('progress-form').addEventListener('submit', function(e) {
            e.preventDefault();
            logProgress();
        });
        
        document.getElementById('export-progress').addEventListener('click', function() {
            exportProgressData();
        });
        
        document.getElementById('export-pdf').addEventListener('click', function() {
            exportProgressPDF();
        });
        
        document.getElementById('import-progress').addEventListener('click', function() {
            document.getElementById('import-file').click();
        });
        
        document.getElementById('import-file').addEventListener('change', function(e) {
            importProgressData(e.target.files[0]);
        });
        
        document.getElementById('backup-data').addEventListener('click', function() {
            backupProgressData();
        });
        
        // Auto-load previous progress data
        autoLoadProgress();
        
        // Initialize progress dashboard
        updateProgressDashboard();
        
        // Load sample data if no progress exists (for demonstration)
        if (gymPartner.progress.entries.length === 0) {
            loadSampleProgressData();
        }
    }
    
    function updateUserProfile() {
        gymPartner.userProfile.experience = document.getElementById('experience').value;
        gymPartner.userProfile.goals = [document.getElementById('goal').value];
        gymPartner.userProfile.availableDays = parseInt(document.getElementById('days').value);
        
        // Update AI suggestions
        updateAISuggestions();
    }
    
    function updateAISuggestions() {
        const suggestions = gymPartner.suggestWorkout();
        const suggestionsDiv = document.getElementById('ai-suggestions');
        suggestionsDiv.innerHTML = suggestions.map(suggestion => 
            `<div class="bg-white/10 p-3 rounded">
                <i class="fas fa-lightbulb text-yellow-400 mr-2"></i>
                <span>${suggestion}</span>
            </div>`
        ).join('');
    }
    
    function generateWorkoutPlan() {
        const plan = gymPartner.generateWorkoutPlan();
        const displayDiv = document.getElementById('workout-plan-display');
        const scheduleDiv = document.getElementById('workout-schedule');
        
        displayDiv.classList.remove('hidden');
        
        scheduleDiv.innerHTML = Object.entries(plan.schedule).map(([day, workout]) => `
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 class="text-xl font-bold mb-3 text-purple-300">${day}: ${workout.name}</h4>
                <p class="text-purple-200 mb-4">${workout.focus}</p>
                <div class="space-y-3">
                    ${workout.exercises.map(exercise => `
                        <div class="bg-white/10 p-3 rounded">
                            <div class="font-semibold">${exercise.name}</div>
                            <div class="text-sm text-purple-200">${exercise.sets} sets × ${exercise.reps} reps</div>
                            <div class="text-xs text-purple-300">Rest: ${exercise.rest}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        // Scroll to workout plan
        displayDiv.scrollIntoView({ behavior: 'smooth' });
    }
    
    function logProgress() {
        const exercise = document.getElementById('exercise-name').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const reps = parseInt(document.getElementById('reps').value);
        const sets = parseInt(document.getElementById('sets').value);
        const notes = document.getElementById('notes').value;
        
        if (exercise && weight && reps && sets) {
            gymPartner.trackProgress(exercise, weight, reps, sets, notes);
            updateProgressDashboard();
            
            // Clear form
            document.getElementById('progress-form').reset();
            
            // Show success message
            showNotification('Progress logged successfully!', 'success');
        } else {
            showNotification('Please fill in all required fields!', 'error');
        }
    }
    
    function updateProgressDashboard() {
        const stats = gymPartner.getProgressStats();
        const insights = gymPartner.getProgressInsights();
        
        // Update stats dashboard
        document.getElementById('total-workouts').textContent = stats.totalWorkouts;
        document.getElementById('total-volume').textContent = `${stats.totalVolume} lbs`;
        document.getElementById('improvement-rate').textContent = `${stats.improvementRate}%`;
        document.getElementById('avg-weight').textContent = `${stats.averageWeight} lbs`;
        document.getElementById('avg-reps').textContent = stats.averageReps;
        document.getElementById('favorite-exercise').textContent = stats.favoriteExercise;
        
        // Update insights
        const insightsDiv = document.getElementById('progress-insights');
        insightsDiv.innerHTML = `
            <p class="text-green-300 font-semibold">${insights.message}</p>
            ${insights.trends.map(trend => `<p class="text-blue-300">${trend}</p>`).join('')}
            ${insights.recommendations.map(rec => `<p class="text-yellow-300">💡 ${rec}</p>`).join('')}
        `;
        
        // Update progress history
        updateProgressHistory();
        
        // Update progress chart
        updateProgressChart();
        
        // Update data management status
        updateDataManagementStatus();
    }
    
    function updateProgressHistory() {
        const historyDiv = document.getElementById('progress-history');
        const entries = gymPartner.progress.entries;
        
        if (entries.length === 0) {
            historyDiv.innerHTML = '<p class="text-gray-300">No progress logged yet. Start your fitness journey!</p>';
            return;
        }
        
        const recentEntries = entries.slice(-10).reverse(); // Show last 10 entries, newest first
        historyDiv.innerHTML = recentEntries.map(entry => `
            <div class="bg-white/10 p-3 rounded-lg mb-2">
                <div class="flex justify-between items-start">
                    <div>
                        <div class="font-semibold text-white">${entry.exercise}</div>
                        <div class="text-sm text-gray-300">${entry.weight} lbs × ${entry.reps} reps × ${entry.sets} sets</div>
                        ${entry.notes ? `<div class="text-xs text-gray-400 mt-1">${entry.notes}</div>` : ''}
                    </div>
                    <div class="text-right">
                        <div class="text-xs text-gray-400">${new Date(entry.date).toLocaleDateString()}</div>
                        <div class="text-xs text-blue-300">Vol: ${entry.volume} lbs</div>
                        <div class="text-xs text-purple-300">1RM: ${Math.round(entry.oneRM)} lbs</div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    function updateProgressChart() {
        const chartDiv = document.getElementById('progress-chart');
        const entries = gymPartner.progress.entries;
        
        if (entries.length < 3) {
            chartDiv.innerHTML = '<p class="text-gray-300">Log more workouts to see progress trends!</p>';
            return;
        }
        
        // Create a simple text-based progress visualization
        const recentEntries = entries.slice(-10);
        const volumes = recentEntries.map(entry => entry.volume);
        const maxVolume = Math.max(...volumes);
        const minVolume = Math.min(...volumes);
        
        const chartHTML = `
            <div class="w-full h-full">
                <div class="flex items-end justify-between h-32 mb-4">
                    ${volumes.map((volume, index) => {
                        const height = ((volume - minVolume) / (maxVolume - minVolume)) * 100;
                        const color = volume === maxVolume ? 'bg-green-400' : 
                                    volume > (maxVolume + minVolume) / 2 ? 'bg-blue-400' : 'bg-gray-400';
                        return `
                            <div class="flex flex-col items-center">
                                <div class="w-4 ${color} rounded-t transition-all duration-300" style="height: ${Math.max(height, 10)}%"></div>
                                <div class="text-xs text-gray-300 mt-1">${Math.round(volume)}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="text-center text-sm text-gray-300">
                    <div class="flex justify-between">
                        <span>Volume Progress (lbs)</span>
                        <span>${recentEntries.length} workouts</span>
                    </div>
                </div>
            </div>
        `;
        
        chartDiv.innerHTML = chartHTML;
    }
    
    function updateDataManagementStatus() {
        const lastSave = localStorage.getItem('lastSave');
        const totalEntries = gymPartner.progress.entries.length;
        
        // Update last save time
        const lastSaveElement = document.getElementById('last-save-time');
        if (lastSave) {
            const saveDate = new Date(lastSave);
            lastSaveElement.textContent = saveDate.toLocaleString();
        } else {
            lastSaveElement.textContent = 'Never';
        }
        
        // Update total entries
        document.getElementById('total-entries').textContent = totalEntries;
        
        // Update data status
        const dataStatusElement = document.getElementById('data-status');
        if (totalEntries === 0) {
            dataStatusElement.textContent = 'No Data';
            dataStatusElement.className = 'text-yellow-300';
        } else if (totalEntries < 5) {
            dataStatusElement.textContent = 'Getting Started';
            dataStatusElement.className = 'text-blue-300';
        } else if (totalEntries < 20) {
            dataStatusElement.textContent = 'Good Progress';
            dataStatusElement.className = 'text-green-300';
        } else {
            dataStatusElement.textContent = 'Excellent Progress';
            dataStatusElement.className = 'text-purple-300';
        }
    }
    
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
            type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    function exportProgressData() {
        const data = gymPartner.exportProgressData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fitness-progress-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('Progress data exported successfully!', 'success');
    }
    
    function exportProgressPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const data = gymPartner.exportProgressData();
        const stats = data.stats;
        const entries = data.entries;
        
        // Title
        doc.setFontSize(20);
        doc.setTextColor(44, 62, 80);
        doc.text('FitLife Gym - Progress Report', 20, 30);
        
        // Date
        doc.setFontSize(12);
        doc.setTextColor(52, 73, 94);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 45);
        
        // Stats Summary
        doc.setFontSize(16);
        doc.setTextColor(44, 62, 80);
        doc.text('Progress Summary', 20, 65);
        
        doc.setFontSize(10);
        doc.setTextColor(52, 73, 94);
        doc.text(`Total Workouts: ${stats.totalWorkouts}`, 20, 80);
        doc.text(`Total Volume: ${stats.totalVolume} lbs`, 20, 90);
        doc.text(`Average Weight: ${stats.averageWeight} lbs`, 20, 100);
        doc.text(`Average Reps: ${stats.averageReps}`, 20, 110);
        doc.text(`Improvement Rate: ${stats.improvementRate}%`, 20, 120);
        doc.text(`Favorite Exercise: ${stats.favoriteExercise}`, 20, 130);
        
        // Recent Workouts Table
        if (entries.length > 0) {
            doc.addPage();
            doc.setFontSize(16);
            doc.setTextColor(44, 62, 80);
            doc.text('Recent Workouts', 20, 30);
            
            const tableData = entries.slice(-20).reverse().map(entry => [
                new Date(entry.date).toLocaleDateString(),
                entry.exercise,
                `${entry.weight} lbs`,
                `${entry.reps} reps`,
                `${entry.sets} sets`,
                `${entry.volume} lbs`,
                `${Math.round(entry.oneRM)} lbs`
            ]);
            
            doc.autoTable({
                startY: 40,
                head: [['Date', 'Exercise', 'Weight', 'Reps', 'Sets', 'Volume', '1RM']],
                body: tableData,
                theme: 'grid',
                headStyles: {
                    fillColor: [44, 62, 80],
                    textColor: 255,
                    fontSize: 10
                },
                bodyStyles: {
                    fontSize: 9
                },
                alternateRowStyles: {
                    fillColor: [245, 245, 245]
                }
            });
        }
        
        // Insights Page
        if (data.insights.trends.length > 0 || data.insights.recommendations.length > 0) {
            doc.addPage();
            doc.setFontSize(16);
            doc.setTextColor(44, 62, 80);
            doc.text('Progress Insights', 20, 30);
            
            doc.setFontSize(12);
            doc.setTextColor(52, 73, 94);
            doc.text('Trends:', 20, 50);
            
            let yPos = 60;
            data.insights.trends.forEach(trend => {
                doc.setFontSize(10);
                doc.text(`• ${trend}`, 25, yPos);
                yPos += 8;
            });
            
            if (data.insights.recommendations.length > 0) {
                yPos += 10;
                doc.setFontSize(12);
                doc.text('Recommendations:', 20, yPos);
                yPos += 10;
                
                data.insights.recommendations.forEach(rec => {
                    doc.setFontSize(10);
                    doc.text(`• ${rec}`, 25, yPos);
                    yPos += 8;
                });
            }
        }
        
        // Save PDF
        doc.save(`fitness-progress-${new Date().toISOString().split('T')[0]}.pdf`);
        showNotification('PDF report generated successfully!', 'success');
    }
    
    function importProgressData(file) {
        if (!file) {
            showNotification('No file selected!', 'error');
            return;
        }
        
        if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
            showNotification('Please select a valid JSON file!', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                
                // Validate data structure
                validateProgressData(data);
                
                // Clear existing data
                gymPartner.progress.entries = [];
                gymPartner.progress.exercises = {};
                
                // Import entries
                data.entries.forEach(entry => {
                    if (entry.exercise && entry.weight && entry.reps && entry.sets) {
                        gymPartner.trackProgress(
                            entry.exercise,
                            entry.weight,
                            entry.reps,
                            entry.sets,
                            entry.notes || '',
                            new Date(entry.date)
                        );
                    }
                });
                
                // Auto-save imported data
                autoSaveProgress();
                
                // Update dashboard
                updateProgressDashboard();
                
                showNotification(`Successfully imported ${data.entries.length} workout entries!`, 'success');
                
                // Clear file input
                document.getElementById('import-file').value = '';
                
            } catch (error) {
                console.error('Import error:', error);
                showNotification('Error importing data: ' + error.message, 'error');
            }
        };
        
        reader.readAsText(file);
    }
    
    function backupProgressData() {
        const data = gymPartner.exportProgressData();
        const backupData = {
            ...data,
            backupDate: new Date().toISOString(),
            version: '1.0',
            description: 'FitLife Gym Progress Backup'
        };
        
        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fitness-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('Data backup created successfully!', 'success');
    }
    
    // Enhanced data validation and recovery
    function validateProgressData(data) {
        const requiredFields = ['entries', 'stats', 'insights'];
        const missingFields = requiredFields.filter(field => !data.hasOwnProperty(field));
        
        if (missingFields.length > 0) {
            throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
        }
        
        if (!Array.isArray(data.entries)) {
            throw new Error('Entries must be an array');
        }
        
        // Validate each entry
        data.entries.forEach((entry, index) => {
            if (!entry.exercise || typeof entry.exercise !== 'string') {
                throw new Error(`Entry ${index}: Invalid exercise name`);
            }
            if (!entry.weight || isNaN(entry.weight) || entry.weight <= 0) {
                throw new Error(`Entry ${index}: Invalid weight value`);
            }
            if (!entry.reps || isNaN(entry.reps) || entry.reps <= 0) {
                throw new Error(`Entry ${index}: Invalid reps value`);
            }
            if (!entry.sets || isNaN(entry.sets) || entry.sets <= 0) {
                throw new Error(`Entry ${index}: Invalid sets value`);
            }
            if (!entry.date) {
                throw new Error(`Entry ${index}: Missing date`);
            }
        });
        
        return true;
    }
    
    // Auto-save functionality
    function autoSaveProgress() {
        try {
            localStorage.setItem('gymPartnerProgress', JSON.stringify(gymPartner.progress));
            localStorage.setItem('lastSave', new Date().toISOString());
        } catch (error) {
            console.error('Auto-save failed:', error);
            showNotification('Auto-save failed. Please export your data.', 'error');
        }
    }
    
    // Auto-load functionality
    function autoLoadProgress() {
        try {
            const savedProgress = localStorage.getItem('gymPartnerProgress');
            if (savedProgress) {
                const data = JSON.parse(savedProgress);
                gymPartner.progress = data;
                updateProgressDashboard();
                showNotification('Previous progress data loaded automatically!', 'success');
            }
        } catch (error) {
            console.error('Auto-load failed:', error);
            showNotification('Failed to load previous data. Starting fresh.', 'error');
        }
    }
    
    function loadSampleProgressData() {
        const sampleExercises = ['Bench Press', 'Squats', 'Deadlifts', 'Pull-ups', 'Overhead Press'];
        const baseWeights = [135, 185, 225, 0, 95]; // Starting weights
        const baseReps = [8, 6, 5, 8, 6];
        
        // Generate sample data for the last 2 weeks
        for (let i = 13; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            
            // Skip some days to simulate realistic workout pattern
            if (i % 3 !== 0) continue;
            
            const exerciseIndex = Math.floor(Math.random() * sampleExercises.length);
            const exercise = sampleExercises[exerciseIndex];
            const baseWeight = baseWeights[exerciseIndex];
            const baseRep = baseReps[exerciseIndex];
            
            // Simulate progressive overload
            const progressFactor = 1 + (i * 0.02); // 2% improvement per workout
            const weight = Math.round(baseWeight * progressFactor);
            const reps = Math.max(3, Math.round(baseRep * (1 + (i * 0.01))));
            const sets = Math.floor(Math.random() * 2) + 3; // 3-4 sets
            
            gymPartner.trackProgress(exercise, weight, reps, sets, `Sample workout ${14-i}`, date);
        }
        
        updateProgressDashboard();
        showNotification('Sample progress data loaded for demonstration!', 'success');
    }
    
    // Initialize gym partner when page loads
    initializeGymPartner();
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-in {
            animation: fadeIn 0.8s ease-in-out;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .exercise-item {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .exercise-item:hover {
            background-color: rgba(59, 130, 246, 0.1);
            border-radius: 8px;
            padding: 8px;
            margin: -8px;
        }
    `;
    document.head.appendChild(style);
}); 