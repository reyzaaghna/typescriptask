/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(order => order.status === "completed");

const ordersWithTotalValue = completedOrders.map(order => {
    const totalValue = order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    return {
        ...order,
        totalValue,
    };
});

const customerSpending = ordersWithTotalValue.map(order => ({
    customer: order.customer,
    totalSpent: order.totalValue,
}));        

const topCustomer = customerSpending.reduce((max, customer) => {
    return customer.totalSpent > max.totalSpent ? customer : max;
}, { customer: "", totalSpent: 0 });

const totalRevenue = ordersWithTotalValue.reduce((total, order) => total + order.totalValue, 0);    
