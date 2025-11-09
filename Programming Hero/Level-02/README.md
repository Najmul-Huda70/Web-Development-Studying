# Mission-01 
## Module-01
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
