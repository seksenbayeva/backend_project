const users = [
    {
        id: 1,
        name: 'Anel',
        gender: "female"
    },
    {
        id: 2,
        name: 'Angelina',
        gender: "female"
    },
    {
        id: 3,
        name: 'Enlik',
        gender: "female"
    }
]
const express = require('express')
const { title } = require('process')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        id: 1,
        title: "Hello! aa",

    })
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const userID = req.params.id
    res.json(users[Number(userID) - 1])
})

app.listen(4000, () => {
    console.log('Server started on port http://localhost:4000')
})