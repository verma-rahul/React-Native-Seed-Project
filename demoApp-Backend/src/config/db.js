import mongoose from "mongoose"
import config from './config';

export default () =>{
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB_URL,{
        useMongoClient: true
    });
    mongoose.set('debug', true);
    mongoose.connection
        .once('open', () => console.log('Mongodb running'))
        .on('error', err => console.error(err));

}