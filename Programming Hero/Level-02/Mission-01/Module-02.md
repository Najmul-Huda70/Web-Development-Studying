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

