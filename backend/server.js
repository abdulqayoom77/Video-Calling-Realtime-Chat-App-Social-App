import express from 'express'

const app = express();


app.get('/', (req, res) => {
    res.send('Hello Worl')
})

app.listen(5001, () => {
    console.log("Server is running")
})