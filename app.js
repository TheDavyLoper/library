const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootsrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootsrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootsrap/jquery/dist')));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views/index.html'));
// });

app.get('/', (req, res) => {
  res.render('index', { list: ['code', 'test'], title: 'Library' });
})

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
