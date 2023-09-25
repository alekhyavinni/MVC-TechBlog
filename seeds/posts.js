const { Post } = require('../models');

const postData = [{
        title: 'What is MVC Framework?',
        content: 'MVC (Model-View-Controller) is a design pattern used in software development to separate an application into three components:  1. **Model**: Handles data and business logic. 2. **View**: Represents the user interface. 3. **Controller**: Manages user input and interacts with the Model and View.Benefits include better code organization, reusability, and testability.',
        user_id: 1

    },
    {
        title: 'What are the Templates Engines',
        content: 'Template engines are tools in web development that enable dynamic content generation by combining templates with data. They simplify the process of rendering HTML and other markup languages with data from an application. Popular examples include Handlebars, EJS, and Mustache.',
        user_id: 2
    },
    {
        title: 'What is Handlebars.js?',
        content: 'Handlebars.js is a popular JavaScript templating engine that simplifies the process of rendering dynamic HTML by combining templates with data. It allows you to create reusable templates with placeholders and then fill in those placeholders with real data to generate HTML content. Handlebars.js is commonly used in web development for building dynamic web pages and is known for its simplicity and flexibility.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;