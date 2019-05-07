import * as express from "express";
import log from "./log";

const app = express();

app.get("/", (req, res) => {
    res.json(JSON.stringify({ok: 1})).end();
});

app.get("/login", (req, res) => {
    res.send("LO HICE!!");
});

app.listen(process.env.PORT || 5000, () => {
    log.info("app running");
});
