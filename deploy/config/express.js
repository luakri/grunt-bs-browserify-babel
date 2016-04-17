var express = require('express');
var path = require('path');
var gzipStatic = require('connect-gzip-static');
var argv = require('minimist')(process.argv.slice(2));

module.exports = function () {
    'use strict';

    var app = express();

    var isProd = argv.env && argv.env === 'prod';

    var oneDay = 86400000;

    // Not allow the user to access server/env files
    app.use(function(request, response, next) {

        if (request.method === 'GET') {

            var requestUrl = request._parsedUrl.pathname;
            var extname;
            var mimeTypes = {
                'htm': 'text/html',
                'html': 'text/html',
                'jpeg': 'image/jpeg',
                'jpg': 'image/jpeg',
                'png': 'image/png',
                'gif': 'image/gif',
                'js': 'text/javascript',
                'css': 'text/css',
                'mp4': 'video/mp4',
                'eot': 'application/vnd.ms-fontobject',
                'ttf': 'application/font-sfnt',
                'svg': 'image/svg+xml',
                'woff': 'application/font-woff',
                'map': 'application/json',
                'json': 'application/json'
            };

            // Default endpoint.
            if (requestUrl === '/') {
                requestUrl = '/index.html';
            }

            // Serve matching content types.
            extname = path.extname(requestUrl).substr(1);

            if (!mimeTypes[extname]) {
                //for now just send a 404 and a short message
                response.status(404).send('The requested file type is not supported\n');
            } else {

                // Only cache assets for production.
                // Set request headers for assets cache.
                if (isProd &&
                    !response.getHeader('Cache-Control')) {

                    response.setHeader('Cache-Control', 'must-revalidate, max-age=' + oneDay);
                    response.setHeader('Expires', new Date(Date.now() + oneDay).toUTCString());
                }

                next();
            }
        } else {
            next();
        }
    });

    // Setting static folder
    app.use(gzipStatic(path.resolve('./dist')));

    // index page
    app.get('/', function(request, response) {
        response.render('index');
    });

    return app;
};
