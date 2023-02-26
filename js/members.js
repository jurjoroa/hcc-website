// script.js

// Fetch the JSON data
fetch('members.json')
  .then(response => response.json())
  .then(data => {
    // Update the HTML content
    const jsonDataElement = document.getElementById('json-data');
    jsonDataElement.innerHTML = JSON.stringify(data);
  })
  .catch(error => console.error(error));
