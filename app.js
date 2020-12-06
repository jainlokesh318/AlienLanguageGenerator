var translateBtn = document.querySelector("#btn-translate");
var textTranslate = document.querySelector("textarea");

var outputText = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function createURL(text)
{
    return serverURL + "?" + "text="+text;
}

function errorHandler(error)
{
    alert("Limit Exceeded\nTry again after some time");
}

function clickme()
{   
    var text = textTranslate.value;
    var url = createURL(text);

    fetch(url)
    .then(response => response.json())
    .then(json => outputText.innerHTML = json.contents.translated)
    .catch(errorHandler);
}

translateBtn .addEventListener("click", clickme );