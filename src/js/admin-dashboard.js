function loadAdminDashboard() {

    const products =
        getAdminData(ADMIN_PRODUCTS);

    const customers =
        getAdminData(ADMIN_CUSTOMERS);

    const orders =
        getAdminData(ADMIN_ORDERS);


    const customerCount =
        document.getElementById(
            "customerCount"
        );

    const vendorCount =
        document.getElementById(
            "vendorCount"
        );

    const productCount =
        document.getElementById(
            "productCount"
        );

    const orderCount =
        document.getElementById(
            "orderCount"
        );


    if (customerCount) {
        customerCount.textContent =
            customers.length;
    }

    if (vendorCount) {

        const vendors =
            [...new Set(
                products.map(
                    product =>
                        product.vendor
                )
            )];

        vendorCount.textContent =
            vendors.length;
    }

    if (productCount) {
        productCount.textContent =
            products.length;
    }

    if (orderCount) {
        orderCount.textContent =
            orders.length;
    }
}