function addProduct(event) {
    event.preventDefault();

    const products = getData(VENDOR_PRODUCTS);

    const product = {
        id: Date.now(),

        name: document.getElementById("productName").value,

        category: document.getElementById("productCategory").value,

        price: document.getElementById("productPrice").value,

        location: document.getElementById("productLocation").value,

        image: document.getElementById("productImage").value,

        description:
            document.getElementById("productDescription").value,

        status: "Pending",

        date: new Date().toLocaleDateString()
    };

    products.push(product);

    saveData(VENDOR_PRODUCTS, products);

    alert("Product submitted for Admin approval.");

    event.target.reset();

    displayVendorProducts();
    updateVendorStats();
}


function displayVendorProducts() {

    const container =
        document.getElementById("vendorProducts");

    if (!container) return;

    const products = getData(VENDOR_PRODUCTS);

    if (products.length === 0) {
        container.innerHTML =
            "<p>No products yet.</p>";
        return;
    }

    container.innerHTML = products.map(product => `

        <div class="vendor-product">

            <h3>${product.name}</h3>

            <p>
                ${product.category}
                ·
                ${money(product.price)}
            </p>

            <p>${product.description}</p>

            <span class="status status-${product.status}">
                ${product.status}
            </span>

            <div class="product-actions">

                <button
                    class="vendor-btn vendor-btn-danger"
                    onclick="deleteProduct(${product.id})"
                >
                    Delete
                </button>

            </div>

        </div>

    `).join("");
}


function deleteProduct(id) {

    if (!confirm("Delete this product?")) {
        return;
    }

    let products = getData(VENDOR_PRODUCTS);

    products = products.filter(
        product => product.id !== id
    );

    saveData(VENDOR_PRODUCTS, products);

    displayVendorProducts();

    updateVendorStats();
}


function updateVendorStats() {

    const products = getData(VENDOR_PRODUCTS);

    const orders = getData(VENDOR_ORDERS);

    const total =
        document.getElementById("totalProducts");

    const pending =
        document.getElementById("pendingProducts");

    const approved =
        document.getElementById("approvedProducts");

    const sales =
        document.getElementById("vendorSales");

    if (total) {
        total.textContent = products.length;
    }

    if (pending) {
        pending.textContent =
            products.filter(
                p => p.status === "Pending"
            ).length;
    }

    if (approved) {
        approved.textContent =
            products.filter(
                p => p.status === "Approved"
            ).length;
    }

    if (sales) {

        const totalSales = orders.reduce(
            (sum, order) =>
                sum + Number(order.total || 0),
            0
        );

        sales.textContent = money(totalSales);
    }
}