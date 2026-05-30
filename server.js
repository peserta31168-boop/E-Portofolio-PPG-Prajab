const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files dari public folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve index.html untuk semua routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(Server running on port ${ PORT });
});