import LinkedList from "./classes/LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.prepend("goldfish");
list.prepend("ardvark");

console.log(list.toString()); // ( ardvark ) -> ( goldfish ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log(`The list size is:`, list.size()); // 8

console.log(list.getHead()); // ( ardvark )
console.log(list.getTail()); // ( turtle )
