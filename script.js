
const addBtn = document.getElementById("showText");
addBtn.addEventListener('click',addItem);

const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener('click',removeItem);


/**funtion to display list items */



function addItem(e){
    e.preventDefault();
    
    const ul = document.getElementById('ul'); //ul
    const li = document.createElement('li');//li
    const x = document.createElement('button');
    x.textContent = "X";

 
    const text = document.getElementById('todo');
    li.appendChild(document.createTextNode(text.value));
    li.appendChild(x);
    ul.appendChild(li); 
   
    li.addEventListener('click',function(){
        li.classList.toggle('todoLineThrough')
    
        });

    document.getElementById('form').reset();
};

/**function to delete all list item */


function removeItem(e){
    e.preventDefault();

    const lis = document.querySelectorAll('#ul li');//li
    for(var i=0; li=lis[i]; i++) {
        li.parentNode.removeChild(li);
    }
};

/**function to delete a specific list item */

ul.onclick = removeLi;

function removeLi(e){
    e.preventDefault();
    const tgt = e.target;
    const elements = document.getElementById('ul');

    // if the clicked tag is a button...
    if (tgt.tagName === "BUTTON" && elements.className === 'todoLineThrough') {
      // Find the closest <li> to the clicked button and remove it
      tgt.closest('li').remove();
    }
    // otherwise just terminate function
    return false;
}

