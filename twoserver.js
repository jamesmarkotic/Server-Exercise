// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORTTWO = 7500;
// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You have great hair today!" + request.url);
}

function handleRequestTwo(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You're adopted." + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequestOne);
var servertwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {
  console.log('Hey it\'s working!');
  console.log('You have nice hair today!');

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

servertwo.listen(PORTTWO, function() {
  console.log('Hey it\'s working!');
  console.log('You\'re adopted.');
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTTWO);
});
