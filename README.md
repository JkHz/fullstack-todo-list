# Fullstack Todo List

### Project overview:
> We will be building a Todo List application using ReactJS, ExpressJS, and MongoDB.  

### Getting Started:
> * Fork and clone down this repo.  
> * In a terminal window, run `npm install` to install dependencies. 
> * Run `npm run build` to begin transpiling your React code using Webpack

### Step One - Build an express server:  
> * Use ExpressJS to create a basic web server. Follow instructions within `server/index.js` and launch on a port of your choosing.
> * In a separate terminal window, run `npm start`.  
> * In a browser window, navigate to `http://localhost:[your port here]`.  
> * You should see a styled page with a header that reads "Todo List". Hint: remember to serve the static files within `client/dist`.  

### Step Two: Establish database connection:
> * Within `database/index.js` use `mongoose` to create a connection to MongoDB.  
> * Create a schema for each Todo item; it should contain two fields - the name of the Todo item and a "completed" boolean which should default to `false`.   
> * Create a model from your schema and export it from this file.

### Step Three: Build out backend CRUD operation functionality:  
> * Within `database/dbHelpers` create and export an object which will store your dbHelper functions. 
> * These functions should use your `Model` to allow for the following functionality:
> * 1. Fetch all Todo items.  
> * 2. Store a new Todo item.  
> * 3. Update a specified Todo item's `completed` field to a provided boolean value (ie: change an item's `completed` value from `false` to `true`).  
> * 4. Delete a specified Todo item from the database.  
> * NOTE: it is recommended that you use `async/await` and `try/catch` syntax.  

> * Within `server/index.js` create corresponding request handlers for each dbHelper function.  

### Step Four: Build out frontend UI:
> * Modify `App.js` and create additional components to allow for the following user experience:
> * 1. Upon page load, render all Todo list items fetched from database to the screen
> * 2. Allow user to enter a new item into the text input, and add the item to the database when the `Add item` button is clicked. Make sure that the new item is automatically rendered to the screen.  
> * 3. Each Todo item should render two buttons: `Mark as Complete` and `Delete`.  
> * - Upon click of 'Mark as Complete', modify the styling such that the text is crossed out (ie: ~~like this~~)
> * Hint: use `axios` for client-side `AJAX` requests.  


### Helpful Resources:  
> * [ReactJS](https://reactjs.org/docs/hello-world.html)
> * [ExpressJS](https://expressjs.com/en/starter/hello-world.html)
> * [ExpressJS serving static files](http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express)
> * [Mongoose](https://mongoosejs.com/docs/)
