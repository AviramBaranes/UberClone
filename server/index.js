"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var url_1 = __importDefault(require("url"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
http_1.default
    .createServer(function (req, res) {
    var url = req.url;
    var method = req.method;
    var path = url_1.default.parse(url).path;
    var filesPath = path_1.default.join(process.cwd(), 'orders.txt');
    if (method === 'GET') {
        res.end('Hello');
    }
    console.log(url);
    if (method === 'POST' && path === '/add-order') {
        var writeStream = fs_1.default.createWriteStream(filesPath, { flags: 'a' });
        req.pipe(writeStream);
        writeStream.write('\n');
        req.on('end', function () {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end('Your order has been saved');
        });
    }
})
    .listen(8081, function () {
    console.log('app is running');
});
