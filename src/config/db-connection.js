import { connect } from 'mongoose';
import { envDatabaseURL } from '.';

export default (async () => {
  try {
    await connect(envDatabaseURL);
    console.info('Connection to db is established!');
  } catch (error) {
    console.log('error while connecting to db: ', error);
  }
})();
