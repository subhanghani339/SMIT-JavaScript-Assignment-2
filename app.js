// Question No 1: Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function createAdder(num) {
  return function (x) {
    return x + num;
  };
}

const add5 = createAdder(5);
const result = add5(10);
console.log(result);

// Question No 2: Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested

function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === val) {
    return true;
  } else {
    return searchArray(arr.slice(1), val);
  }
}

const arr = [1, 2, 3, 4, 5];
console.log(searchArray(arr, 3));
console.log(searchArray(arr, 6));

// Question No 3: Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

function addParagraph(text) {
  const p = document.createElement("p");

  p.textContent = text;

  document.body.appendChild(p);
}

addParagraph("My name is Muhammad Subhan Abdul Ghani");

// Question No 4: Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
function addListItem(text) {
  const li = document.createElement("li");

  li.textContent = text;

  const ul = document.querySelector("ul");

  ul.appendChild(li);
}

addListItem("Item 1");

// Question No 5: Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

// Question No 6: Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

function saveObjectToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

const myObject = { foo: "Question No 7", baz: 7 };
saveObjectToLocalStorage("myObject", myObject);

// Question No 7: Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object

function getObjectFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  return JSON.parse(storedValue);
}

const newObject = getObjectFromLocalStorage("myObject");
console.log(newObject.foo);
console.log(newObject.baz);

// Question No 8: Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object
function saveObjectPropertiesToLocalStorage(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
  }

  const newObj = {};
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
  }
  return newObj;
}

const q8Object = { foo: "Question No 8", baz: 8 };
const storedObject = saveObjectPropertiesToLocalStorage(q8Object);
console.log(storedObject.foo); // "bar"
console.log(storedObject.baz); // 42
