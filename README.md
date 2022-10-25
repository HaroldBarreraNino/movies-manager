# movies-manager
A IMDB application made with Parse server, MySQL and React.
---
---
## Requirements

This application requires:
1. PostgreSQL (you could also use MongoDB if you don't want to use a relational database)
2. NodeJS (minimum version 15)
---
## Install

### Backend

The Backend of this application is made with **Parse Server** framework. If you want to know more about you can visit the [documentation](https://docs.parseplatform.org/parse-server/guide/). Go to the `index.js` file in the `backend` directory. You must find and focus only on this section:
```
const config = {
  databaseURI: databaseUri || 'postgres://youruser:yourpassword@localhost:5432/yourdbname', 
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'yourAppId',
  masterKey: process.env.MASTER_KEY || 'yourMasterKey', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse', // Don't forget to change to https if needed
  liveQuery: {
    classNames: ['Posts', 'Comments'], // List of classes to support for query subscriptions
  },
};
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "http://localhost:1337/parse",
      "appId": "yourAppId",
      "masterKey": "yourMasterKey",
      "appName": "yourAppName"
    }
  ]
});
```
After you configure your backend, there isn't need to do anything else. Now you need to execute in the terminal `npm install` and afterwards `npm start`. If everything is okay, you should get a message that says your server is open on [Port 1337](http://localhost:1337/).
***
### Frontend
This is easier to get ready, you only have to execute in the terminal `npm install` and then `npm start`. This was made with the React library, so it should open the app on your browser, even though, if it doesn't open, go to [Port 3000](http://localhost:3000/). Then you must visit the `index.js` file on the `frontend` directory and find this:
```
initializeParse(
  'http://localhost:1337/parse',
  'yourAppId' //Change this value if you change it in the backend
);
```
This will connect the backend with the frontend and there you go!
***

#### Remember to always have your database service active while executing the backend. Also you need to have the backend active while executing the frontend.

## Extras
1. You can configure your own CSS with the `App.css` file found in the `frontend` directory.
2. Using MongoDB or PostgreSQL doesn't affect the functionality of the app. However, if you use MongoDB, you must change the `database.Uri` found in the `backend/index.js` file.
3. You don't need to export a database when you use the app, it actually creates the database when you execute it. You only need to put data on it.
    * To put data on it, you must register an admin account, which is an account that has as username 'admin'.
    * If you want to create a movie, you must have the youtube embed URL of the trailer and the image URL.
4. You can use the backend [dashboard](http://localhost:1337/dashboard) to manage your database. To visit it, you must go to your backend URL, and go to the `/dashboard` route.
    * This is optional because you can also use any other database management system that you like.
# Enjoy!