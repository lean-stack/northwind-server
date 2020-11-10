#!/usr/bin/env node

// Node modules
const path = require('path');
const jsonServer = require('json-server');

console.log('Starting Northwind Server ...');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server for Northwind data is running');
});
