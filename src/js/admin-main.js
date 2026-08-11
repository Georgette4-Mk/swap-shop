const ADMIN_PRODUCTS = "vendorProducts";
const ADMIN_CUSTOMERS = "customerProfiles";
const ADMIN_ORDERS = "vendorOrders";

function getAdminData(key) {

    return JSON.parse(
        localStorage.getItem(key) || "[]"
    );
}

function saveAdminData(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );
}

function adminMoney(amount) {

    return Number(amount || 0)
        .toLocaleString() + " FCFA";
}

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadAdminDashboard();

    }
);