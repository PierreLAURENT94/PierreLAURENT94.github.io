var visualisation = document.getElementById("visualisation");
var argent;
var b200cb = document.getElementById("b200cb");
var b100cb = document.getElementById("b100cb");
var b50cb = document.getElementById("b50cb");
var b20cb = document.getElementById("b20cb");
var b10cb = document.getElementById("b10cb");
var sortie;

function Argent(){
    argent = document.getElementById("argent").value;
    sortie = "";
    if(b200cb.checked){
        while(argent >= 200){
            sortie += '<div class="money b200"></div>';
            argent -= 200;
        }
    }
    if(b100cb.checked){
        while(argent >= 100){
            sortie += '<div class="money b100"></div>';
            argent -= 100;
        }
    }
    if(b50cb.checked){
        while(argent >= 50){
            sortie += '<div class="money b50"></div>';
            argent -= 50;
        }
    }
    if(b20cb.checked){
        while(argent >= 20){
            sortie += '<div class="money b20"></div>';
            argent -= 20;
        }
    }
    if(b10cb.checked){
        while(argent >= 10){
            sortie += '<div class="money b10"></div>';
            argent -= 10;
        }
    }
    while(argent >= 5){
        sortie += '<div class="money b5"></div>';
        argent -= 5;
    }
    visualisation.innerHTML = sortie;
}

document.getElementById("appliquer").addEventListener("click", Argent);