// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function addNumberClosure(numToAdd) {
    return function (num) {
        return num + numToAdd;
    }
}

var addFive = addNumberClosure(5);

console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25
console.log(addFive(30)); // Output: 35
// =====================================================

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


function searchArray(arr, value) {
    //  if the array is empty, return false
    if (arr.length === 0) {
        return false;
    }

    // Recursive case: if the first element is the value, return true
    if (arr[0] === value) {
        return true;
    }

    // Recursive case: call the function again with the rest of the array
    return searchArray(arr.slice(1), value);
}


// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element

function addParagraph(text) {
    var newParagraph = document.createElement('p');
    var paragraphText = document.createTextNode(text);
    newParagraph.appendChild(paragraphText);
    document.body.appendChild(newParagraph);
  }
  
  addParagraph('This is a new paragraph!');



// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addListItem(text) {
    var ul = document.querySelector('ul'); // get the unordered list
    var li = document.createElement('li'); // create a new list item
    li.textContent = text; // set the text content of the new list item
    ul.appendChild(li); // add the new list item to the end of the unordered list
}

addListItem('Apples');
addListItem('Bananas');
addListItem('Oranges');


// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


<p id="my-element">Change thee color</p>

function changeBackgroundColor(p, color) {
    p.style.backgroundColor = color;
  }

  // get the element reference
var  myElement = document.getElementById('my-element');

// change its background color to red
changeBackgroundColor(myElement, 'red');

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function saveObjectToLocalStorage(key, obj) {
    // Convert object to JSON string
    var jsonStr = JSON.stringify(obj);
    
    // Save JSON string to localStorage
    localStorage.setItem(key, jsonStr);
  }

  function getObjectFromLocalStorage(key) {
    // Get JSON string from localStorage
    var  jsonStr = localStorage.getItem(key);
    
    // Convert JSON string to object
    var obj = JSON.parse(jsonStr);
    
    return obj;
  }
  
  
//   7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object


function getObjectFromLocalStorage(key) {
    // Get the JSON string from localStorage
    var jsonStr = localStorage.getItem(key);
    
    // Convert the JSON string back to an object
    var obj = JSON.parse(jsonStr);
    
    // Return the object
    return obj;
  }
  
  var myObj = getObjectFromLocalStorage('myKey');


//   8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function saveObjectPropertiesToLocalStorage(obj) {
    // Loop through the object properties
    for (var [key, value] of Object.entries(obj)) {
      // Save each property to localStorage
      localStorage.setItem(key, value);
    }
    
    // Create a new object to store the retrieved properties
    var retrievedObj = {};
    
    // Loop through the localStorage items
    for (let i = 0; i < localStorage.length; i++) {
      // Get the key and value of each item
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      
      // Add the key-value pair to the retrieved object
      retrievedObj[key] = value;
    }
    
    // Return the retrieved object
    return retrievedObj;
  }
  
  var myObj = { foo: 'bar', baz: 42 };
  var retrievedObj = saveObjectPropertiesToLocalStorage(myObj);
