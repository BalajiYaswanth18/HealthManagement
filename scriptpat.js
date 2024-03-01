function addPatientDetails() {
    var patientDetails = {
        name: "John Doe",
        age: 30,
        gender: "Male",
        medicalHistory: "No significant medical history.",
        conditions: "Hypertension",
        preferences: "Private room, Vegetarian food",
        allergies: "None",
    };

    var patientDetailsContainer = document.getElementById("patientDetails");

    var detailsParagraph = document.createElement("p");
    detailsParagraph.innerHTML = `<strong>Name:</strong> ${patientDetails.name}<br>
                                    <strong>Age:</strong> ${patientDetails.age}<br>
                                    <strong>Gender:</strong> ${patientDetails.gender}<br>
                                    <strong>Medical History:</strong> ${patientDetails.medicalHistory}<br>
                                    <strong>Medical Conditions:</strong> ${patientDetails.conditions}<br>
                                    <strong>Patient Preferences:</strong> ${patientDetails.preferences}<br>
                                    <strong>Allergies:</strong> ${patientDetails.allergies}`;

    patientDetailsContainer.appendChild(detailsParagraph);
}

function registerPatient() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var medicalHistory = document.getElementById("medicalHistory").value;
    var conditions = document.getElementById("conditions").value;
    var preferences = document.getElementById("preferences").value;
    var allergies = document.getElementById("allergies").value;


    var registrationDetails = {
        name: name,
        age: age,
        gender: gender,
        medicalHistory: medicalHistory,
        conditions: conditions,
        preferences: preferences,
        allergies: allergies,
    };

    var patientDetailsContainer = document.getElementById("patientDetails");
    var detailsParagraph = document.createElement("p");
    detailsParagraph.innerHTML = `<strong>Name:</strong> ${registrationDetails.name}<br>
                                    <strong>Age:</strong> ${registrationDetails.age}<br>
                                    <strong>Gender:</strong> ${registrationDetails.gender}<br>
                                    <strong>Medical History:</strong> ${registrationDetails.medicalHistory}<br>
                                    <strong>Medical Conditions:</strong> ${registrationDetails.conditions}<br>
                                    <strong>Patient Preferences:</strong> ${registrationDetails.preferences}<br>
                                    <strong>Allergies:</strong> ${registrationDetails.allergies}`;

    patientDetailsContainer.appendChild(detailsParagraph);
}
