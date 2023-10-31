// Js- Vertiefung Array Lvl 1.1

const person =["nett", "schlau", "dumm"];
const friends = ["Yusuf", "Paddy", "Pasko"];
const favoriteFood = ["Pizza", "Ciköfte", "Dolma"];

console.log(person);
console.log(friends);
console.log(favoriteFood);
console.clear();


// Js- Vertiefung Array Lvl 1.2

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

console.clear();

// Js- Vertiefung Array Lvl 1.3
console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

console.clear();


// Js- Vertiefung Array Lvl 1.4

const autoListe = ["BMW","Audi"]
console.log(autoListe);

const autoListeLänge = autoListe.push("Mercedes", "Opel")
console.log(autoListeLänge);// zeigt die neue länge der liste an
console.log(autoListe);

console.clear();


// Js- Vertiefung Array Lvl 1.5

const entferntLetztesElement = autoListe.pop();
console.log(autoListe);
console.log(entferntLetztesElement);// zeigt das letzte element, dass entfernt wurde

const lastElemetOfFavoriteFood = favoriteFood.pop();
console.log(favoriteFood);
console.log(lastElemetOfFavoriteFood);// zeigt das letzte element, dass entfernt wurde

console.clear();


// Js- Vertiefung Array Lvl 1.6

const firstElementOfPerson = person.shift();
console.log(person);
console.log(firstElementOfPerson);

console.clear();


// Js- Vertiefung Array Lvl 1.7

const newFriends = friends.unshift("Pablo", "Dino");
console.log(friends);
console.log(newFriends);// auch hier wird die länge ausgegeben wie bei push()
const newFavoriteFoods = favoriteFood.unshift("Döner", "Gebratene Nudeln");
console.log(favoriteFood);
console.log(newFavoriteFoods);// auch hier wird die länge ausgegeben wie bei push()

console.clear();


// Js- Vertiefung Array Lvl 1.7

const numArr = [23,54,75];
const numArrPush = numArr.push(5,4,3,2,1);
console.log(numArr);
console.log(numArrPush);

const numArrUnshift = numArr.unshift(5,4,3,2,1);
console.log(numArr);
console.log(numArrUnshift);

const numArrPop = numArr.pop(2,1);
console.log(numArr);
console.log(numArrPop);

const numArrShift = numArr.shift(2,1);
console.log(numArr);
console.log(numArrShift);

console.clear();
