import express from 'express'

const app = express();


app.get('/s', (req, res) => {
    res.send('Hello World')
})

app.listen(5001, () => {
    console.log("Server is running not")
})