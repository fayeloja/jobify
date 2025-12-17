import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Jobify!");
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
