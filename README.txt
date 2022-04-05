This project was created from my simple-server project.

I added an html document, which I copied directly from the
Jonas projected 1-node-farm (that's not quite the right name),
then I made a few changes to index.js to serve up an html doc

It serves an html document, which DOES get rendered
correctly in the browser.

This server uses the built-in http and fs modules
 - No Express
 - Nothing installed with npm


 
To run this server:  
$ node index.js

Then do a get request from browser or postman:
localhost:8000