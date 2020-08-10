import app from './app';

const debug = require('debug')('app');

app.listen(3030, () => {
  debug('Listening on port 3333');
});
