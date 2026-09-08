/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
  sellingPrice: number;
  stockQuantity: number;
  productWeight: number;
  averageCustomerRating: number;
  isDiscounted: boolean;
};  

const product1: Product = {
  productCode: "PRD001",
  productName: "Comic Book",
  sellingPrice: 120000,
  stockQuantity: 70,
  productWeight: 1.0,
  averageCustomerRating: 4.5,
  isDiscounted: false
};

const product2: Product = {
  productCode: "PRD002",
  productName: "Iphone 15 Pro Max",
  sellingPrice: 14000000,
  stockQuantity: 50,
  productWeight: 2.0,
  averageCustomerRating: 5.0,
  isDiscounted: true
};

const product3: Product = {
  productCode: "PRD003",
  productName: "Bluetooth Headphones",
  sellingPrice: 250000,
  stockQuantity: 75,
  productWeight: 0.3,
  averageCustomerRating: 4.2,
  isDiscounted: false
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);