function displayAdminOrders() {

    const container =
        document.getElementById(
            "adminOrders"
        );

    if (!container) return;

    const orders =
        getAdminData(ADMIN_ORDERS);


    if (!orders.length) {

        container.innerHTML =
            "<p>No orders yet.</p>";

        return;
    }


    container.innerHTML =
        orders.map(order => `

            <div class="admin-product">

                <h3>
                    Order #${order.id}
                </h3>

                <p>
                    Customer:
                    ${order.customer || "Customer"}
                </p>

                <p>
                    Total:
                    ${adminMoney(order.total)}
                </p>

                <span class="status status-${order.status || "Pending"}">
                    ${order.status || "Pending"}
                </span>

                <br><br>

                <select
                    onchange="
                        updateOrderStatus(
                            ${order.id},
                            this.value
                        )
                    "
                >

                    <option
                        value="Pending"
                        ${order.status === "Pending" ? "selected" : ""}
                    >
                        Pending
                    </option>

                    <option
                        value="Processing"
                        ${order.status === "Processing" ? "selected" : ""}
                    >
                        Processing
                    </option>

                    <option
                        value="Shipped"
                        ${order.status === "Shipped" ? "selected" : ""}
                    >
                        Shipped
                    </option>

                    <option
                        value="Delivered"
                        ${order.status === "Delivered" ? "selected" : ""}
                    >
                        Delivered
                    </option>

                    <option
                        value="Cancelled"
                        ${order.status === "Cancelled" ? "selected" : ""}
                    >
                        Cancelled
                    </option>

                </select>

            </div>

        `).join("");
}


function updateOrderStatus(
    id,
    status
) {

    const orders =
        getAdminData(ADMIN_ORDERS);


    const updated =
        orders.map(order => {

            if (
                Number(order.id) ===
                Number(id)
            ) {

                return {
                    ...order,
                    status: status
                };

            }

            return order;

        });


    saveAdminData(
        ADMIN_ORDERS,
        updated
    );


    displayAdminOrders();
}