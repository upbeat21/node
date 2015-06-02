var http = require('http');
var options = {
    hostname: 'localhost',
    port: '7070',
    path: '/config.txt'
};
function handleResponse(response) {
    var serverData = '';
    response.on('data', function(chunk) {
        serverData += chunk;
    })
    response.on('end', function() {
        console.log(serverData);
    })
}
http.request(options, function(response) {
    handleResponse(response);
}).end();