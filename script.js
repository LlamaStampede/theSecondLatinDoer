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
