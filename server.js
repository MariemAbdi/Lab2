var http = require("http");
/*
Nous utilisons l'instance http créée et appelons la méthode http.createServer() pour créer
une instance de serveur, puis nous la lions au port 8081 à l'aide de la méthode listen
associée à l'instance du serveur.
*/
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
    }).listen(8081);
    // Affichage d’un message sur la console pour indiquer le lancement du serveur
    console.log('Server running at http://127.0.0.1:8081/');