function getVendors() {

    const products =
        getAdminData(ADMIN_PRODUCTS);

    const vendorNames =
        [...new Set(
            products.map(
                product =>
                    product.vendor || "Vendor"
            )
        )];

    return vendorNames.map(
        (name, index) => ({

            id: index + 1,

            name: name,

            products:
                products.filter(
                    product =>
                        product.vendor === name
                ).length,

            status: "Active"

        })
    );
}


function displayVendors() {

    const container =
        document.getElementById(
            "vendorsList"
        );

    if (!container) return;

    const vendors =
        getVendors();


    if (!vendors.length) {

        container.innerHTML =
            "<p>No vendors yet.</p>";

        return;
    }


    container.innerHTML =
        vendors.map(vendor => `

            <div class="admin-user">

                <div>

                    <h3>
                        ${vendor.name}
                    </h3>

                    <p>
                        ${vendor.products}
                        products
                    </p>

                </div>

                <span class="status status-${vendor.status}">
                    ${vendor.status}
                </span>

                <div></div>

                <div class="admin-actions">

                    <button
                        class="admin-btn admin-btn-danger"
                        onclick="suspendVendor('${vendor.name}')"
                    >
                        Suspend
                    </button>

                </div>

            </div>

        `).join("");
}


function suspendVendor(name) {

    alert(
        "Vendor " +
        name +
        " has been suspended."
    );
}