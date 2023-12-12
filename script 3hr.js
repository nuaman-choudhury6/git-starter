window.onload = function () {
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const obj = JSON.parse(localStorage[key]);
            showUseronScreen(obj);
        }
    }
};

function savetoLocalStorage(event) {
    event.preventDefault();
    const expense = event.target.expenseamount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    const obj = {
        expense,
        description,
        category
    };
    localStorage.setItem(obj.description, JSON.stringify(obj));
    showUseronScreen(obj);
}

function showUseronScreen(obj) {
    const parentElem = document.getElementById('listofitems');
    const childElem = document.createElement('li');
    childElem.className = 'list-group-item';
    childElem.textContent = obj.expense + ' - ' + obj.description + ' - ' + obj.category;

    const deleteExpenseButton = document.createElement('button');
    deleteExpenseButton.className = 'btn btn-danger btn-sm mx-2';
    deleteExpenseButton.textContent = 'Delete Expense';
    deleteExpenseButton.onclick = () => {
        localStorage.removeItem(obj.description);
        parentElem.removeChild(childElem);
    };

    const editExpenseButton = document.createElement('button');
    editExpenseButton.className = 'btn btn-warning btn-sm';
    editExpenseButton.textContent = 'Edit Expense';
    editExpenseButton.onclick = () => {
        localStorage.removeItem(obj.description);
        parentElem.removeChild(childElem);
        document.getElementById('expenseamountInputTag').value = obj.expense;
        document.getElementById('descriptionInputTag').value = obj.description;
        document.getElementById('categoryInputTag').value = obj.category;
    };

    childElem.appendChild(deleteExpenseButton);
    childElem.appendChild(editExpenseButton);
    parentElem.appendChild(childElem);
}
