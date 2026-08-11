const cartContainer=
document.getElementById("cartItems");
let cart=getCart();
function renderCart(){

cartContainer.innerHTML="";
if(cart.length===0){
cartContainer.innerHTML=`
<div class="cart-item">
<h2>Your cart is empty</h2>
</div>
`;
updateSummary();

return;

}
cart.forEach((item,index)=>{
cartContainer.innerHTML+=`

<div class="cart-item">
<img src="${item.image}">
<div class="cart-info">
<h3>${item.title}</h3>
<p>$${item.price}</p>
<div class="quantity">
<button onclick="changeQuantity(${index},-1)">-</button>
<span>${item.quantity||1}</span>
<button onclick="changeQuantity(${index},1)">+</button>
</div>
</div>
<button class="remove-btn"onclick="removeItem(${index})">Remove</button>
</div>
`;
});
updateSummary();
}
function changeQuantity(index,value){
cart[index].quantity=(cart[index].quantity||1)+value;
if(cart[index].quantity<1){cart[index].quantity=1;
}
saveCart(cart);
renderCart();
}
function emptyCart(){
if(!confirm("Empty your shopping cart?")) return;
clearCart();
cart=[];
renderCart();
updateCartCount();
}

function emptyCart(){
localStorage.removeItem("cart");
cart=[];
renderCart();
}

function updateSummary(){
let items=0;
let subtotal=0;

cart.forEach(item=>{
let qty=item.quantity||1;
items+=qty;
subtotal+=item.price*qty;
});

document.getElementById("totalItems").textContent=items;
document.getElementById("subtotal").textContent=subtotal;
document.getElementById("grandTotal").textContent=subtotal+5;
}

function checkoutPage(){
if(cart.length===0){alert("Your cart is empty");

return;

}
window.location.href="checkout.html";
}

renderCart();
