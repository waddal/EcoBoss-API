const express = require('express');
// const helmet = require("helmet");
const cors = require('cors');
const session = require('express-session');
// const path = require("path");
const dotenv = require('dotenv');
const config_result = dotenv.config();
if (process.env.NODE_ENV != 'production' && config_result.error) {
  throw config_result.error;
}

const activitiesRouter = require('./routes/activities/router');
const bossesRouter = require('./routes/bosses/router');
const usersRouter = require('./routes/users/router');

const server = express();

server.use(express.json());
// server.use(express.static(path.join(__dirname, "client/build")));
// server.use(helmet());
server.use(cors({ origin: '*' }));
server.use(session({
  name: 'monkey', // name of sessionId
  secret: 'make it long and random', // sessionId is actually encrypted
  cookie: {
    maxAge: 1000 * 60 * 60, // millisecond * 60 = 1min, 1min * 60 = hour long til expiration,
    secure: false, // in prodi t should be true, cookie should only work over https
    httpOnly: false, // make true if possible
  },
  rolling: true, // if user hits db, session will extend || push back the expiration date of cookie
  resave: false, // ignore for now
  saveUninitialized: false, // if false, sessions will not be stored "by default"
}))

server.use('/activities', activitiesRouter);
server.use('/bosses', bossesRouter);
server.use('/users', usersRouter);

// Catch
server.get('*', (req, res) => {
  res.json({ message: `Hi, you've reached the EcoBoss-API!` });
  // res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Error Handler
server.use(function (req, res, next) {
  next(res.status(404));
});

module.exports = server;
