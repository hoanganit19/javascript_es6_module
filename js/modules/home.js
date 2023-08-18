import { products } from "./products.js";

export const a = 10;

export function getA() {
  return "Xin chào";
}

export class Home {
  render() {
    return "HomePage";
  }
}

export const getProducts = () => {
  return products;
};

export default function getB() {
  return "Hello An";
}

//export default
// export default { a, getA };

// export { a, getA, Home };
