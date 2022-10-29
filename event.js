let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit',additem);

function additem(e){
    e.preventDefault();

    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    itemList.append(li);

    let deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    console.log(1);
}

itemList.addEventListener('click',removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
      
    }
}