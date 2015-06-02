var http = require('http');
var options = {
    host: 'localhost',
    path: '/',
    port: '7070',
    method: 'POST'
};
function readJSONResponse(response) {
    var responseData = '';
    response.on('data', function (chunk) {
        responseData += chunk;
    });
    response.on('end', function () {
        var dataObj = JSON.parse(responseData);
        console.log("Raw Response: " +responseData);
        console.log("Message: " + dataObj.message);
        console.log("Question: " + dataObj.question);
    });
}
var req = http.request(options, readJSONResponse);
req.write('{"name":"Bilbo", "occupation":"Burgler"}');
req.end();