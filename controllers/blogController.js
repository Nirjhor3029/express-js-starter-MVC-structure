const Blog = require("../models/Blog")

const blog_create_get = (req, res) => {
    const blog = new Blog({
        title: 'New blog',
        snippet: 'About my new blog',
        body: 'More about my new blog',
    });
    // blog.save();

    blog.save()
        .then((result) => {
            console.log(result);
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}
const blog_create_post = (req, res) => {

}

module.exports = {
    blog_create_get,
    blog_create_post
}