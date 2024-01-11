const Sequelize =require("sequelize");
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
db.sequelize = sequelize;
db.sequelize = sequelize;


module.exports=db;





/*
try{
    await sequelize.authenticate();
    console.log('connection established');

}
catch (error) {
    console.error('Unable to connect to the database:', error);
  }
*/