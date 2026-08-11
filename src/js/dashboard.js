document.addEventListener("DOMContentLoaded",()=>{
let cart=getCart();
let total=0;
cart.forEach(item=>{
    total+=item.quantity||1;
});
const stat=document.getElementById("cartStat");
if(stat){
    stat.textContent=total;
}
updateCartCount();
});
