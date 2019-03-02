// Triage the wounded soldiers.

var doctor = hero.findByType("paladin")[0];
var mage = hero.findByType("pixie")[0];
var helper = hero.findByType("peasant")[0];
var soldiers = hero.findByType("soldier");

// Initialize patient arrays.
var doctorPatients = [];
var magePatients = [];
var helperPatients = [];

// Iterate all the soldiers:
for(var i=0; i < soldiers.length; i++) {
    var soldier = soldiers[i];
    // If soldier is slowed:
    if(soldier.maxSpeed < 6) {
        // Add them to the 'mage's array of patients.
        magePatients.push(soldier);
    }
    // Else if soldier.health is less than half of maxHealth:
    else if(soldier.health < soldier.maxHealth/2){
        // Add them to the 'doctor's array of patients.
        doctorPatients.push(soldier);
    }
    // Else:
    else {
        // Add soldier to the 'helper's array of patients.
        helperPatients.push(soldier);
    }
        
}

// Now assign the patient lists to the appropriate person.
mage.patients = magePatients;
doctor.patients = doctorPatients;
helper.patients = helperPatients;
