
var itemNodes = document.getElementsByTagName("LI");
var i;
for(i = 0 ; i < itemNodes.length ; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  itemNodes[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addItem () {
  
  var input = document.getElementById("action").value;
  var li = document.createElement("li");
  var t = document.createTextNode(input);
  li.appendChild(t);
  if (input === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("action").value = "";

  document.getElementById("action").innerHTML = input;
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
