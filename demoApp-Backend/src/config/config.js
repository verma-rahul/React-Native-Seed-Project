var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
// if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
//     var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
//     var password = process.env.MLAB_PASSWORD_WEBDEV;
//     connectionString = 'mongodb://' + username + ':' + password;
//     connectionString += '@ds163181.mlab.com:63181/webappmaker'; // user yours
// }
const devConfig = {
    DB_URL: connectionString
};
export default devConfig;