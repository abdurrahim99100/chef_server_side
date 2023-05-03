const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;

const chef = require('./data/data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is running')
})



app.get('/chef', (req, res) => {
    res.send(chef)
})
app.listen(port, () => {
    console.log(`Chef is Running on port ${port}`)
})

// full okay?