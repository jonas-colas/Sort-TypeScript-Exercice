import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([89, 7, 10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection("XyzCaadasd");
const sorterChars = new Sorter(charsCollection);
sorterChars.sort();
console.log(charsCollection.data);