import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory with proper MIME types
app.use(express.static(join(__dirname, 'dist'), {
  setHeaders: (res, path) => {
    // Let Express handle most MIME types automatically
    // Only explicitly set for JavaScript modules to ensure ES modules work
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    }
  }
}));

// Handle React Router (SPA routing) - must be after static files
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
  console.log(`📁 Serving from: ${join(__dirname, 'dist')}`);
});

export default app;
