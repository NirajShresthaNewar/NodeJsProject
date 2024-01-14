// Import the Sequelize library for interacting with databases
const Sequelize = require("sequelize");

// Import database configuration from the dbConfig/dbConfig.js file
const dbConfig = require("../dbConfig/dbConfig.js");

// Create a new Sequelize instance using the configuration
const sequelize = new Sequelize(
  dbConfig.db, // Database name
  dbConfig.username, // Database username
  dbConfig.password, // Database password (ideally not empty in production)
  {
    host: dbConfig.host, // Database host
    dialect: dbConfig.dialect, // Database type (MySQL in this case)
    pool: {
      max: dbConfig.pool.max, // Maximum connections in the pool
      min: dbConfig.pool.min, // Minimum idle connections
      // Note: 'accurate' is not a valid pool configuration option
      idle: dbConfig.pool.idle, // Maximum idle connections
    },
  }
);

// Attempt to authenticate with the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Database successfully");
  })
  .catch((err) => {
    console.log(err); // Log any errors during authentication
  });

// Create an object to store database-related objects
const db = {};

// Add Sequelize and the created sequelize instance to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import and initialize the Blog model using the sequelize instance
db.blogs = require("../model/blog.js")(sequelize, Sequelize);
db.auth =require("./../model/auth.js")(sequelize, Sequelize);


// Export the db object for use in other modules
module.exports = db;













/*const Sequelize =require("sequelize");
const dbConfig =require("../dbConfig/dbConfig.js");

const sequelize = new Sequelize(
    
    dbConfig.db,
    dbConfig.username,
    dbConfig.password,
    {
        host:dbConfig.host,
        dialect: dbConfig.dialect,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            accurate:dbConfig.pool.accurate,
            idle:dbConfig.pool.idle,
        },
    },
);

sequelize 
.authenticate()
.then(()=>{
console.log("connected to Database successfully");
})
.catch((err)=>{
    console.log(err);
});
const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.blogs = require("../model/blog.js")(sequelize, Sequelize);

module.exports=db;
*/




/*
try{
    await sequelize.authenticate();
    console.log('connection established');

}
catch (error) {
    console.error('Unable to connect to the database:', error);
  }
*/