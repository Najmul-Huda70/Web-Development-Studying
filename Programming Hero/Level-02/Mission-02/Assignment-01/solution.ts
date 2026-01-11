const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  if (typeof value === "boolean") return !value;
  return value;
};

const getLength = (value: string | any[]): number => {
  return value.length;
};
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name:${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4.0 && item.rating <= 5.0);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (books: Book) => {
  const { title, author, publishedYear, isAvailable } = books;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable === true ? "Yes" : "No"
    }`
  );
};

type Id = (string | number)[];
const getUniqueValues = (arr1: Id, arr2: Id): Id => {
  const ans: Id = [];
  for (let i = 0; i < arr1.length; i++) {
    let found: boolean = false;
    for (let j = 0; j < ans.length; j++) {
      if (arr1[i] === ans[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      ans.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let found: boolean = false;
    for (let j = 0; j < ans.length; j++) {
      if (arr2[i] === ans[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      ans.push(arr2[i]);
    }
  }
  return ans;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
  let total_price: number = products.reduce(
    (sum, product) =>
      sum +
      product.quantity *
        (product.price - (product.price * (product.discount ?? 0)) / 100),
    0
  );

  return total_price;
};
