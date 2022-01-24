
/**funtion to display list items */

function addItem(){
    
    const ul = document.getElementById('ul'); //ul
    const li = document.createElement('li');//li
        
    const text = document.getElementById('todo');
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li); 
   
    li.addEventListener('click',function(){
        li.style.textDecoration = "line-through";
    
        });

    
};

/**function to delete list item */


function removeItem(){

    const li = document.getElementById('ul');//li
 
    li.remove(li.selectedIndex); 
};


