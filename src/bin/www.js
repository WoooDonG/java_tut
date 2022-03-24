"use strict";

const server = require("../server");
const PORT = 8080;

server.listen(PORT, () => {
    console.log('listening on 8080');
});