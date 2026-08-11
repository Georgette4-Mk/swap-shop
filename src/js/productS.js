let displayProducts = [...products]; 
const grid =
document.getElementById("productGrid");
function renderProducts(items){
grid.innerHTML="";
if(items.length===0){
grid.innerHTML=`<h2>No products found</h2>`;
return;
}
items.forEach(product=>{
grid.innerHTML +=`
<div class="product-card">
<img src="${product.image}">
<div class="product-info">
<h3>
${product.title}
</h3>
<span class="badge">${product.category}</span>
<p>${product.description}</p>
<p class="price">$${product.price}</p>
<p class="vendor">Vendor: ${product.vendor}</p>
<p>Posted:${product.date}</p>
<div class="product-actions">
<button onclick="viewProduct(${product.id})">View Details</button>
<button onclick="addToCart(${product.id})">Add to Cart</button>
</div>
</div>
</div>
`;
});
}
function filterProducts(){
let search =document.getElementById("searchInput").value.toLowerCase();
let category =document.getElementById("categoryFilter").value;
let availability =
document.getElementById("availabilityFilter").value;
let maxPrice =document.getElementById("maxPrice").value;
displayProducts =products.filter(product=>{
return (
product.title.toLowerCase().includes(search)||
product.description.toLowerCase().includes(search)||
product.category.toLowerCase().includes(search)||
product.vendor.toLowerCase().includes(search)
)&&
(category==="" ||product.category===category)&&
(availability==="" ||product.availability===availability)&&
(maxPrice==="" ||product.price <= maxPrice)
});
sortProducts();
}
function sortProducts(){
let sort =document.getElementById("sortProducts").value;
if(sort==="low"){
displayProducts.sort((a,b)=>a.price-b.price);
}
if(sort==="high"){displayProducts.sort((a,b)=>b.price-a.price);
}
if(sort==="newest"){
displayProducts.sort((a,b)=>new Date(b.date)-new Date(a.date));
}
if(sort==="oldest"){displayProducts.sort((a,b)=>new Date(a.date)-new Date(b.date));
}
if(sort==="az"){
displayProducts.sort((a,b)=>a.title.localeCompare(b.title));
}
renderProducts(displayProducts);
}
document.querySelectorAll(".filter-box input, .filter-box select"
)
.forEach(element=>{
element.addEventListener("input",filterProducts);
element.addEventListener("change",filterProducts);
});
function viewProduct(id){localStorage.setItem("selectedProduct",id);
window.location.href="product.html";
}
function addToCart(id){
let cart=getCart();
let existing=cart.find(item=>item.id===id);
if(existing){
existing.quantity++;
}else{
let product=products.find(p=>p.id===id);
cart.push({...product,quantity:1});
}
saveCart(cart);
updateCartCount();
alert("Added to cart.");
}

