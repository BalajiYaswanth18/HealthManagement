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
