/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let a;
let b;
let c;

let rand1=Math.random()

function Adjectives(rand1) {
    if(rand1>0.33){
        a="Crazy"
    }
    else if(rand1>0.66){
        a="Amazing"
    }
    else{
        a="Fire"
    }
}

let rand2=Math.random()

function Shop_Name(rand2) {
    if(rand2>0.33){
        b="Engine"
    }
    else if(rand2>0.66){
        b="Limited"
    }
    else{
        b="Garments"
    }
}


let rand3=Math.random()

function Another_Word(rand3) {
    if(rand3>0.33){
        c="Crazy"
    }
    else if(rand3>0.66){
        c="Foods"
    }
    else{
        c="Hub"
    }
}

Adjectives(rand1);
Shop_Name(rand2);
Another_Word(rand3);

console.log(a+b+c)
