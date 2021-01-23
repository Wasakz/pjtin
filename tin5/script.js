"use strict";

let newLine = document.createElement("br")

function addDivToBody(){
    let div = document.createElement("div");
    div.innerText = 'DIV'
    div.classList.add('mainDiv')
    document.body.appendChild(div);
}

function addBtnToBody(){
    let btn = document.createElement("button");
    btn.innerText = 'Button'
    document.body.appendChild(btn);
}

for(let i=0; i<4; i++){
    addDivToBody();
}
for(let i=0; i<4; i++){
    addBtnToBody();
}

let button1 = document.getElementsByTagName('button').item(0).onclick = function () {
    let divs = document.getElementsByClassName('mainDiv');
    for (let i = 0; i<divs.length; i++){
        let newDiv = document.createElement("div");
        newDiv.innerText = "Div in a div";
        divs.item(i).appendChild(newDiv);
    }

};

let button2 =  document.getElementsByTagName('button').item(1).onclick = function () {
    let divs = document.getElementsByTagName('div');
    divs.item(0).remove();
};

let button3 =  document.getElementsByTagName('button').item(2).onclick = function () {
    let divs = document.getElementsByTagName('div');
    divs.item(2).style.backgroundColor = "green";
};

let button4 =  document.getElementsByTagName('button').item(3).onclick = function () {
    let divs = document.getElementsByTagName('div');
    for (let i=0; i<divs.length; i++){
        divs.item(i).innerText = "nowy tekst"
        divs.item(i).innerText = "nowy tekst"
    }
};

// zad 2

class Auto {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }
};

let fiat = new Auto(2004, 90000, 10000, 15000);
let mercedes = new Auto(2005, 120000, 20000, 25000);
let volkswagen = new Auto(2018, 40000, 40000, 55000);

let cars = [fiat, mercedes, volkswagen];

let table = document.createElement("table");
table.insertRow();
table.style.width  = '100px';
table.style.border = '1px solid black';


for(let i = 0; i < 3; i++){
    let tr = table.insertRow();
    for(let j = 0; j < 5; j++){
            let td = tr.insertCell();
            if(j===0){
                td.appendChild(document.createTextNode(cars[i].rok));
            }
            if (j===1){
                td.appendChild(document.createTextNode(cars[i].przebieg));
            }
            if (j===2){
                td.appendChild(document.createTextNode(cars[i].cena_wyjsciowa));
            }
            if (j===3){
                td.appendChild(document.createTextNode(cars[i].cena_koncowa));
            }

        }
}

document.body.appendChild(table);

