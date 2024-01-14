// Define a function that takes Sequelize and Sequelize constructor as arguments and exports a model
module.exports = (sequelize, Sequelize) => {
  // Create a model named "blog" using Sequelize
  const Blog = sequelize.define("blog", {
    // Define the model's attributes:
    name: {
      // Name attribute with a STRING data type
      type: Sequelize.STRING,
    },
    desc: {
      // Description attribute with a STRING data type
      type: Sequelize.STRING,
    },
  });

  // Return the defined Blog model
  return Blog;
};


/*module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
      name: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      });
  
    return Blog;
  };
*/
  