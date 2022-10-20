// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(header);
// headerTitle.textContent = 'Hello';
// headerTitle.style.color = 'red';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px green';
// var title = document.getElementsByClassName('title')
// console.log(title)
// title[0].style.fontWeight = 'bold'
// title[0].style.color = 'green'
 
// GETELEMENTSBYCLASSNAME //
//var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[2].style.fontWeight = 'bold';
// Gives error
//items.style.backgroundColor = '#f4f4f4';
//for(var i = 0; i < items.length; i++){
    //items[i].style.fontWeight = 'bold'
   //items[i].style.backgroundColor = '#f4f4f4';
   //items[i].style.color = '#30dce6'
   //tems[2].style.backgroundColor = 'green';
//}


// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// Gives error
// items.style.backgroundColor = '#f4f4f4';
// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#4a4943';
//   li[4].style.color = 'green'
// }

// QUERYSELECTOR

var header  = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px red';

var input = document.querySelector('input');
input.value = 'Hello- World';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'red';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = "hidden"

var li = document.querySelectorAll('li');

li[1].style.color = 'green'

var odd = document.querySelectorAll('li:nth-child(odd)');

for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}




