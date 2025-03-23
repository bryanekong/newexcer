
function validateForm(email, password, confirmPassword) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) errors.email = "Invalid email format";
  if (password.length < 8) errors.password = "Password must be at least 8 characters";
  if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";
  return errors;
}
console.log(validateForm("test@example.com", "password123", "password123"));
