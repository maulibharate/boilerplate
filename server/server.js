const express = require('express');
const app = express();
const cookieParsere = require('cookie-parser');
const result = require('dotenv').config();

const PORT = process.env.SERVER_PORT || 8090


if (result.error) {
    console.error('Error reading env', result.error);
}

require('./db/conn');

app.use(express.json());
app.use(cookieParsere());

// we link the router files to make our easy
app.use(require('./api/routers/auth.routes'));
app.use(require('./api/routers/dashboard.routes'));

// const ApiRoutes = require('./api/routers');

// const apiRoutes = new ApiRoutes();
// apiRoutes.init();

if (process.env.NODE_ENV === "production") {

    // Set static folder   
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes    html or routing and naviagtion
    // app.get("*", (req, res) => {
    //   res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    // });
  }
  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
