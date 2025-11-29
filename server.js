import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve the static files from the Vite build folder
app.use(express.static(path.join(__dirname, 'dist')));

// Handles any requests that don't match the ones above
// and sends back the main index.html file. This is for client-side routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
