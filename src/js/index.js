// ===============================
// 1. DROPDOWN MENU FUNCTIONALITY
// ===============================

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  dropdown.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
});


// ===============================
// 2. ACTIVE NAV LINK HIGHLIGHT
// ===============================

const navLinks = document.querySelectorAll(".navbar-links a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});


// ===============================
// 3. HERO BUTTON ACTIONS
// ===============================

// "Let's Get Started" button
const startBtn = document.querySelector(".btn-primary");

startBtn.addEventListener("click", () => {
  console.log("User wants to register");
  // You can redirect or track analytics here
});

// ===============================
// 4. SCROLL ANIMATION (CARDS)
// ===============================

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 50) {
      card.classList.add("show");
    }
  });
});


// ===============================
// 5. SIMPLE SEARCH CLICK (ICON)
// ===============================

const searchIcon = document.getElementById("search");

if (searchIcon) {
  searchIcon.addEventListener("click", () => {
    const query = prompt("What are you looking for?");
    
    if (query) {
      console.log("Searching for:", query);

      // Example redirect
      window.location.href = `/search.html?q=${query}`;
    }
  });
}
