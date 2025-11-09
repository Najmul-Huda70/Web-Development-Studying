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
