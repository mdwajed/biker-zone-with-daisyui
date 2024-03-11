// functional button part
let availableSeats = 40; // Initialize the number of available seats
let bookedSeats = 0; // Initialize the number of booked seats

// Function to handle seat selection
function selectSeat(seatId) {
  const seatButton = document.getElementById(seatId);

  if (!seatButton.classList.contains("selected")) {
    // Check if the seat is not already booked
    if (availableSeats > 0) {
      // Check if there are available seats
      availableSeats--; // Deduct one from available seats
      bookedSeats++; // Add one to booked seats
      seatButton.classList.add("selected"); // Mark the seat as selected
      updateSeatsDisplay(); // Update the display
    } else {
      alert("No seats available!");
    }
  } else {
    alert("Seat already booked!");
  }
}

// Function to update the display
function updateSeatsDisplay() {
  const availableSeatsElement = document.getElementById("availableSeats");
  const bookedSeatsElement = document.getElementById("bookedSeats");

  availableSeatsElement.innerText = availableSeats; // Update available seats display
  bookedSeatsElement.innerText = bookedSeats; // Update booked seats display
}

// end button part functional.
