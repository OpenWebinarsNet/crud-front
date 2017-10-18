const express = require('express')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('/post/:id', (req, res) => {
        const mergedQuery = Object.assign({}, req.query, req.params)
        console.log(req.params)
        return app.render(req, res, '/post', mergedQuery)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    const port = process.env.PORT || 3000

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on port ${port}...`)
    })
})