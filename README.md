# Base Web Project Grunt

## Developer Setup

Prerequisites
-------------

* [NVM](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org)
* [Grunt Command Line Interface (CLI)](https://github.com/gruntjs/grunt-cli)

Requirements
-------------

* Nodejs v.0.12.9

        nvm ls-remote
        nvm install 0.12.9
        nvm use 0.12.9

* From the Terminal:

        npm install -g grunt-cli
        npm run start

## Starting Up The Project

* ```npm run start``` to install project dependencies.

* ```grunt``` to build the project for development and open a browser instance with watch, etc.

* ```grunt server``` to open up a browser instance with watch.

* ```grunt unit``` to run Unit Tests.

* ```grunt jsdoc``` to run Jsdocs.

* ```grunt prod``` to build the project for production.

## JSDocs
* ```grunt jsdoc```
* Locate the file {project-repo}/reports/jsdocs/index.html and view in browser.
