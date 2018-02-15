'use strict';

const express = require('express');
const cors = require('cors');
const debug = require('debug')('giggle: server.js');
const PORT = process.env.PORT || 3500;
const app = express();

app.listen(PORT, () => {
	debug('Server active on port: ', PORT);
});
