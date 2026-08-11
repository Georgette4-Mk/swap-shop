const checkoutItems=document.getElementById("checkoutItems");
let cart=getCart();
function displayOrder(){
checkoutItems.innerHTML="";
let total=0;
cart.forEach(item=>{
let qty=item.quantity||1;
let subtotal=item.price*qty;
total+=subtotal;
checkoutItems.innerHTML+=`
<div class="order-item">
<span>${item.title} x ${qty}</span>
<span>$${subtotal}</span>
</div>
`;
});
document.getElementById("checkoutTotal").textContent=total+5;
}
document.getElementById("checkoutForm").addEventListener("submit",
function(e){
e.preventDefault();
if(cart.length===0){
alert("Your cart is empty");
return;
}
let customer={
name:
document.getElementById("fullName").value,
email:
document.getElementById("email").value,
phone:
document.getElementById("phone").value,
address:
document.getElementById("address").value,
city:
document.getElementById("city").value,
region:
document.getElementById("region").value,
notes:
document.getElementById("notes").value,
payment:document.querySelector('input[name="payment"]:checked').value
};
localStorage.setItem("customerOrder",JSON.stringify(customer)
);
localStorage.removeItem("cart");
window.location.href="confirmation.html";
});
displayOrder();

localStorage.setItem(
"customerProfile",
JSON.stringify(customer)
);
