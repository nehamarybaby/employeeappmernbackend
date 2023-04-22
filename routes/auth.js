const express = require('express');
const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  // Get the username and password from the request body
  const { username, password } = req.body;

  // Find the user with the provided username and password
  const user = users.find(u => u.username === username && u.password === password);

  // If no user is found, return an error response
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // If the user is found, create a JWT token with the user's role
  const token = jwt.sign({ role: user.role }, process.env.JWT_SECRET);

  // Return the token as a response
  res.json({ token });
});

module.exports = router;
