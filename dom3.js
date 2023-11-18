var itemList = document.querySelector('#items');
// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'af4f4f4';

// Corrected the typo in the next line
console.log(itemList.parentElement.parentElement);

// first child
console.log(itemList.firstChild);
// first child element
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello 1';

// last child
console.log(itemList.lastChild);
// last child element
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello 1';

// next sibling
console.log(itemList.nextSibling);
// next element sibling
console.log(itemList.nextElementSibling);
// previous sibling
console.log(itemList.previousSibling);
// previous element sibling
console.log(itemList.previousElementSibling);

// create element
// create a div
var newDiv = document.createElement('div');
// add class
newDiv.className = 'hello';
// add id
newDiv.id = 'hello 1'; // Corrected the id
// add attributes
newDiv.setAttribute('title', 'helloDiv'); // Corrected the attribute name
// create textNode
var newDivText = document.createTextNode('Hello world');
// add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);

// Corrected the selector for container assuming it exists in your HTML
var container = document.querySelector('.container');
var h1 = document.querySelector('header h1');

if (container) {
  newDiv.style.fontSize = '30px';
  container.insertBefore(newDiv, h1);
} else {
  console.error('Container not found');
}
