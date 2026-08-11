const container=document.getElementById("productContainer");

const productId=localStorage.getItem("selectedProduct");

const product=products.find(p=>p.id==productId);

if(!product){container.innerHTML="<h2>Product not found</h2>";
}else{
container.innerHTML=`
<div class="details-card">
<div>
<img class="main-image" id="mainImage" src="${product.image}">
<div class="gallery">
<img src="${product.image}">
<img src="https://picsum.photos/400/300?20">
<img src="https://picsum.photos/400/300?30">
</div>
</div>
<div class="product-info">
<h1>${product.title}</h1>
<p>Category: ${product.category}</p>
<p>${product.description}</p>
<div class="detail-price">$${product.price}</div>
<p>Posted: ${product.date}</p>
<div class="vendor-box">
<h3>${product.vendor}</h3>
<p>Location: ${product.location}</p>
<p>WhatsApp: +237600000000</p>
</div>
<div class="product-buttons">
<button onclick="addToCart(${product.id})">Add To Cart</button>
<button class="whatsapp" onclick="contactVendor()">Contact WhatsApp</button>
</div>
</div>
</div>
`;
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
