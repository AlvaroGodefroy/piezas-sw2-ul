import * as express from "express";
import * as path from 'path';
import * as routes from "./routes";
import log from "./log";

const app = express();
const port = 5000;

app.set('port', (process.env.PORT || 5000));

//Express with EJS
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs")

//Configure routes
routes.register (app);

app.listen(app.get('port'), () => {
    log.info("app running");
});
