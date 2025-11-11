# Module-01 [Repository](https://github.com/Apollo-Level2-Web-Dev/critical-thinking/tree/main/module-01)
### 1-8 Hands on experiment to understand Big-O notation of basic Array methods
| Function            | Measures from        | Precision                   | Use case                 |
| ------------------- | -------------------- | --------------------------- | ------------------------ |
| `Date.now()`        | January 1, 1970      | milliseconds (less precise) | Current date/time        |
| `performance.now()` | Page or script start | microseconds (more precise) | Measuring execution time |

```js
const startTime = performance.now();

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const endTime = performance.now();
console.log(`This code took time ${endTime - startTime} ms`);
```
time()
```js
console.time("task");
for (let i = 0; i < 100; i = i + 5) {
  console.log(i);
}
console.timeEnd("task");
```
#### 🧱 1️⃣ What is an Array?
An Array is an ordered list of values — like a collection where each item has a position (index).
```js
let fruits = ["apple", "banana", "cherry"];
```
#### 📘 Access elements
```js
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"
```
Indexes start from 0.
#### ✏️ Modify elements
```js
fruits[1] = "mango"; // replaces banana
console.log(fruits); // ["apple", "mango", "cherry"]
```
#### ➕ Add elements
```js
fruits.push("orange"); // add at end
console.log(fruits); // ["apple", "mango", "cherry", "orange"]
```
#### ➖ Remove elements
```js
fruits.pop(); // removes last item
console.log(fruits); // ["apple", "mango", "cherry"]
```
#### 🔁 Loop through array
```js
for (let fruit of fruits) {
  console.log(fruit);
}
```
Output:
```css
apple
mango
cherry
```
```js
const firstArray = [];
const secondArray = [];
for (let i = 1; i <= 10000; i++) {
  if (i < 5001) firstArray.push(i);
  secondArray.push(i);
}
console.log("firstArray: ", firstArray.length);
console.log("secondArray: ", secondArray.length);

console.time("Map1");
const firstUserList = firstArray.map((number) => {
  userId: number;
});
console.timeEnd("Map1");
console.time("map2");
const secondUserList = secondArray.map((number) => ({ userId: number }));
console.timeEnd("map2");
```
Output: 
```nginx
firstArray:  5000
secondArray:  10000
Map1: 0.328ms
map2: 2.179ms
```
### 1-9 Basic interactions of Set datastructure
#### 🧮 2️⃣ What is a Set?
A Set is a special object that stores unique values — duplicates are automatically removed.

Example:
```js
let numbers = new Set([1, 2, 3, 3, 2, 1]);
console.log(numbers); // Set(3) {1, 2, 3}
```
See? Duplicates are gone!
#### ➕ Add elements
```js
numbers.add(4);
console.log(numbers); // Set(4) {1, 2, 3, 4}
```
#### ❌ Delete elements
```js
numbers.delete(2);
console.log(numbers); // Set(3) {1, 3, 4}
```
#### 🔍 Check if value exists
```js
console.log(numbers.has(3)); // true
console.log(numbers.has(5)); // false
```
#### 🧹 Clear all values
```js
numbers.clear();
console.log(numbers.size); // 0
```
#### 🔁 Loop through a Set
```js
let setExample = new Set(["a", "b", "c"]);
for (let item of setExample) {
  console.log(item);
}
```
Output:
```css
a
b
c
```
#### 🔁 Loop through a Set - forEach()

```js
let mySet = new Set(["apple", "banana", "cherry"]);
mySet.forEach((element) => console.log(element));
```
```nginx
apple
banana
cherry
```
#### ⚖️ 3️⃣ Array vs Set — Comparison Table
| Feature         | **Array**                                  | **Set**                     |
| --------------- | ------------------------------------------ | --------------------------- |
| Order           | Ordered (keeps index)                      | Ordered (insertion order)   |
| Duplicates      | ✅ Allowed                                  | ❌ Not allowed               |
| Access by index | ✅ Yes (`arr[1]`)                           | ❌ No (must loop or convert) |
| Length          | `.length`                                  | `.size`                     |
| Use case        | Store list with duplicates or index access | Store unique values         |


#### 🔄 4️⃣ Convert between Array and Set
➤ Array → Set (remove duplicates)
```js
let nums = [1, 2, 2, 3, 3];
let uniqueNums = new Set(nums);
console.log(uniqueNums); //Set(3) {1, 2, 3}
```
➤ Set → Array
```js
let uniqueNums = new Set([1, 2, 2, 3, 3]);
//let arr = Array.from(uniqueNums);
let arrFromSet = [...uniqueNums];
console.log(arrFromSet); // [1, 2, 3]
```
#### 🧠 5️⃣ Real Example — Remove Duplicates from an Array
```js
let names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
let uniqueNames = [...new Set(names)];
console.log(uniqueNames); // ["Alice", "Bob", "Charlie"]
```
Simple and powerful!
| Task              | Array Example          | Set Example                   |
| ----------------- | ---------------------- | ----------------------------- |
| Create            | `let arr = [1, 2, 3];` | `let s = new Set([1, 2, 3]);` |
| Add               | `arr.push(4)`          | `s.add(4)`                    |
| Remove            | `arr.pop()`            | `s.delete(4)`                 |
| Check exists      | `arr.includes(2)`      | `s.has(2)`                    |
| Length            | `arr.length`           | `s.size`                      |
| Remove duplicates | `new Set(arr)`         | (already unique)              |

