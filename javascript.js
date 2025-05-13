document.addEventListener("DOMContentLoaded", function() {
    const data = [
        {id: 1, name: "Laptop", price: 1200.00, quantity: 10, category: "Electronics"},
        {id: 2, name: "Smartphone", price: 800.00, quantity: 15, category: "Electronics"},
        {id: 3, name: "Tablet", price: 600.00, quantity: 12, category: "Electronics"},
        {id: 4, name: "Headphones", price: 150.00, quantity: 50, category: "Accessories"},
        {id: 5, name: "Keyboard", price: 80.00, quantity: 30, category: "Accessories"},
        {id: 6, name: "Monitor", price: 300.00, quantity: 20, category: "Electronics"},
    ];

    const tableBody = document.querySelector("#resultsTable tbody");

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.category}</td>
        `;
        tableBody.appendChild(row);
    });
});
