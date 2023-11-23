// Load users from local storage on page load
document.addEventListener('DOMContentLoaded', function () {
    loadUsers();
});

function onsignup(event) {
    event.preventDefault();

    // Your signup logic here

    // After signup, update the user list
    updateUsersList();
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

        li.appendChild(span);
        li.appendChild(deleteButton);
        userList.appendChild(li);
    });
}

function getUsersFromLocalStorage() {
    // Retrieve users from local storage
    const usersString = localStorage.getItem('users');
    return usersString ? usersString.split(',') : [];
}

function saveUsersToLocalStorage(users) {
    // Save users to local storage
    localStorage.setItem('users', users.join(','));
}

function onDeleteUser(button) {
    const li = button.parentNode;
    const span = li.querySelector('span');
    const userToRemove = span.textContent;

    // Remove the user from local storage
    const users = getUsersFromLocalStorage();
    const updatedUsers = users.filter(user => user !== userToRemove);
    saveUsersToLocalStorage(updatedUsers);

    // Remove the user from the UI
    li.remove();
}
