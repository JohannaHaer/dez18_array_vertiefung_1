const zahlen = [12, 25, 7, 18, 30, 5];
console.log(zahlen);

let zahlenKleiner20 = zahlen.filter(num => num <= 20)
console.log(zahlenKleiner20);



let multiplizieren = (zahl) => {
    return zahl *2
    
}
let zahlenMal2 = zahlenKleiner20.map(multiplizieren)
console.log(zahlenMal2);
multiplizieren()