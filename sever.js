const express = require('express')
const routes = require('./routes')
const path = require('path')
const exphbs = require ('express-handlebars')
const sequelize = require('./controller')
const hbs = exphbs.create({
    helpers
});
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, public')));


