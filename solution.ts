const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name : ${this.name}, Age : ${this.age}'`;
  }
}

const filterByRating = (
  books: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  const filterBooks = books.filter((book) => book.rating >= 4);
  return filterBooks;
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
const printBookDetails = (myBook: Book) => {
  return `Title: ${myBook.title}, Author: ${myBook.author}, Published: ${
    myBook.publishedYear
  }, Available: ${myBook.isAvailable ? "Yes" : "No"}`;
};

const getUniqueValues = <T extends string | number>(
  array1: T[],
  array2: T[]
): T[] => {
  const result: T[] = [];
  const exist = (arr: T[], value: T) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return;
    }
    arr[arr.length] = value;
  };
  for (let i = 0; i < array1.length; i++) {
    const val = array1[i];
    if (val !== undefined) exist(result, val);
  }
  for (let i = 0; i < array2.length; i++) {
    const val = array2[i];
    if (val !== undefined) exist(result, val);
  }
  return result;
};
type Products = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Products[]): number => {
  return products.reduce((sum, product) => {
    const total = product.price * product.quantity;
    const discountAmount = product.discount
      ? (total * product.discount) / 100
      : 0;
    return sum + (total - discountAmount);
  }, 0);
};


