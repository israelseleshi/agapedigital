import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory.
// Express handles all MIME types automatically and correctly.
app.use(express.static(join(__dirname, 'dist')));

// For all other requests, serve the main 'index.html' file.
// This is essential for handling client-side routing.
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});