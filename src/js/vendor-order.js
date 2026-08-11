function displayVendorOrders() {

    const container =
        document.getElementById("vendorOrders");

    if (!container) return;

    const orders = getData(VENDOR_ORDERS);

    if (orders.length === 0) {

        container.innerHTML =
            "<p>No orders yet.</p>";

        return;
    }

    container.innerHTML = orders.map(order => `

        <div class="vendor-product">

            <h3>
                Order #${order.id}
            </h3>

            <p>
                Customer:
                ${order.customer || "Customer"}
            </p>

            <p>
                Total:
                ${money(order.total)}
            </p>

            <span class="status">
                ${order.status || "Pending"}
            </span>

        </div>

    `).join("");
}