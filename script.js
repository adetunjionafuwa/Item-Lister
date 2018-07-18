'use strict';

var form = document.getElementById('addForm');

//Get the error display
var err = document.getElementById('error');

//Grab the Item value in the Text box in the
var newItem = document.getElementById('newItem');

var filter = document.getElementById('filter');

//Ul Items
var listItems = document.getElementById('items');

//On subbmit even of the addForm
form.addEventListener('submit',addItem);

//Remove Error message on key press
newItem.addEventListener('keydown',function(e){
  err.style.display = 'none';
});

//search Items
filter.addEventListener('keyup',function(e){
  //Convert the text to lower case
  var txtLower = e.target.value.toLowerCase();

  // Get the List in the Items
  var itemList = listItems.getElementsByTagName('li');

  //Convert the itemList to an array
  Array.from(itemList).forEach(function(elem){
    //Grab the firstchild element text
    var item = elem.firstChild.textContent

    if(item.toLowerCase().indexOf(txtLower) !== -1){
      elem.style.display = 'block';
    }else{
      elem.style.display = 'none';
    }
  });
});

//Add event Listener to remove items
listItems.addEventListener('click',removeItem);



//Function Add-Item
function addItem(e){
  e.preventDefault();

  if((newItem.value.trim() === "")||(newItem.value === null)||(newItem.value === undefined)){
    err.style.display = 'block';
  }
  else{
    //Create new Li List element
    //Add a class name with the list-group-item
    var newLi = document.createElement('li');
    newLi.className = 'list-group-item';

    //Add text node with the input value from the form
    newLi.appendChild(document.createTextNode(newItem.value));

    //create a delete button
    //Add classes to the btnDel
    var btnDel = document.createElement('button');
    btnDel.className = "btn btn-danger btn-sm float-right delete";

    //Add text node with the input X - delete Value
    btnDel.appendChild(document.createTextNode('X'));

    //Append button to li
    newLi.appendChild(btnDel);

    //Append the new LI to the Ul items
    listItems.appendChild(newLi);
  }
  newItem.value = "";
}


function removeItem(e){
   if(e.target.classList.contains('delete')){
     if(confirm('Do you want to delete ' + e.target.parentElement.textContent + '?')){
       //e.target.parentElement.style.display = 'none';

       var li = e.target.parentElement;
       listItems.removeChild(li);
     }
   }
}
