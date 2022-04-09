const home_page = (req, res) => {
    // res.send("Hello World");
    res.render('index', { title: 'Home Page' });
}
const about_page = (req, res) => {
    // using different layout
    res.render('about', { layout: './layouts/sidebar', title: 'About Page' });
}

module.exports = {
    home_page,
    about_page
}