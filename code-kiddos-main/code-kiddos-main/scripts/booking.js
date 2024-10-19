document.addEventListener("DOMContentLoaded", function () {
    const datesContainer = document.getElementById('dates');
    const timeSlotsContainer = document.getElementById('timeSlots');
    const selectedDateDisplay = document.getElementById('selectedDate');

    const availableDates = ['Oct 18', 'Oct 19', 'Oct 20', 'Oct 21', 'Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'];
    const timeSlots = ['08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM'];

    let selectedDate = availableDates[0];
    let selectedTime = '';

    // Populate dates
    function renderDates() {
        datesContainer.innerHTML = '';
        availableDates.forEach((date, index) => {
            const dateElement = document.createElement('div');
            dateElement.classList.add('date');
            if (date === selectedDate) dateElement.classList.add('active');
            dateElement.innerText = date;
            dateElement.addEventListener('click', function () {
                selectedDate = date;
                selectedDateDisplay.innerText = date;
                renderDates();
            });
            datesContainer.appendChild(dateElement);
        });
    }

    // Populate time slots
    function renderTimeSlots() {
        timeSlotsContainer.innerHTML = '';
        timeSlots.forEach((time) => {
            const timeElement = document.createElement('div');
            timeElement.classList.add('time-option');
            timeElement.innerText = time;
            if (time === selectedTime) timeElement.classList.add('selected');
            timeElement.addEventListener('click', function () {
                selectedTime = time;
                renderTimeSlots();
            });
            timeSlotsContainer.appendChild(timeElement);
        });
    }

    // Handle scrolling of dates (optional for larger lists)
    document.getElementById('prevBtn').addEventListener('click', () => {
        datesContainer.scrollLeft -= 60;
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        datesContainer.scrollLeft += 60;
    });

    // Initialize page with default values
    renderDates();
    renderTimeSlots();
});


// Open and close modal functionality
function openBookingModal() {
    document.getElementById('bookingModal').style.display = 'flex';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Form Submission Handling (you can customize this as per your need)
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your booking has been confirmed!');
    closeBookingModal(); // Close the modal after confirming
});


function openNav() {
    document.querySelector('.sidebar').style.width = "auto"
}

function closeNav() {
    document.querySelector('.sidebar').style.width = "0"
}