console.log("JavaScript file loaded successfully");

// Task 1: Button and Counter
let count = 0;
document.getElementById('incrementButton').addEventListener('click', function() {
    console.log("Button clicked!"); // Add this to verify the click event
    count++;
    document.getElementById('counter').textContent = count;
});

// Task 2: Display Key Code and Key Value
document.addEventListener('keydown', function(event) {
    document.getElementById('keyCode').textContent = event.keyCode;
    document.getElementById('keyValue').textContent = event.key;
});

// Task 3: Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length < 5) {
        alert('Username must be at least 5 characters long.');
        event.preventDefault();
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
    }
});
