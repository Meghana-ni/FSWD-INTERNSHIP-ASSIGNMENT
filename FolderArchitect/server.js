const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const BASE_FOLDER = path.join(__dirname, "data");

// Function to read folders recursively
function readFolder(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);

    return files.map(file => {
      const fullPath = path.join(dirPath, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        return {
          name: file,
          type: "folder",
          children: readFolder(fullPath)
        };
      } else {
        return {
          name: file,
          type: "file"
        };
      }
    });
  } catch (error) {
    return { error: "Error retrieving data. Try again later." };
  }
}

// API Route
app.get("/folders", (req, res) => {
  const data = readFolder(BASE_FOLDER);
  res.json(data);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});