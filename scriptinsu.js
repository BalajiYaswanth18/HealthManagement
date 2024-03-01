var registrationForm = document.getElementById('registrationForm');
var successMessage = document.getElementById('successMessage');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    successMessage.style.display = 'block';

});
