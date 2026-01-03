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

### Compile TS → JS
terminal run
```css
tsc fileName.ts
```
### Code Run
```ts
node fileName.js
```
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

9️⃣ Union Types
```ts
let id: number | string;

id = 101;
id = "ABC101";
```
## TypeScript Config (tsconfig.json)

Create:
```ts
tsc --init
```

Important options:
```ts
{
  "strict": true,
  "target": "ES6"
}
```
</details>
