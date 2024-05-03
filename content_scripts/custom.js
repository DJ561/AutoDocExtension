// Create a new HTML element
const newElement = document.createElement('div');
newElement.innerHTML = '<p>This is injected content</p>';

// Add the element to the page
document.body.appendChild(newElement);

alert("Hello World");