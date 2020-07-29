import app from './app';

const debug = require('debug')('app');

app.listen(3000, () => {
  debug('Listening on port 3000');
});
