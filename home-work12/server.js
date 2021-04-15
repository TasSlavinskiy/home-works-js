const http = require('http')
const static = require('node-static')
const file = new static.Server('.')

    function accept(request, response) {
        if (request.url == '/vote') {
            setTimeout( () => {
                response.end('Your vote is accepted: ' + new Date())
            }, 1000)
        } if (request.url == '/books.json')  {
            setTimeout( () => {
                file.serve(request, response)
            }, 1000)
        }
            else {
            file.serve(request, response)
        }
    }

    http.createServer(accept).listen(8080)
    console.log('Server is listenong on port 8080')