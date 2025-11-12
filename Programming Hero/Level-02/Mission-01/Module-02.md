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

# 🧩 1️⃣ Sorting Numbers (Ascending)
```js
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers);
```
** .sort() by default sorts as strings, not numbers.

-> So [40, 100, 1] → "100" comes before "40" lexicographically.

** To sort numerically, you must provide a compare function:
```js
(a, b) => a - b
```
# Output:
```js
[1, 5, 10, 25, 40, 100]
```
# 🧩 2️⃣ Sorting Strings (Ascending)
```js
const fruits = ["Banana", "apple", "Cherry", "date"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);
```
** localeCompare() compares two strings alphabetically, considering case and language rules.

** "Banana".localeCompare("apple") → returns negative (so Banana comes before apple by ASCII, but localeCompare adjusts based on alphabet order).

# ✅ Output:
```js
["apple", "Banana", "Cherry", "date"]
```
# 🧩 3️⃣ Sorting Numbers (Descending)
```js
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => b - a);
console.log(numbers);
```
(b - a) means largest first → smallest last.
# ✅ Output:
```js
[100, 40, 25, 10, 5, 1]
```
# 🧩 4️⃣ Sorting Strings (Descending)
```js
const fruits = ["Banana", "apple", "Cherry", "date"];
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits);
```
So Z → A order (case-insensitive, locale-aware)
# ✅ Output:
```js
["date", "Cherry", "Banana", "apple"]
```
# 🧩 5️⃣ Flattening Nested Arrays
```js
const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];
const flatrArray = arr.flat(Infinity);
console.log(flatrArray);
```
.flat(depth) removes nested arrays up to the given depth level.
Example:

.flat(1) → removes one level of nesting.

.flat(2) → removes two levels.

.flat(Infinity) → removes all levels (completely flattens).

# ✅ Output:
```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```
| Concept               | Method                               | Example                                 | Description         |
| --------------------- | ------------------------------------ | --------------------------------------- | ------------------- |
| Numeric ascending     | `sort((a, b) => a - b)`              | `[1, 5, 10, 25, 40, 100]`               | Small → big         |
| Numeric descending    | `sort((a, b) => b - a)`              | `[100, 40, 25, 10, 5, 1]`               | Big → small         |
| String ascending      | `sort((a, b) => a.localeCompare(b))` | `["apple", "Banana", "Cherry", "date"]` | A → Z               |
| String descending     | `sort((a, b) => b.localeCompare(a))` | `["date", "Cherry", "Banana", "apple"]` | Z → A               |
| Flatten nested arrays | `flat(Infinity)`                     | `[1,2,3,...]`                           | Removes all nesting |
# combines array flattening (flat) with Set to remove duplicate tags
a very common real-world JavaScript technique.
```js
const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filterTags = [...new Set(tagsFromPosts.flat())];
console.log(filterTags);
```
# 🔍 Step 1 — Original Data

tagsFromPosts is an array of arrays — each inner array represents tags from a single blog post.
```js
[
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"]
]
```
# 🔍 Step 2 — Flatten the Array

You call .flat() with no argument, which defaults to depth = 1, removing one level of nesting.
```js
tagsFromPosts.flat()
```

## Output:
```js
["javascript", "react", "css", "node", "express", "css", "html", "react"]
```

Now you have one single array of all tags (but with duplicates).

# 🔍 Step 3 — Remove Duplicates with Set

new Set() stores unique values only.
```js
new Set(["javascript", "react", "css", "node", "express", "css", "html", "react"])
```

## Output (Set):
```js
Set(7) { "javascript", "react", "css", "node", "express", "html" }
```

# 🔍 Step 4 — Convert Set Back to Array

You use the spread operator (...) inside [ ] to make a new array from that Set:
```js
[...new Set(tagsFromPosts.flat())]
```

## Final Output:
```js
["javascript", "react", "css", "node", "express", "html"]
```
| Concept        | Description                                     | Example                            |
| -------------- | ----------------------------------------------- | ---------------------------------- |
| `.flat()`      | Flattens nested arrays into one array           | `[1,[2,3]].flat() → [1,2,3]`       |
| `new Set()`    | Keeps only unique values                        | `new Set([1,1,2]) → {1,2}`         |
| `...` (spread) | Expands a Set or array into individual elements | `[...new Set(...)]` = unique array |
