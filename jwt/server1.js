const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

// Secret key from .env file
const secretKey = process.env.SECRET_KEY;

// Create a JWT
app.post("/create-token", (req, res) => {
  const payload = req.body;

  if (!payload || !payload.name) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  payload.exp = Math.floor(Date.now() / 1000) + 60; // expires in 1 minute

  const token = jwt.sign(payload, secretKey, { algorithm: "HS256" });
  res.json({ token });
});

// Validate a JWT
app.get("/validate-token", authenticate, (req, res) => {
  res.json({ valid: true, payload: req.user });
});

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

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
