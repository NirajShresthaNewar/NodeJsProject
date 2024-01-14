// Define an object to store database configuration and export it for use in other modules
module.exports = {
    // Username for connecting to the database
    username: "root",
    // Hostname or IP address of the database server
    host: "localhost",
    // Name of the database to connect to
    db: "okcrud",
    // Password for the database user (ideally should not be empty in production)
    password: "",
    // Type of database being used (MySQL in this case)
    dialect: "mysql",
    // Configuration for the database connection pool
    pool: {
      // Maximum number of connections in the pool
      max: 5,
      // Minimum number of idle connections to maintain
      min: 0,
      // Maximum number of idle connections to allow
      idle: 0,
      // Maximum time (in milliseconds) to wait for a connection to become available
      acquire: 30000,
    },
  };
  




/*module.exports ={
username:"root",
host:"localhost",
db: "okcrud",
password:"",
dialect:"mysql",
pool:{
    max:5,
    min:0,
    idle:0,
    acquire:30000,
}

}*/