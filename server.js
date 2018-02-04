// Get dependencies
const express = require('express'),
    path = require('path'),
    http = require('http'),
    glob = require("glob"),
    compression = require('compression'),
    bodyParser = require('body-parser');

// require('typescript-require');

// Get our API routes
const api = glob(path.join(__dirname, "src/**", "*.mock.js"), (er, files) => {
//	console.log(path.join(__dirname, "**","*.mock.js"));
// 	console.log(files);

    const app = express();

    // Parsers for POST data
    app.use(bodyParser.json());                             // JSON Body Support
    app.use(bodyParser.urlencoded({extended: true}));    // Query String Support
    app.use(compression());                                 // GZip responses

    // Point static path to dist
    app.use(express.static(path.join(__dirname, 'dist')));

    // Set our api routes
    let router = express.Router();

    files.forEach(file => {
        Object.entries(require(file)).forEach(([url, config]) => {
            Object.entries(config).forEach(([method, func]) => {
                // console.log("url: " + url + " method: " + method + " function: " + func);
                router[method](url, func);
            });
        });
    });
    // console.log(router);

    app.use(router);

    console.log("processing static code");
    // Catch all other routes and return the index file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });

    /**
     * Get port from environment and store in Express.
     */
    const port = process.env.PORT || '4300';
    app.set('port', port);

    /**
     * Create HTTP server.
     */
    const server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port, () => console.log(`API running on localhost:${port}`));
});
