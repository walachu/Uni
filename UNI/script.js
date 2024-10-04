function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('.main');
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('expanded');
}

function toggleSubMenu() {
    const submenu = document.getElementById('submenu');
    submenu.classList.toggle('show');
}

function toggleOptions() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show');
}

// Cerrar el menú de opciones si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.options-icon')) {
        var dropdown = document.getElementById("dropdown");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

// Animación suave para el sidebar
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.transition = 'all 0.3s ease';
});
// Get the modal
var modal = document.getElementById("addAddressModal");

// Get the button that opens the modal
var btn = document.querySelector(".add-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the cancel button
var cancelButton = document.getElementById("cancelButton");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on the cancel button, close the modal
cancelButton.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("addAddressForm").onsubmit = function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll just close the modal
    modal.style.display = "none";
    // You could also add the new address to the table here
}