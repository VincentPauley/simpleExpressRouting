// require express module and create an instance called 'app' - and assign a port
var express = require('express'),
    app = express(),
    port = 8080;

// handle routing - notice the syntax for assigning a name to the following route
app.get('/teams/:name?', function(req, res, next) {
  var teamName = req.params.name; // capture value of ":name?"

  // deliver custom response for whatever team is being looked at
  switch(teamName) {
    case 'blackhawks':
      res.send('<h1>The Blackhawks have won 6 Stanley cups since entering the league in 1926</h1>');
      break;
    case 'kings':
      res.send('<h1>The Kings have won 2 Stanley cups, they were captured in the span of 3 seasons</h1>');
      break;
    default:
      res.send('Cannot find team specified');
  }
});

app.listen(port);
console.log('Server listening on port ' + port);
