//Call like this:
//first go here: neo4jd3\src\main\scripts
//node .\export.js
//This will use the local version of export-svg-chart (that i tweaked a bit)
// to hit the URL where an FCM is rendered via D3, then export it as an image
//TODO - the image that gets generated needs to get saved to blob storage
//TODO - this should be an Azure function I think...
//TODO - also need to publish the code that generates the image map
//TODO - need to pass in parameters so we load the correct map
//TODO - parameterize the URL so it's whatever this gets published as

const fs = require('fs');
const exportSvgChart = require('./export-svg-chart');

const options = {
    url: 'http://localhost:8080',
    selector: '.neo4jd3-graph',
};

exportSvgChart(options, (err, buffers) => {
    if (err) return console.log(err);

    fs.writeFile('basic-example.svg', buffers.svg);
    fs.writeFile('basic-example.png', buffers.png);
});
