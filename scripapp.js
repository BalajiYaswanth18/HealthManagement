
function findDoctors() {
    const dummyData = [
        { name: 'Dr. Smith', specialty: 'Fever', availability: 'Monday, 10:00 AM - 1:00 PM' },
        { name: 'Dr. Johnson', specialty: 'heart', availability: 'Wednesday, 2:00 PM - 5:00 PM' },
        { name: 'Dr. Yashwanth', specialty: 'diabetes', availability: 'Saturday, 12:00 AM - 4:00 AM' },
        { name: 'Dr. Rambabu', specialty: 'flu', availability: 'Thursday, 12:00 AM - 4:00 AM' },
        { name: 'Dr. Manoj Kumar', specialty: 'Joint pains', availability: 'Wednesday, 2:00 PM - 5:00 PM' },
        { name: 'Dr. Yashwanth', specialty: 'Migrane', availability: 'Saturday, 1:00 AM - 8:00 AM' }
    ];

    const disease = document.getElementById('disease').value;
    const doctorListContainer = document.getElementById('doctor-list');

    const availableDoctors = dummyData.filter(doctor => doctor.specialty.toLowerCase().includes(disease.toLowerCase()));

    if (availableDoctors.length > 0) {
        const ul = document.createElement('ul');
        availableDoctors.forEach(doctor => {
            const li = document.createElement('li');
            li.textContent = `${doctor.name} - ${doctor.specialty}, Availability: ${doctor.availability}`;
            const bookButton = document.createElement('button');
            bookButton.textContent = 'Book';
            bookButton.className = 'book-button';
            bookButton.onclick = function() {
                bookDoctor(this, doctor.name);
            };
            li.appendChild(bookButton);
            ul.appendChild(li);
        });
        doctorListContainer.innerHTML = '<h2>Available Doctors</h2>';
        doctorListContainer.appendChild(ul);
    } else {
        doctorListContainer.innerHTML = '<p>No doctors available for the specified disease.</p>';
    }
}

function bookDoctor(button, doctorName) {
    button.textContent = 'Booked';
    button.className = 'booked-button';
    button.disabled = true;
    console.log(`Doctor ${doctorName} booked!`);
}


var notificationBtn = document.getElementById('notificationBtn');
var notificationDropdown = document.getElementById('notificationDropdown');

notificationBtn.addEventListener('click', function() {
    notificationDropdown.style.display = (notificationDropdown.style.display === 'block') ? 'none' : 'block';
});

window.onclick = function(event) {
    if (event.target !== notificationBtn && event.target !== notificationDropdown && !notificationDropdown.contains(event.target)) {
        notificationDropdown.style.display = 'none';
    }
};
