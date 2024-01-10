const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

let jsonData;

const readJsonFile = () => {
  try {
    const data = fs.readFileSync('data.json', 'utf8');
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

// Serve the index.html file
app.get('/', (req, res) => {
  const indexPath = __dirname + '/index.html';
  res.sendFile(indexPath);
});

// Serve the JSON data separately
app.get('/json-data', (req, res) => {
  res.json(jsonData || {}); // Send an empty object if jsonData is null
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
