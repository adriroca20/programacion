var btn= document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

btn.addEventListener("click",function(){
    var ourRequest= new XMLHttpRequest();
    ourRequest.open("GET","https://learnwebcode.github.io/json-example/animals-1.json");
    ourRequest.onload = function(){
        var ourData= JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});

var i=0;
function renderHTML(data){
    if(i<data.length){
        animalContainer.insertAdjacentHTML("beforeend", data[i].name + "<br>");
        i++;
    }
    if(i==(data.length)){
        i=0;
    }
}
