function getWords() {
    var words = document.getElementsByClassName("text");
    for(var i = 0; i < words.length; i++)
    {
        words[i].setAttribute("onclick", "highlight(this);");
        words[i].setAttribute("onmouseenter", "mouseEnter(this);");
        words[i].setAttribute("onmouseleave", "mouseLeave(this);");
    }
}

getWords()

function highlight(item) {
    var hightlightedWord = document.getElementsByName("highlighted");
    if (hightlightedWord.length == 1) {
        hightlightedWord[0].style.backgroundColor = null;
        hightlightedWord[0].setAttribute("name", null);
    }
    document.getElementById("current").innerHTML = item.innerHTML;
    var value = document.getElementById("current").setAttribute("data-value", "on");
    item.style.backgroundColor = "rgb(81, 225, 252)";
    item.setAttribute("name", "highlighted");
    
}

function mouseEnter(item) {
    var value = document.getElementById("current").getAttribute("data-value");
    if (value == "off") {
        item.style.backgroundColor = "rgb(81, 225, 252)";
        item.style.fontWeight = null; //"bold"
        document.getElementById("current").setAttribute("data-value", "temp");
        document.getElementById("current").innerHTML = item.innerHTML;
    }
}

function mouseLeave(item) {
    var value = document.getElementById("current").getAttribute("data-value");
    if (value == "temp") {
        item.style.backgroundColor = null;
        item.style.fontWeight = null;
        document.getElementById("current").setAttribute("data-value", "off");
        document.getElementById("current").innerHTML = "click on or hover over a word";
    }
}


function shorten() {
    var number = 20;
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
        var id = lines[i].getAttribute("id");
        if (id > number-1) {
            lines[i].style.display = "none";
        }
    }
}

shorten()

var slider = document.getElementById("myRange");
var output = document.getElementById("lineNumber");
output.innerHTML = slider.value;

slider.setAttribute("max", Number(document.getElementById("amountOfLines").innerHTML));
document.getElementById("amountOfLines").style.display = "none";

slider.oninput = function() {
    output.innerHTML = this.value;
    var lines = document.getElementsByClassName("line");
    var maxLine = 20 + Number(this.value-1)
    for (var i = 0; i < lines.length; i++) {
        var id = lines[i].getAttribute("id");
        var display = lines[i].getAttribute("display");

        if (Number(id) < Number(this.value-1) || Number(id) > maxLine-1) {
            lines[i].style.display = "none";
        }
        else {
            lines[i].style.display = "inherit";
        }
        
    }
}