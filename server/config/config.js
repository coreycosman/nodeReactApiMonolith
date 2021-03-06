// ENVIRONMENT VARIABLES

// const env = process.env.NODE_ENV || 'development';
//
// if (env === 'development' || env === 'test') {
//   var config = require('./config.json');
//   var envConfig = config[env];
//   Object.keys(envConfig).forEach((key) => {
//     process.env[key] = envConfig[key];
//   })
//   console.log('env****', env);
// }

// console.log('env****', env);

// WITHOUT CONFIG.JSON FILE
const env = process.env.NODE_ENV || "development";

if (env === "development") {
  process.env.PORT = 5000;
  process.env.MONGODB_URI = "mongodb://localhost:27017/TodoApp";
  process.env.JWT_SECRET = "testeroni";
} else if (env === "test") {
  process.env.PORT = 5000;
  process.env.MONGODB_URI = "mongodb://localhost:27017/TodoAppTest";
  process.env.JWT_SECRET = "testeroni";
}
