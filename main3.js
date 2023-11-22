localStorage.setItem('email','password')
console.log(localStorage.getItem('name'));
function onsignup(event) {
    event.preventDefault();
    
    // Get values from the form
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Create an object to store user data
    var userData = {
        username: username,
        email: email,
        password: password
    };

    // Convert the object to a JSON string and save it to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Retrieve the data from localStorage
    var storedData = localStorage.getItem("userData");

    // Parse the JSON string back to an object
    var parsedData = JSON.parse(storedData);

    // Log the parsed data to the console
    console.log(parsedData);
}
