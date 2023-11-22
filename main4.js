function onsignup(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create a user object
    var user = {
        username: username,
        email: email,
        password: password
    };

    // Retrieve existing users from local storage or initialize an empty array
    var existingUsersJSON = localStorage.getItem('users');
    var existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    // Add the new user to the array
    existingUsers.push(user);

    // Convert the array of users to a JSON string
    var usersJSON = JSON.stringify(existingUsers);

    // Save the updated array of users to local storage
    localStorage.setItem('users', usersJSON);
}


