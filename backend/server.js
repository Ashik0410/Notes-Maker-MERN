const express = require("express");
const notes = require("./Data/notes");
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    res.send("Api started Ashik");
});

app.get('/api/notes', (req, res) => {
    res.json(notes)
});
app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id)
    res.send(note)
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`port ${PORT}  0 started`));