// Function to toggle the hamburger menu
function toggleHamburgerMenu() {
    var menu = document.getElementById('hamburgerMenu');
    menu.classList.toggle('active');
}

// Function to open the register popup
function openRegisterPopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'block'; // Display the popup
    document.body.style.overflow = 'hidden'; // Disable scrolling on the main page
}

// Function to close the register popup
function closeRegisterPopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'none'; // Hide the popup
    document.body.style.overflow = 'auto'; // Re-enable scrolling on the main page
}

// Function to validate the registration form
function validateForm() {
    // Add your validation logic here

    // Example validation (you can replace this with your own validation logic)
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    if (dob == "") {
        alert("Date of Birth must be filled out");
        return false;
    }
    if (gender == "") {
        alert("Gender must be selected");
        return false;
    }
    if (!agreeTerms) {
        alert("Please agree to the Terms and Conditions");
        return false;
    }

    // If all validations pass, return true to submit the form
    return true;
}

// Get the audio element
const audioPlayer = document.getElementById('audioPlayer');

// Play the audio
function playAudio() {
  audioPlayer.play();
}

// Pause the audio
function pauseAudio() {
  audioPlayer.pause();
}

// Stop the audio
function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

// Call the playAudio function to play the audio when needed
playAudio();
