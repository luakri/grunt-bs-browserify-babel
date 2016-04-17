var path = require('path');
var fs = require('fs');

/**
 * Find all files recursively in specific folder with specific extension, e.g:
 * findFilesInDir('./project/src', '.html') ==> ['./project/src/a.html','./project/src/build/index.html']
 * @param  {String} startPath    Path relative to this file or other file which requires this files
 * @param  {String} filter       Extension name, e.g: '.html'
 * @return {Array}               Result files with path string in an array
 */
function findFilesInDir(startPath, filter){
    'use strict';

    var results = [];

    if (!fs.existsSync(startPath)){
        console.log('>> findFilesInDir:no dir ', startPath);
        return;
    }

    var files = fs.readdirSync(startPath);

    for(var i = 0; i < files.length; i++) {
        var filename = path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);

        if (stat.isDirectory()) {
            results = results.concat(findFilesInDir(filename,filter)); //recurse
        } else if (filter.test(filename)) {
            console.log('>> findFilesInDir:-- found: ',filename);
            results.push(filename);
        }
    }

    return results;
}

module.exports = findFilesInDir;
