const express = require("express");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");
const app = express();
app.use(cookieParser());
app.use(csurf({ cookie: true }));
const total = (precio, cant, desc) =>
 precio * cant * (1 - desc);
app.get("/total", (req, res) => {
 const { p, c } = req.query;
 res.json({ total: total(p, c, 0) });
});
app.get("/calcular", (req, res) => {
 res.json({ resultado: eval(req.query.expr) });
});
module.exports = { app, total };
