import express from "express";
import bodyParser from "body-parser";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import db from "./models";
// import apiPost from "./app/api/post";
// import apiAuthor from "./app/api/author";
import apiJobs from "./app/api/jobs";

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

// apiPost(app, db);
// apiAuthor(app, db);
apiJobs(app, db);

db.sequelize.sync().then(() => {
  app.listen(3123, () => console.log("App listening on port 3123!"));
});