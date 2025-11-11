# 🧩 1. Objects in JavaScript
### Objects are key–value pairs where:

1. Keys are strings (or symbols)

2. Values can be any data type

### the object has 3 keys:

1. "nextLevel"

2. "Programming Hero"

3. "true" (⚠️ yes — as a string!)
```js
const obj = {
  nextLevel: { courseId: "Level2" },
  "Programming Hero": { courseId: "Level1" },
  true: { courseId: "ase" },
};
```
### Accessing properties
1. Dot notation → only works for keys that look like simple variable names (a, myValue, nextLevel).
```js
console.log(obj.nextLevel);        // dot notation
```
2. Square bracket notation → always works (you can use variables, strings, or special characters).
```js
console.log(obj["Programming Hero"]); // square bracket notation
```
```js
console.log(obj.true);
console.log(obj["true"]);
```
3. All object keys (except symbols) are stored as strings, even numbers and booleans.
```js
const test = {
  10: "ten",
  true: "yes",
};

console.log(test["10"]);  // "ten"
console.log(test[10]);    // also "ten" because 10 → "10"
console.log(test["true"]); // "yes"
console.log(test[true]);   // also "yes" because true → "true"
```
### ✅ Uses:

1. Storing structured data (like a student, product, etc.)

2. Quick property access using keys

# ⚠️ 2. Limitations of Objects
### ❌ Limitation 1: Keys are always strings (or symbols)

Even if you use a number, boolean, or object — JavaScript converts it to a string.
```js
const obj = {};
obj[10] = "Ten";
obj[{a: 1}] = "Object Key";

console.log(obj); // { '10': 'Ten', '[object Object]': 'Object Key' }
```

👉 See? The object key {a:1} becomes "[object Object]".

### ❌ Limitation 2: No direct size property

You can’t easily know how many properties an object has.
```js
const person = { name: "Rafi", age: 22 };
console.log(Object.keys(person).length); // 2 (you have to use Object.keys)
```
### ❌ Limitation 3: Keys can conflict with built-in properties

If you add a key that already exists on the object prototype, you can get weird results.
```js
const obj = {};
obj.toString = "Hello";
console.log(obj.toString); // "Hello" (overrides built-in toString)
```
### ❌ Limitation 4: No guaranteed key order (in older JS)

Before ES6, key order in objects wasn’t guaranteed (now mostly predictable but not ideal).

# 🌟 3. Map — The Better Alternative

A Map is also a key–value collection, but more powerful and flexible.

### ✅ Map Features:

Keys can be any type (object, number, boolean, etc.)

Keeps keys in insertion order

Has a built-in size property

Easier iteration (map.forEach, map.keys(), etc.)

### 🧠 Example:
```js
const myMap = new Map();

myMap.set("name", "Nafis");
myMap.set(10, "Number Key");
myMap.set(true, "Boolean Key");
myMap.set({ id: 1 }, "Object Key");

console.log(myMap.get("name")); // Nafis
console.log(myMap.get(10));     // Number Key
console.log(myMap.get(true));   // Boolean Key

console.log(myMap.size);        // 4
```

### 🔁 Iterating through a Map
```js
myMap.forEach((value, key) => {
  console.log(key, "=>", value);
});
```

#### Or use for...of:
```js
for (let [key, value] of myMap) {
  console.log(key, ":", value);
}
```

### 🧹 Delete / Check / Clear
```js
myMap.delete(10);   // remove key 10
console.log(myMap.has("name")); // true
myMap.clear();      // removes everything
```
| Method          | Description                  | Returns  |
| --------------- | ---------------------------- | -------- |
| `map.entries()` | Returns `[key, value]` pairs | Iterator |
| `map.keys()`    | Returns all keys             | Iterator |
| `map.values()`  | Returns all values           | Iterator |

