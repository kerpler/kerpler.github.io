var log = function() {
    console.log.apply(console, arguments)
}

// var myli = document.querySelector('li');
// myli.textContent = '1';
//
// var myVariable;
// myVariable = 'Bob';
//
// myVariable;
// myVariable = 'Steve';
//
// /*
// Everything in between is a comment.
// */
//
// // This is a comment.
//
// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// } else {
//     alert('Awww, but chocolate is my favorite...');
// }
//
// function multiply(num1, num2) {
//     var result = num1 * num2;
//     return result;
// }

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.png') {
        myImage.setAttribute('src','images/fox.jpg');
    } else {
        myImage.setAttribute('src','images/firefox-logo.png');
    }
}

var myButton = document.querySelector('button');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

// log(localStorage)
