<div align="center">

# MVC-TechBlog

<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/express-handlebars-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-MVC-red" >
    <img src="https://img.shields.io/badge/-sequelize-lightgrey" />
    <img src="https://img.shields.io/badge/-json-orange" />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/express.js-green" />
</p>

# description
 a CMS-style blog website akin to WordPress designed for developers to post their blogs and engage in discussions by commenting on each other's content. The application will adhere to the MVC architectural pattern, employing Handlebars.js for templating, Sequelize as the ORM, and integrating the express-session npm package for authentication.

 The URL of the GitHub repository is <strong>https://github.com/alekhyavinni/MVC-TechBlog.git</strong>.
and the repository name is 14-MVC-Tech-Blog.

The URL of the deployed application to Heroku is <strong>https://mvc-techblog12-63b325561706.herokuapp.com/</strong>.

The overview of the deployed application to Heroku :-

![alt text](/assets/heroku.png)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [References](#references)
* [License](#license)

## Installation

* The application follows the Model-View-Controller paradigm.  The Model-View-Controller(MVC) is an architectural pattern that adheres to the separation of concerns principle.

* The folder structure for the application will be set up according to this MVC paradigm.

  - The Model - stores data and data-related logic
  - The View - the UI/UX concerns, or what a user will see and interact with.
  - The Controller - the interface between Models and Views.  It processes requests from the View, uses the Model to manipulate data, and sends data to the View to render.

* This application will need the installation of node.js from the website, https://www.node.org.

* Node Package Manager (npm) is a software manager and installer which puts the modules in place so that the node project can utilize it, and also, it manages dependency conflicts intelligently and initialized using <strong>npm init</strong>.  The package.json will be generated and will contains all the details of the application in which the user have inputted during the npm initialization.

* This application will need the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for the Views, use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for the Models, and create an Express.js API for the Controllers.

* This application will also need the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

* The [express-session](https://www.npmjs.com/package/express-session) package is required to store the session data on the client in a cookie. When the user is idle on the site for more than a set time, the cookie will expire and the user will be required to log in again to start a new session. This is the default behavior and nothing is to be done except to include the implementation of the package.

  - npm install express
  - npm install --save mysql2
  - npm i sequelize
  - npm install dotenv --save
  - npm i bcrypt 
  - npm install express-session
  - npm i connect-session-sequelize
  - npm i handlebars
  - npm i express-handlebars

* Nodemon is installed as development dependency meaning that if our application ever goes in production, this package will not be included. The command to install for in this case is npm i -D nodemon. The purpose of this package is to watch for any changes in our files and restart the server instead of us having to do that manually ourselves. The screenshot show the working of the nodemon.  

* The test of the application is done locally before deployment to Heroku using Insomnia.  At the command prompt, type in npm start or nodemon server.js:-

  ![alt text](/assets/MVC1.png)

* Testing locally using Insomnia

  ![alt text](/assets/MVC2.png)

* The database models are set up in accordance to the criteria.   MySQL Workbench is installed to help with design, create and browse the database schemas, work with database objects and insert data as well as design and run SQL queries to work with stored data.  Schemas and data from other database vendors can be migrated from database vendors to MySQL database.
  
* For this application, at command prompt, type in npm run seeds :- 

   ![alt text](/assets/MVC3.png)

* Below shows MySQL tables for the database, tech_blog:-

    ![alt text](/assets/MVC4.png)
    ![alt text](/assets/MVC5.png)
    ![alt text](/assets/MVC6.png)
    ![alt text](/assets/MVC7.png)

## Usage

The steps to show on how the user could use the tech-blog:-

* This application is deployed to Heroku,  click on the link  [HEROKU - MVC TECH BLOG] https://mvc-techblog12-63b325561706.herokuapp.com/

* When the user visit the CMS-style Blog site, the user will be presented with the home page, which includes the existing blog posts, navigation links for the homepage.

  ![alt text](/assets/heroku.png)

* When the user is taken to the homepage and clicking on any other links in the navigation, the user would be prompted to either sign up or sign in.  When the user choose to sign up and prompted to create a username and password and click on the sign-up button, the user credentials are saved and the user is logged into the site.

   ![alt text](/assets/MVC9.png)
   ![alt text](/assets/MVC10.png)
   ![alt text](/assets/MVC8.png)


* When the user click on the existing blog post, the user will be presented with the post title, contents, post creator's username, and date created for that post and have option to comment. When the user enter a comment and click on the submit button while signed in, then the comment is saved and the post is updated to display the coment, the comment creator's username, and the date created.

  ![alt text](/assets/img07.png)

* when the user click on the dashboard option in the navigation, then the user is taken to the dashboard and presented with the blog post the user have created and the option to add a new blog post and when the click on the button (grey bar) to add a new blog post.  Then the user is prompted to enter both a title and contents for the blog post and when the user click on the button to create a new blog post.  The title and contents of the post are saved and the user is taken back to an updated dash board with the new blog post.

  ![alt text](/assets/MVC11.png)
  ![alt text](/assets/MVC12.png)
  ![alt text](/assets/MVC13.png)



## License

[MIT License](https://opensource.org/licenses/MIT)

## Contributing

This project was created as a challenge assignment for the UT Full Stack Boot Camp. Contact me with any ideas or requests.

## Contact
  If you have any questions about this projects, please contact me directly at alekhyavinni12@gmail.com. You can view more of my projects at https://github.com/alekhyavinni


