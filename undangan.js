// Modal functionality for RSVP confirmation
const modal = document.getElementById('rsvpModal');
const rsvpBtn = document.getElementById('rsvpBtn');
const closeModal = document.querySelector('.close');

// Show modal when RSVP button is clicked
rsvpBtn.onclick = function () {
    modal.style.display = 'block';
};

// Close modal when close button is clicked
closeModal.onclick = function () {
    modal.style.display = 'none';
};

// Close modal if user clicks outside the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
