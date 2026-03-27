import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState("");

  // Email Validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Password Strength Validation
  const validatePassword = (password) => {
    // At least 6 characters, 1 number
    const regex = /^(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setSuccess("");

    let valid = true;

    // Email check
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    }

    // Password check
    if (!validatePassword(password)) {
      setPasswordError("Password must be 6+ chars & include a number");
      valid = false;
    }

    // Success
    if (valid) {
      setSuccess("Signup successful 🎉");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      
      {/* Email */}
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p className="error">{emailError}</p>}

      {/* Password */}
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordError && <p className="error">{passwordError}</p>}

      <button type="submit">Signup</button>

      {success && <p className="success">{success}</p>}
    </form>
  );
}

export default Signup;