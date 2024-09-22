const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the Angular build folder (dist)
app.use(express.static(path.join(__dirname, 'dist/browser')));

// Catch all routes and return the index file, so Angular routing works properly
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/browser', 'index.html'));
});

// Start the server on port 4200
const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