### 💡 When to Use:
| Use Case                                                               | Choose |
| ---------------------------------------------------------------------- | ------ |
| Simple data with string keys                                           | Object |
| Need any type as key, maintain order, or frequently add/remove entries | Map    |

# The Core Transformation Toolkit (map, filter, sort, slice)
#### filter → sort → slice → map
### Input
```js
//? Input
const rawApiData = [
  {
    id: "p-001",
    productName: "Quantum Laptop",
    category: "Electronics",
    price: 1200,
    rating: 4.8,
    stock: 15,
  },
  {
    id: "p-002",
    productName: "The Art of Code",
    category: "Books",
    price: 45,
    rating: 4.5,
    stock: 100,
  },
  {
    id: "p-003",
    productName: "Cyber Hoodie",
    category: "Clothing",
    price: 80,
    rating: 4.7,
    stock: 50,
  },
  {
    id: "p-004",
    productName: "4K Drone",
    category: "Electronics",
    price: 650,
    rating: 4.3,
    stock: 20,
  },
  {
    id: "p-005",
    productName: "Basic JavaScript",
    category: "Books",
    price: 25,
    rating: 3.8,
    stock: 200,
  },
  {
    id: "p-006",
    productName: "Smart Watch",
    category: "Electronics",
    price: 250,
    rating: 4.7,
    stock: 70,
  },
  {
    id: "p-007",
    productName: "Classic T-Shirt",
    category: "Clothing",
    price: 30,
    rating: 4.2,
    stock: 300,
  },
  {
    id: "p-008",
    productName: "Design Patterns",
    category: "Books",
    price: 55,
    rating: 4.9,
    stock: 80,
  },
  {
    id: "p-009",
    productName: "VR Headset",
    category: "Electronics",
    price: 400,
    rating: 4.6,
    stock: 30,
  },
  {
    id: "p-010",
    productName: "USB-C Cable",
    category: "Electronics",
    price: 15,
    rating: 4.0,
    stock: 500,
  },
  {
    id: "p-011",
    productName: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 300,
    rating: 4.7,
    stock: 40,
  },
  {
    id: "p-012",
    productName: "Algorithms Explained",
    category: "Books",
    price: 50,
    rating: 4.5,
    stock: 60,
  },
];
```
### Output Format
Take rawApiData and produce the top 3 Electronics products by rating, returning an array of objects shaped like:
```js
[{ name: "Phone" }, { name: "Smart Watch" }]
```
Actual result depends on ratings in the input.
### Final Code
```js
const topElectronicProduct = rawApiData
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((item) => ({ name: item.productName }));
```
### filter: O(n)
selects items, returns a new array.
```js
.filter((item) => item.category == "Electronics")
```
i) Keeps only items for which the callback returns true.

ii) Here it keeps only objects with category equal to "Electronics".

Note: prefer === instead of == for strict comparison: item.category === "Electronics".

### sort: O(n log n)
orders items in-place (mutates that array) using comparator.
```js
.sort((a, b) => b.rating - a.rating)
```
i) Sorts the filtered array in-place (important!) by rating descending.

ii) The comparator returns:

positive → a should come after b  → b than a

negative → a should come before b  → a than b

zero → equal order (ties)

** b.rating - a.rating = sorts highest ratings first  → decreasing order

** a.rating - b.rating = sorts lowest ratings first  → Increasing order

### slice: O(k) (copying k items)
copies a subarray (no mutation).
```js
.slice(0, 3)
```
i) Returns a shallow copy of the array from index 0 (inclusive) to 3 (exclusive).

ii) So it picks the first 3 elements (top 3).

iii) slice does not mutate the array.
### map: O(k) (transform k items)
transforms each item, returns a new array.
```js
.map((item) => ({ name: item.productName }));
```
i) Transforms each element into a new object with shape { name: <productName> }.

ii) Using parentheses ({ ... }) returns the object literal from the arrow function in one line.

iii) .map returns a new array; original items are untouched.
