import express from "express";
const app = express();
const PORT = 3000;

// routes
// home | root route

app.route("/").get((req, res) => {});

// about
app.route("/about").get((req, res) => {
  res.sendFile(process.cwd() + "/pages/about.html");
});

app.listen(PORT, () => {
  console.log("server started on port ", PORT);
});
