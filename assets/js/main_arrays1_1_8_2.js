const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];
console.log(woerter);

let func = () => {
    let result = woerter.filter(wort => wort.length <= 6)
    console.log(result);
}

func()


let result = woerter.filter(wort => wort.length <= 6)
console.log(result);

