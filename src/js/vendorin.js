// Get form elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const locationField = document.getElementById("location");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");

// Email validation function
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone validation (basic)
function isValidPhone(phone) {
  return /^[0-9]{7,15}$/.test(phone);
}

// Handle signup
signupBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Get values
  const user = username.value.trim();
  const mail = email.value.trim();
  const phoneNum = phone.value.trim();
  const loc = locationField.value.trim();
  const pass = password.value.trim();

  // Validation
  if (!user || !mail || !phoneNum || !loc || !pass) {
    alert("Please fill in all fields");
    return;
  }

  if (!isValidEmail(mail)) {
    alert("Invalid email format");
    return;
  }

  if (!isValidPhone(phoneNum)) {
    alert("Phone number must be digits only (7–15)");
    return;
  }

  if (pass.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  // Create user object
  const userData = {
    username: user,
    email: mail,
    phone: phoneNum,
    location: loc,
    password: pass,
  };

  console.log("User Data:", userData);

  // 🔥 Example: send to backend (Node/Express)
  fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Signup successful!");
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
      alert("Error connecting to server");
    });
});