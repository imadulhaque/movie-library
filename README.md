# movie-library
 
Tools and frameworks used:
1.	Angular-cli1.0.0
2.	Angular 4.0.2 (with FormBuilder to add and edit a movie)
3.	Material 2.0.0-beta.3
4.	Rxjs 5.0.1
5.	json-server
6.	Typescript 2.2.2
7.	NgStore 2.2.2

Instructions to start application
1.	After downloading application, go to its directory in command prompt and run ‘npm install’ command to install all packages.
2.	Run command npm install -g json-server to install json-server.
3.	Go to server directory of the downloaded project directory in command prompt and run command json-server --watch db.json to start json-server. (json-server uses port 3000 by default, to use a different port use command json-server --watch db.json --port 3004)
4.	In command prompt, go to project root directory and run command ng serve to start application and go to http://localhost:4200 in browser to go to application.

Features of application:
1.	NgStore is used to maintain state of the application with observable to send data to views.
2.	Search on top left home page can of be used to search a movie by title.
3.	Add button will be used to add a new movie.
4.	Clicking a movie on home page will take to the detailed view of movie where movie can be deleted or edited.

