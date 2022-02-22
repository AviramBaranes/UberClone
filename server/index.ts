import http from 'http';
import urlModule from 'url';
import fs from 'fs';
import pathModule from 'path';

http
  .createServer((req, res) => {
    const { url } = req;
    const { method } = req;
    const { path } = urlModule.parse(url!);
    const filesPath = pathModule.join(process.cwd(), 'orders.txt');
    if (method === 'GET') {
      res.end('Hello');
    }
    console.log(url);

    if (method === 'POST' && path === '/add-order') {
      const writeStream = fs.createWriteStream(filesPath);
      req.pipe(writeStream);
      req.on('end', () => {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end('Your order has been saved');
      });
    }
  })
  .listen(8081, () => {
    console.log('app is running');
  });
