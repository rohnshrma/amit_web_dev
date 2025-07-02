import express from "express";

import bodyParser from "body-parser";

const app = express();

const PORT = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.route("/").get((req, res) => {
  res.sendFile(process.cwd() + "/pages/index.html");
});
app.route("/about").get((req, res) => {
  res.sendFile(process.cwd() + "/pages/about.html");
});
app
  .route("/contact")
  .get((req, res) => {
    res.sendFile(process.cwd() + "/pages/contact.html");
  })
  .post((req, res) => {
    console.log(req.body);
  });

app.route("/:route").get((req, res) => {
  console.log(process.cwd());
  res.sendFile(`${process.cwd()}/pages/404.html`);
});

app.listen(PORT, () => {
  console.log("server started on port ", PORT);
});
