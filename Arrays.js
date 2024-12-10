// const stringArray = ["this", "is", "string", "array"];
// const numbers = [1, 2, 3, 4, 5, 6];
// const booleanArray = [true, false];
// const mixedArray = [true, false, 1, 2, 3, 4, 5, "names", "places", "food"];
// console.log(stringArray);
// console.log(numbers);
// console.log(mixedArray);

class myCustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[--this.length];
    return lastItem;
  }
  pop(index) {
    // removing values but not rearranging the index valeus hence fucked up
    const itemAtIndex = this.data[index];
    delete this.data[index];
    return itemAtIndex;
  }

  deleteAtindex(index) {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  shift() {
    // removes first element from list/array
    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      // for in loop didn't work as its not an array
      this.data[i] = this.data[i + 1];
    }
    delete this.data[--this.length]; // here i have done both at once changed length value and deleted last element too
    return firstItem;
  }
}

let myarray = new myCustomArray();

myarray.push("hey");
myarray.push("there");
myarray.push(34);
// console.log(myarray);
// console.log("get method", myarray.get(0));
// console.log(myarray.pop());
console.log(myarray);
// console.log("shift", myarray.shift());
// console.log(myarray);
myarray.pop(1);
console.log(myarray);
