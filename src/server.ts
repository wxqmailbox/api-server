import { app } from './app';

let tmp = 'test';
tmp = 'change';

const portNo = 3000 || process.env.port;
app.listen(portNo, () => {
  console.log(`API Server listening on port ${portNo}!`);
});
