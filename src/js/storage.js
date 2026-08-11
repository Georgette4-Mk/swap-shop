function getCart(){
return JSON.parse(localStorage.getItem("cart"))||[];
}

function saveCart(cart){
localStorage.setItem("cart",JSON.stringify(cart));
}
function clearCart(){
localStorage.removeItem("cart");
}
function updateCartCount(){
const badge=document.getElementById("cartCount");
if(!badge) return;
let cart=getCart();
let count=0;
cart.forEach(item=>{
count+=item.quantity||1;
});
badge.textContent=count;

}
