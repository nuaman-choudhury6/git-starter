// Load users from local storage on page load
document.addEventListener('DOMContentLoaded', function () {
    updateUsersList();
});

function onsignup(event) {
    event.preventDefault();

    // Your signup logic here
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate and store the new user data
    if (username && email && password) {
        const newUser = `${username}-${email}-${password}`;
        saveUserToLocalStorage(newUser);

        // Clear the form fields after signup
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';

        // Update the user list
        updateUsersList();
    } else {
        alert('Please fill in all fields.');
    }
}

function updateUsersList() {
    // Clear the existing list
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    // Load users from local storage
    const users = getUsersFromLocalStorage();

    // Add each user to the list
    users.forEach(user => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = user;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            onDeleteUser(this);
        };

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            onEditUser(this);
        };

        li.appendChild(span);
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        userList.appendChild(li);
    });
}

function getUsersFromLocalStorage() {
    // Retrieve users from local storage
    const usersString = localStorage.getItem('users');
    return usersString ? usersString.split(',') : [];
}

function saveUserToLocalStorage(user) {
    // Save user to local storage
    const users = getUsersFromLocalStorage();
    users.push(user);
    localStorage.setItem('users', users.join(','));
}

function onDeleteUser(button) {
    const li = button.parentNode;
    const span = li.querySelector('span');
    const userToRemove = span.textContent;

    // Remove the user from local storage
    const users = getUsersFromLocalStorage();
    const updatedUsers = users.filter(user => user !== userToRemove);
    saveUsersToLocalStorage(updatedUsers); // Fixed function name

    // Remove the user from the UI
    li.remove();
}

function onEditUser(button) {
    const li = button.parentNode;
    const span = li.querySelector('span');
    const userToEdit = span.textContent;

    // Assuming you have an input field with the class 'editInput' in your edit form
    const editInput = document.querySelector('.editInput');

    // Set the value of the edit input field to the current user's data
    editInput.value = userToEdit;

    // Show the edit form (assuming it has the class 'editForm')
    document.querySelector('.editForm').style.display = 'block';
}
