import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([89, 7, 10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection("XyzCaadasd");
// const sorterChars = new Sorter(charsCollection);
// sorterChars.sort();
charsCollection.sort();
console.log(charsCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(2);
linkedList.add(8);
linkedList.add(1);
linkedList.add(3);

// const sorterLink = new Sorter(linkedList);
// sorterLink.sort();
linkedList.sort();
linkedList.print();