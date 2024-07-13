// 1. The Magical Sorting Hat:
//    ---------------------------
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student 
//    names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), 
//    Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


let houses=["jitu","varalakshmi","anitha lankapalli","kiitubhai","pooothi Noodles","itz syam","mrs_bondam","jitu ka party time","certified as psycho","mahi","Anushka Sharma"]

function Magical_Sorting_Hat(names) {
    z={};
    for (const i of names) {
        if(i.length<6){
            z[i]="Gryffindor";
        }
        else if(i.length<8){
            z[i]="Hufflepuff";
        }
        else if(i.length<=8){
            z[i]="Ravenclaw";
        }
        else{
            z[i]="Slytherin";
        }
    }
    return z;
}


let k=Magical_Sorting_Hat(houses);
console.log(k)

for (const key in k) {
    if (Object.hasOwnProperty.call(k, key)) {
        const element = k[key];
        console.log(key+"-"+element)
        
    }
}