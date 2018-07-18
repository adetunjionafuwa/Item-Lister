'use strict';

var form = document.getElementById('addForm');

//Get the error display
var err = document.getElementById('error');

//Grab the Item value in the Text box in the
var newItem = document.getElementById('newItem');

//Ul Items
var listItems = document.getElementById('items');

//On subbmit even of the addForm
form.addEventListener('submit',addItem);

//Remove Error message on key press
newItem.addEventListener('keydown',function(e){
  err.style.display = 'none';
});

//Add event Listener to remov items
listItems.addEventListener('click',remeoveItem);



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
   console.log(1);
}
