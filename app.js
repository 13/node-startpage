const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3005;

let jsonData;

const readJsonFile = () => {
  try {
    const data = fs.readFileSync('sites.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error.message);
    return null;
  }
};

const checkForChanges = () => {
  const newJsonData = readJsonFile();

  if (!newJsonData) {
    return;
  }

  if (!jsonData || JSON.stringify(newJsonData) !== JSON.stringify(jsonData)) {
    console.log('JSON data changed. Updating website...');
    jsonData = newJsonData;
  }
};

setInterval(checkForChanges, 5000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the index.html file
app.get('/', (req, res) => {
  const indexPath = __dirname + '/index.html';
  res.sendFile(indexPath);
});

// Serve the JSON data separately
app.get('/json', (req, res) => {
  res.json(jsonData || {}); // Send an empty object if jsonData is null
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
