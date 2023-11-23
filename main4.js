document.addEventListener('DOMContentLoaded', function () {
    const userList = document.getElementById('userList');
  
    // Function to handle form submission (signup)
    function onsignup(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get user input values
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Create a new user object
      const user = { username, email, password };
  
      // Add the user to the list and update UI
      addUserToList(user);
    }
  
    // Function to add a user to the list and update UI
    function addUserToList(user) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${user.username} - ${user.email} 
        <button onclick="deleteUser(this)">Delete</button>`;
  
      userList.appendChild(listItem);
    }
  
    // Function to delete a user
    function deleteUser(button) {
      const listItem = button.parentNode;
      userList.removeChild(listItem);
      // Additional logic can be added here, such as updating data on the server or local storage
    }
  
    // Assign functions to global scope for inline event handlers
    window.onsignup = onsignup;
    window.deleteUser = deleteUser;
  });
  