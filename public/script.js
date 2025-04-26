document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const strengthText = document.getElementById("passwordStrength");
  const successSection = document.getElementById("success-section");
  const formSection = document.getElementById("form-section");

  // Password Strength Checker
  form.password.addEventListener("input", () => {
    const val = form.password.value;
    let strength = "Weak";

    if (val.length >= 8 && /[A-Z]/.test(val) && /\d/.test(val)) {
      strength = "Strong";
      strengthText.style.color = "green";
    } else if (val.length >= 5) {
      strength = "Moderate";
      strengthText.style.color = "orange";
    } else {
      strengthText.style.color = "red";
    }

    strengthText.textContent = `Password Strength: ${strength}`;
  });

  // Handle Form Submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Dynamic DOM Update
    formSection.classList.add("d-none");
    successSection.classList.remove("d-none");
    document.getElementById("userDetails").innerText = `Welcome ${name}! Your email is ${email}`;
  });
});

// Simulated client-side routing (SPA behavior)
function goBack() {
  document.getElementById("form-section").classList.remove("d-none");
  document.getElementById("success-section").classList.add("d-none");
}
