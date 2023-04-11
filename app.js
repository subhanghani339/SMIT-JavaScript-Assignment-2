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
