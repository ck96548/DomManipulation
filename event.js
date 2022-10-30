let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit',additem);

function additem(e){
    e.preventDefault();

    let newItem = document.getElementById('item').value;
    let newItem1 = document.getElementById('item1').value;
    let li = document.createElement('li');
    
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem + " " + newItem1));

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

filter.addEventListener('keyup',filterItem);

function filterItem(e){

    let text = e.target.value.toLowerCase();
    let items = document.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    

}