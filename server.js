const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API route to handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form received:', { name, email, message });

  // Here you'd normally save to a database or send an email
  res.json({ message: 'Message received! Thank you.' });
});

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
