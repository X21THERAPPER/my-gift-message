// script.js

// Show the user message and display the reply form
function showMessage() {
    const name = document.getElementById('name-input').value;
    if (name) {
        document.getElementById('user-message').innerText = `${name}, Victor loves you... A lot actually`;
        document.getElementById('reply-section').style.display = 'block'; // Show the reply form
    } else {
        alert('Please enter your name.');
    }
}

// Show Thank You message after the reply form is submitted
function showThankYouMessage(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    document.getElementById('reply-section').style.display = 'none'; // Hide the reply form
    document.getElementById('thank-you-message').style.display = 'block'; // Show the thank you message
    document.getElementById('user-reply').value = ''; // Clear the reply textarea
    // Optionally, you can reset the name input and message as well
    document.getElementById('name-input').value = '';
    document.getElementById('user-message').innerText = '';
}
