
    // import {wellcomeUser} from './personalmodule'

    const http = require('http')
    const fs = require('fs').promises
    const os = require('os')
    const path = require('path')

    const {wellcomeUser} = require('./personalmodule')

    const host = 'localhost'
    const port = 5000

    let username = os.userInfo().username
    let ossystem = os.type()
    let time = os.uptime()
    let workdirectory = path.dirname(__dirname)
    let filename = path.basename(__filename);

    let info = '<div class="wrapper">' + 
    '<span>Current user name: ' + username + '</span>' + 
    '<span>OS type: ' + ossystem + '</span>' + 
    '<span>System work time: ' + time + 'minutes' + '</span>' + 
    '<span>Current work directory: ' + workdirectory + '</span>' + 
    '<span>Server file name: ' + filename + '</span>' + '</div>'; 

    let repsonalinfo = wellcomeUser(username).then(result => repsonalinfo = result)

    const requestListener = (request, response) => {
        fs.readFile(__dirname + '/index.html')
            .then(contens => {
                response.setHeader('Content-Type', 'text/html')
                response.writeHead(200)
                response.end(contens + info + '<section>' + repsonalinfo + '</section>')
            })
    }

    const server = http.createServer(requestListener)
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`)
    })

