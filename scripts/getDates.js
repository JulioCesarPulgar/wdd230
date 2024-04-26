// getDates.js

// Copyright year
let yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Last modified date
let lastModified = document.getElementById('lastModified');
lastModified.textContent = "Last modified: " + document.lastModified;
