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
