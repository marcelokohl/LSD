const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 8003;
const app = express();

app.use(cors());
app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(port);
