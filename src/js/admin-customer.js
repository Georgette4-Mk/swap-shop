function displayCustomers() {

    const container =
        document.getElementById(
            "customersList"
        );

    if (!container) return;

    const customers =
        getAdminData(ADMIN_CUSTOMERS);


    if (!customers.length) {

        container.innerHTML =
            "<p>No customers yet.</p>";

        return;
    }


    container.innerHTML =
        customers.map(customer => `

            <div class="admin-user">

                <div>

                    <h3>
                        ${customer.name}
                    </h3>

                    <p>
                        ${customer.email}
                    </p>

                </div>

                <span class="status status-${customer.status || "Active"}">
                    ${customer.status || "Active"}
                </span>

                <div></div>

                <div class="admin-actions">

                    <button
                        class="admin-btn admin-btn-danger"
                        onclick="suspendCustomer('${customer.id}')"
                    >
                        Suspend
                    </button>

                </div>

            </div>

        `).join("");
}


function suspendCustomer(id) {

    const customers =
        getAdminData(ADMIN_CUSTOMERS);


    const updated =
        customers.map(customer => {

            if (
                String(customer.id) ===
                String(id)
            ) {

                return {
                    ...customer,
                    status: "Suspended"
                };

            }

            return customer;
        });


    saveAdminData(
        ADMIN_CUSTOMERS,
        updated
    );


    displayCustomers();
}