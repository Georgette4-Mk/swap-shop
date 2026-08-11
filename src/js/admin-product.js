function displayAdminProducts() {

    const container =
        document.getElementById(
            "adminProducts"
        );

    if (!container) return;

    const products =
        getAdminData(ADMIN_PRODUCTS);


    if (!products.length) {

        container.innerHTML =
            "<p>No products yet.</p>";

        return;
    }


    container.innerHTML =
        products.map(product => `

            <div class="admin-product">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    Vendor:
                    ${product.vendor || "Vendor"}
                </p>

                <p>
                    ${adminMoney(product.price)}
                </p>

                <span class="status status-${product.status}">
                    ${product.status}
                </span>

                <div class="admin-actions">

                    ${
                        product.status === "Pending"

                        ?

                        `
                        <button
                            class="admin-btn admin-btn-success"
                            onclick="approveProduct(${product.id})"
                        >
                            Approve
                        </button>

                        <button
                            class="admin-btn admin-btn-danger"
                            onclick="rejectProduct(${product.id})"
                        >
                            Reject
                        </button>
                        `

                        :

                        ""
                    }

                    <button
                        class="admin-btn admin-btn-danger"
                        onclick="deleteAdminProduct(${product.id})"
                    >
                        Delete
                    </button>

                </div>

            </div>

        `).join("");
}


function approveProduct(id) {

    changeProductStatus(
        id,
        "Approved"
    );
}


function rejectProduct(id) {

    changeProductStatus(
        id,
        "Rejected"
    );
}


function changeProductStatus(
    id,
    status
) {

    const products =
        getAdminData(ADMIN_PRODUCTS);


    const updated =
        products.map(product => {

            if (
                Number(product.id) ===
                Number(id)
            ) {

                return {
                    ...product,
                    status: status
                };

            }

            return product;

        });


    saveAdminData(
        ADMIN_PRODUCTS,
        updated
    );


    displayAdminProducts();

    loadAdminDashboard();
}


function deleteAdminProduct(id) {

    if (
        !confirm(
            "Delete this product?"
        )
    ) {
        return;
    }


    let products =
        getAdminData(ADMIN_PRODUCTS);


    products =
        products.filter(
            product =>
                Number(product.id) !==
                Number(id)
        );


    saveAdminData(
        ADMIN_PRODUCTS,
        products
    );


    displayAdminProducts();

    loadAdminDashboard();
}