const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];
console.log(heroArr);

let myHeros = heroArr.filter(element => element !== null && element !== undefined)
console.log(myHeros);
