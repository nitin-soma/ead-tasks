const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

// Secret key from .env file
const secretKey = process.env.SECRET_KEY;

// Middleware function to authenticate requests
function authenticate(req, res, next) {
  const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}

// Validate a JWT
app.get("/validate-token", authenticate, (req, res) => {
  res.json({ valid: true, payload: req.user });
});

app.listen(3001, () => {
  console.log("Validation server listening on port 3001");
});
