const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to My Server 🚀");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact us at example@email.com");
});

// Products route
app.get("/products", (req, res) => {
  res.send("Here are our products 🛍");
});

// 404 route (if not found)
app.use((req, res) => {
  res.status(404).send("Page Not Found ❌");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});