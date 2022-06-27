let tablica;

function randomNumber() {



let randomNumber1 = Math.floor((Math.random()*20) +1);
let randomNumber2 = Math.floor((Math.random()*12)+5);
let randomNumber3 = Math.floor((Math.random()*13)+1);
let randomNumber4 = Math.floor((Math.random()*14)+4);
let randomNumber5 = Math.floor((Math.random()*33)+2);
let randomNumber6 = Math.floor((Math.random()*24)+3);
let randomNumber7 = Math.floor((Math.random()*40)+2);

tablica = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5, randomNumber6, randomNumber7]

console.log("My number " + tablica[0])
document.getElementById("nieposortowana"). textContent = tablica;
}

function sort(){

        let wielkoscTablicy = tablica.length;
        for (let i = 0; i < wielkoscTablicy; i++)
        {
             for (let j = 0; j< wielkoscTablicy - 1; j ++)
             {
                 if ( tablica[j] > tablica[j+1])
                 {
                     let tymczasowa = tablica [j];
                     tablica [j] = tablica [j + 1];
                     tablica[j+1] = tymczasowa;
                 }
             }
        }
        document.getElementById("posortowane").textContent = tablica;
}



var massiv = [1, 2, 3, 5, 3]

let wyn = massiv.map(i=>x+=i, x=0).reverse()[0]
console.log(wyn+ "перший")
// console.log(tab1+tab2)


