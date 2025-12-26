# Install : Node.js + NVM + TypeScript
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
