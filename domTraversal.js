// TRAVERSING THE DOM //

//var itemList = document.querySelector('#items');

// parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
 // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
//console.log(itemList.nextSibling);
// // nextElementSibling
//console.log(itemList.nextElementSibling);

// previousSibling
 //console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// // Creating Element

let newDiv = document.createElement('div');

// // Creating and append Hellow world before Item lister
newDiv.className = 'hello';

newDiv.id = 'hello1';

newDiv.setAttribute = ('title', 'Hello Div');

let newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText)

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv , h1);


// Creating and append Hellow world before Item1
let newDiv1 = document.createElement('div');


newDiv1.className = 'hello';

newDiv1.id = 'hello1';

newDiv1.setAttribute = ('title', 'Hello Div');

let newDivText1 = document.createTextNode('Hello World');
newDiv1.appendChild(newDivText1)

var container1 = document.querySelector('#items')
var item = document.querySelector('.list-group-item:nth-child(1)');


console.log(newDiv1);
container1.insertBefore(newDiv1 , item)



