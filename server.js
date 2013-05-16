var express = require('express');
var app = express();

app.configure(function() {
    app.use(express.bodyParser()); // used to parse JSON object given in the request body
});

app.get('/test', function (request, response) {
    var blah={
            test:true,
            roola:'oh no'
        };
    response.json(blah);
});

app.listen(8080);