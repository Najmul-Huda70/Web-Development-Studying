# [TypeScript Documentation](https://www.typescriptlang.org/docs/)
# Programming Hero [repository](https://github.com/Apollo-Level2-Web-Dev/be-a-typescript-technocrat/tree/module-5)
<details>
  <summary><h1>Install : Node.js + NVM + TypeScript</h1> </summary>

  ## 1️⃣ What is NVM?

NVM (Node Version Manager) allows you to install and manage multiple versions of Node.js on the same machine.

### Why use NVM?

- Switch Node versions easily

- Use different Node versions for different projects

- Install the latest or LTS version safely

## 2️⃣ Install NVM 
- [download](https://www.nvmnode.com/guide/download.html)
- Command Prompt / PowerShell
  ```arduino
  nvm-setup.exe
  ```
- Verify installation
  ```arduino
  nvm -v
  ```
Linux / macOS
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Then run:
```bash
source ~/.bashrc
nvm --version
```
## 3️⃣ Install Node.js using NVM

🔹 Show available Node versions
```bash
nvm ls
```
- Download [Node.js](https://nodejs.org/en/download)
  
🔹 Verify installation
```bash
node -v
npm -v
```
## 4️⃣ Initialize a New Project (npm init)
```bash
npm init -y
```

✔ This creates a package.json file.

## 5️⃣ Install TypeScript
🔹 Global Installation
```bash
npm install -g typescript
```

Check version:
```bash
tsc -v
```
🔹 Local Installation
```bash
npm install --save-dev typescript
```
Created a new tsconfig.json
```bash
tsc --init
```
then terminal run 
```ts
tsc
```
created output directory folder 'dist'
then code run 
```ts
node ./src/fileName.ts
```
### Compile TS → JS
terminal run
```css
tsc fileName.ts
```
### Code Run
```ts
node fileName.js
```
Important options:
```ts
{
  "strict": true,
  "target": "ES6"
}
```
</details>

<details>
  <summary><h1>Lern TypeScript</h1></summary>
  
## What is TypeScript?

TypeScript = JavaScript + Types

Created by Microsoft

Superset of JavaScript (all JS code is valid TS)

Adds static typing

Converts (compiles) to JavaScript

Why use TypeScript?

✔ Fewer bugs

✔ Better code readability

✔ Excellent for large projects

✔ Required/used in React, Next.js, Node.js jobs

## TypeScript vs JavaScript

| JavaScript                  | TypeScript             |
| --------------------------- | ---------------------- |
| Dynamic typing              | Static typing          |
| Errors at runtime           | Errors at compile time |
| Hard to maintain large apps | Easy to maintain       |
| No type safety              | Type safety            |

## Primitive Types
TypeScript primitive types:

| Type        | Description                        | Example                             |
| ----------- | ---------------------------------- | ----------------------------------- |
| `string`    | Text / character data              | `let name: string = "Najmul";`      |
| `number`    | All numbers (int, float, negative) | `let age: number = 22;`             |
| `boolean`   | Logical true / false               | `let isValid: boolean = true;`      |
| `null`      | Intentional empty value            | `let data: null = null;`            |
| `undefined` | Value not assigned yet             | `let value: undefined = undefined;` |
| `symbol`    | Unique identifier                  | `let id: symbol = Symbol("id");`    |
| `bigint`    | Very large numbers                 | `let big: bigint = 123456789n;`     |

🔍 Special Usage (Important)

| Scenario       | Example                            |
| -------------- | ---------------------------------- |
| Nullable value | `let user: string \| null = null;` |
| Optional value | `let token: string \| undefined;`  |
| Type inference | `let count = 10; // number`        |

⚖️ null vs undefined

| null                | undefined        |
| ------------------- | ---------------- |
| Intentionally empty | Not assigned     |
| Manual              | Automatic        |
| API returns empty   | Variable missing |

Example:

```ts
let username: string = "Najmul";
let age: number = 22;
let isStudent: boolean = true;
```

# Nonprimitive types

Array
```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Ali", "Rahim"];
```
Any (avoid if possible)
```ts
let data: any = 10;
data = "Hello";
```

## Functions in TypeScript
```ts
function greet(name: string): string {
  return "Hello " + name;
}

console.log(greet("Najmul"));
```

Arrow function:
```ts
const sum = (a: number, b: number): number => a + b;
```

## Objects & Type Alias
```ts
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const user: User = {
  name: "Najmul",
  age: 22,
  isAdmin: false
};
```

## Interface (Very Important for React)
```ts
interface Person {
  name: string;
  age: number;
}

const p1: Person = {
  name: "Huda",
  age: 23
};
```
Type vs Object Type vs Interface
| Feature              | `object` type           | `type`               | `interface`                |
| -------------------- | ----------------------- | -------------------- | -------------------------- |
| What it is           | Generic object type     | Type alias           | Object structure blueprint |
| Used for             | Any non-primitive value | Alias for any type   | Defining object shape      |
| Syntax               | `let x: object`         | `type User = {}`     | `interface User {}`        |
| Supports primitives  | ❌ No                    | ✅ Yes                | ❌ No                       |
| Supports union types | ❌ No                    | ✅ Yes                | ❌ No                       |
| Extend / inherit     | ❌ No                    | ✅ (intersection `&`) | ✅ (`extends`)              |
| Re-open / merge      | ❌ No                    | ❌ No                 | ✅ Yes                      |
| Best for objects     | ❌ Weak                  | ✅ Yes                | ✅ Best                     |
| Used in React        | ❌ Rare                  | ✅ Yes                | ✅ Very common              |

object type
```ts
let data: object;
data = { name: "Najmul" };
data = [];   // valid
data = () => {}; // valid
```

⚠️ No property safety.
```ts
type
type User = {
  name: string;
  age: number;
};

type ID = string | number;
```

✔ Flexible & powerful.

interface
```ts
interface User {
  name: string;
  age: number;
}
```

✔ Clean & extendable.

*** Use interface for objects, type for flexibility, avoid plain object.

# 🔹 Rest & Spread Operator in TypeScript

Same syntax (...) but different meanings depending on usage.

## 1️⃣ Rest Operator (...)

👉 Collects multiple values into one

🔸 In Function Parameters
```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10
```

✔ Converts many arguments → array

### 🔸 In Destructuring
```ts
const colors = ["red", "green", "blue", "yellow"];

const [first, second, ...others] = colors;

console.log(others); // ["blue", "yellow"]
```
## 2️⃣ Spread Operator (...)

👉 Expands values

🔸 Spread with Arrays
```ts
const a = [1, 2, 3];
const b = [...a, 4, 5];

console.log(b); // [1,2,3,4,5]
```
🔸 Spread with Objects
```ts
const user = { name: "Najmul", age: 22 };

const updatedUser = { ...user, age: 23 };

console.log(updatedUser);
```

✔ Used heavily in React state updates

🔸 Spread in Function Call
```ts
const nums = [5, 10, 15];

function add(a: number, b: number, c: number) {
  return a + b + c;
}

add(...nums);
```
# 🔁 Rest vs Spread (Quick Difference)

| Feature  | Rest            | Spread            |
| -------- | --------------- | ----------------- |
| Meaning  | Collect         | Expand            |
| Position | Left side       | Right side        |
| Use case | Function params | Copy / merge      |
| Output   | Array           | Individual values |

## Union & Intersection Types in TypeScript

9️⃣ Union Types
```ts
let id: number | string;

id = 101;
id = "ABC101";
```
```ts
// union |

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User dashboard";
  } else {
    return "guest dashboard";
  }
};

getDashboard("guest");

// intersection &

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phoneNo: "017",
  designation: "manager",
  teamSize: 20,
};
```
## ternary, nullish coalescing & optional chaining
| Operator | Symbol | Purpose           |
| -------- | ------ | ----------------- |
| Ternary  | `? :`  | Conditional logic |
| Nullish  | `??`   | Default value     |
| Optional | `?.`   | Safe access       |

### 1️⃣ Ternary Operator (? :)

👉 Short form of if-else

Syntax
```ts
condition ? valueIfTrue : valueIfFalse;
```
Example
```ts
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
```
Nested Ternary
```ts
let score = 85;

let grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  "C";
```

✔ Use for simple conditions

❌ Avoid for complex logic

### 2️⃣ Nullish Coalescing (??)

👉 Fallback only if value is null or undefined

Syntax
```ts
value ?? defaultValue
```
🔸 Example
```ts
let username: string | null = null;

let displayName = username ?? "Guest";
```
❗ Difference with OR (||)
```ts
let count = 0;

console.log(count || 10); // 10 ❌
console.log(count ?? 10); // 0 ✅
```
Operator	Triggers when
`	
??	only null or undefined
### 3️⃣ Optional Chaining (?.)

👉 Safely access nested properties

Syntax
```ts
obj?.property
obj?.method()
arr?.[index]
```
🔸 Example
```ts
type User = {
  name: string;
  address?: {
    city: string;
  };
};

const user: User = { name: "Najmul" };

console.log(user.address?.city); // undefined
```

❌ Without optional chaining → runtime error

🔸 Optional Chaining with Function
```ts
type Api = {
  fetchData?: () => string;
};

api.fetchData?.();
```
</details>
