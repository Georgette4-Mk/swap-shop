const VENDOR_PRODUCTS = "vendorProducts";
const VENDOR_ORDERS = "vendorOrders";

function getData(key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function money(amount) {
    return Number(amount || 0).toLocaleString() + " FCFA";
}

function loadVendorPage() {
    updateVendorStats();
    displayVendorProducts();
    displayVendorOrders();
}

document.addEventListener("DOMContentLoaded", loadVendorPage);