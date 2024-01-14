// Import the 'blogs' model from the model/index.js file
const { blogs } = require("../model/index.js");

// Export a function to create a new blog
exports.createBlog = async (req, res) => {
  // Extract name and description from the request body
  const data = {
    name: req.body.name,
    desc: req.body.desc,
  };

  // Attempt to create the blog in the database
  const createdBlog = await blogs.create(data);

  if (createdBlog) {
    // If successful, send a success response with the created blog data
    res.status(200).json({
      data: createdBlog,
      message: "Created successfully",
    });
  }

  // Log the created blog data to the console for debugging
  console.log(createdBlog);
};

// Export a function to retrieve all blogs
exports.getBlogs = async (req, res) => {
  // Fetch all blogs from the database
  const result = await blogs.findAll();

  // Send the fetched blogs in the response
  res.status(200).send(result);
};

// Export a function to retrieve a blog by its ID
exports.getBlogsById = async (req, res) => {
  // Fetch the blog with the specified ID from the database
  const result = await blogs.findByPk(req.params.id);

  // Send the fetched blog in the response
  res.status(200).send(result);
};

// Export a function to delete a blog by its ID (duplicate function, likely needs correction)
exports.deleteBlogsById = async (req, res) => {
  // Fetch the blog with the specified ID from the database (should be removed for deletion)
  const result = await blogs.findByPk(req.params.id);

  // Send the fetched blog in the response (should be replaced with deletion logic)
  res.status(200).send(result);
};

// Export a function to delete all blogs (likely intended functionality for the previous function)
exports.deleteBlogsById = async (req, res) => {
  // Delete all blogs from the database
  const result = await blogs.destroy();

  // Send a success response
  res.status(200).send(result);
};





// Export a function named 'updateBlog' that handles requests
exports.updateBlog = async (req, res) => {
  try {
    // Attempt to update a blog in the database
    let result = await blogs.update({
      // Spread the request body data to update the blog's attributes
      ...req.body},
      {

      // Specify the condition for updating:
      where: {
        id: req.params.id, // Update the blog with the matching ID
      },
    });

    // If successful, send a success response
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the update
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Error updating blog",
    });
  }
};






/*const {blogs} =require("../model/index.js");
//const blogs =require("../model/index.js").blogs;
exports.createBlog = async(req,res)=> {
  let data ={
        name:req.body.name,
        desc:req.body.desc,
    };
    let createdBlog = await blogs.create(data);
    if(createdBlog)
    {
        res.status(200).json({
            data:createdBlog,
            mesage:"create successfully"
        })
        
    }
    console.log(createdBlog);
};

exports.getBlogs=async (req,res)=>
{
    let result = await blogs.findAll();
    res.status(200).send(result);
};

exports.getBlogsById=async (req,res)=>
{
    let result = await blogs.findByPk(req.params.id);
    
    res.status(200).send(result);
};
exports.deleteBlogsById=async (req,res)=>
{
    let result = await blogs.findByPk(req.params.id);
    
    res.status(200).send(result);
};



exports.deleteBlogsById=async(req,res)=> {
let result =await blogs.destroy()


exports.updateBlog =async (req,res)=>
{
  let result = wait blogs.update({
    ...req.body,
    where: {
      id:req.params.id,
    },
  });
  res.status(200).json({
    success:true,
    message:"update successfully",

  });

};

}*/