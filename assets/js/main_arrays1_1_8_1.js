let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let geradeZahlen = zahlen.filter(num => num % 2 === 0)
console.log(geradeZahlen);

let ungeradeZahlen = zahlen.filter(num => num % 2 !== 0)
console.log(ungeradeZahlen);