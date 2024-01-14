
    // BEKLAGER FOR ROTET


// _____ generate default list ______

function closeButton(i, myNodelist){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
};  
let list = document.getElementById("todo-list");
let myNodelist = list.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    closeButton(i, myNodelist)
};
    
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
}
}, false);


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// _____ ADD and CLEAR buttons ______

let clearButton = document.getElementById("clear-button");
let submitButton = document.getElementById("add-button");
let add = document.getElementById("todo-list");

submitButton.addEventListener("click", addStuff);
clearButton.addEventListener("click", clear);

function clear() {
    add.innerHTML = "";
}

function addStuff()
{
    let todo = todoInput.value;
    if(todo == "") {
        alert("Please input data");
    } else {
        add.innerHTML += "<li>" + todo  + "</li>";
    }

    let array = document.getElementById("todo-list");
    let last = array.children[array.children.length - 1];
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    last.appendChild(span);
}


