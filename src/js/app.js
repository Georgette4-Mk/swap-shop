const menuToggle=document.getElementById("menuToggle");
const navLinks=document.querySelector(".nav-links");

if(menuToggle){
menuToggle.onclick=()=>{
navLinks.classList.toggle("show");
};
}

if(typeof updateCartCount==="function"){
updateCartCount();
}
