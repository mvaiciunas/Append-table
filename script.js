"use strict";

var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var years = document.getElementById("years");
var add = document.getElementById("add");
var removeFirst = document.getElementById("removeFirst");
var removeLast = document.getElementById("removeLast");
var tbody = document.getElementById("tbody");


add.addEventListener("click", function(){
    var tr = document.createElement("tr");
    tr.className = "tr";
    var td = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");   
    years.value = Number(years.value); 
    
    if(fName.value == "" || lName.value == "" ){
        alert("Įveskite duomenis");        
    } else if(years.value > 0 ){   
        tbody.append(tr);
        tr.append(td, td1, td2);
        td.innerHTML = fName.value;
        td1.innerHTML = lName.value;
        td2.innerHTML = years.value; 
    } else {
        alert("Įveskite duomenis");
    }

    fName.value = "";
    lName.value = "";
    years.value = "";  

});

removeFirst.addEventListener("click", function(){
    var tr = document.getElementsByClassName("tr");
    if(tr.length){
        tr[0].remove();
    } else {
        alert("Nėra ką trinti");
    }
});

removeLast.addEventListener("click", function(){
    var tr = document.getElementsByClassName("tr");
    if(tr.length){
        tr[tr.length - 1].remove();
    } else {
        alert("Nėra ką trinti");
    }
});
