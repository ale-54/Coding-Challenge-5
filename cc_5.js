//Task 1: Object Properties
const customer = {
    name: "John Doe", age: 35, email: "john.doe@email.com"
}; //customer profile information
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);
//logged all customer info for displaying (name, age, email)

//Task 2: Object Details
const order = {
    orderId: 12345, totalAmount: 150, status: "Processing",
 //order details
displayOrder() {
    console.log
    (`Order ID: ${this.orderId}`,
    `Total Amount: $${this.totalAmount}`,
    `Order Status: ${this.status}`)
    } //logging the order details and separated in each line
};
order.displayOrder(); //displaying the order

//Task 3: Array Manipulation (push, pop, shift, unshift)
let cartItems = [`Hamster`, `Minecraft Java Edition`, `Bread`]; //array of 3 product items
cartItems.push(`Worcestershire Sauce`); //adding product to cart
cartItems.pop(); //removing last item, Worcestershire Sauce
cartItems.unshift(`Burberry Her EDT`); //adding product to beginning of cart
cartItems.shift(); //removing first item in cart, Burberry Her EDT
console.log(`Cart Items: `, cartItems); //displaying cart items: hamster, minecraft java edition, bread

//Task 4: Map Method
let prices = [100, 200, 300];
let discountPrice = prices.map(prices => prices * .9); //applying a 10% discount to each price
console.log(`Discounted Prices: `, discountPrice); //displaying the discount prices of the array

//Task 5: Filter Method
let inventory = [0, 12, 53, 4, 95]; //product quantities
let inStock = inventory.filter(stock => stock > 0 ); //filtering out products with zero (0) stock
console.log(`Product Stock: `, inStock); //displaying the updated array

//Task 6: Reduce Method
let sales = [500, 300, 200, 400];
let totalRevenue = sales.reduce((total, sales) => total + sales, 0); //calculating total revenue
console.log(`Total Revenue: `, totalRevenue); //displaying total revenue

//Task 7: find() Method
let customers = ["Alice", "Bob", "Charlie", "David"];
let findingCustomer = customers.find(customer => customer === "Charlie"); //finding Charlie in array
console.log(`Customer: `, findingCustomer); //displaying the identified customer

//Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}; //calculating tax based on the amount
let tax = calculateTax(100, .075);
console.log(`Tax Amount: $${tax}`); //displaying the tax

//Task 9: Function Expression
const applyDiscount = function(price, discount) {
    return price - (price * (discount / 100));
}; //calculating the discounted price
let discountedPrice = applyDiscount(50, 15);
console.log(`Discounted Price: $${discountedPrice}`); //displaying the discounted price