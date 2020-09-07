# ViaPlay.Trailer

This application is a REST API for providing clients with trailer URLs. The API take a
movie resource link (e.g. https://content.viaplay.se/pc-se/film/arrival-2016) as input and based on
that return the URL to the trailer for that movie. Within the movie resource, ViaPlay.Trailer application returns the IMDb Trailer Url.

---
## Requirements

For development, you will  need Node.js and a node global package, MongoDB, Docker installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.16.3

    $ npm --version
    6.14.4

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### MongoDB installation
Just click the following link below here and select Docker for your environments.
https://www.mongodb.com/try/download/community

### Docker installation
Just click the following link below here and select Docker for your environments.
https://www.docker.com/products/docker-desktop    

---

## Install

    $ git clone https://github.com/kemalakoglu/Viaplay.Trailer.git
    $ cd viaplay
    $ npm install

## Running the project

First thing is checking 8080 port on your computer. If it is not available please define the port information which is available, onto some documents under the project. This is described below here;  

"const port = 8080;" on app.js
"EXPOSE 8080" on DockerFile  

Second thing is MongoDB port. Please check it in extensions/connection.js

Then, run these commands to dockerize this application;

--- docker build -t viaplaycontainer .
--- docker-compose up

## Simple request to API

API Url: http://localhost:8080/trailer/
Request Type: GET
Example Body: 
{
    "link":"https://content.viaplay.se/pc-se/film/the-dead-dont-die-2019"
}

