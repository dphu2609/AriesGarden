const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const searchQuery = req.body.search;
    console.log(`Search Query: ${encondedURIcomponents(searchQuery)}`);
    res.json({ message: `You searched for ${searchQuery}` });
});

app.listen(PORT, () => {console.log('Server is running on port 3001')});