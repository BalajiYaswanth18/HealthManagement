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

function handleInsuranceResponse() {
    var yesCheckbox = document.getElementById('yesCheckbox');
    var noCheckbox = document.getElementById('noCheckbox');

    if (yesCheckbox.checked) {
        window.location.href = "insurance.html";
    } else if (noCheckbox.checked) {
        alert("Ok, thank you for your response.");
    } else {
        alert("Please select an option.");
    }
}
