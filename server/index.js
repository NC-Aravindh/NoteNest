import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const app = express();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "NoteNest",
  password: "1234",
  port: "5432",
});

db.connect();
app.use(
  cors({
    origin: "http://localhost:5173", // use your actual domain name (or localhost), using * is not recommended
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-With",
      "Accept",
      "x-client-key",
      "x-client-token",
      "x-client-secret",
      "Authorization",
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/add", async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  await db.query("INSERT INTO usernotes(title,content) VALUES($1 , $2)", [
    title,
    content,
  ]);
});

app.listen(5000, () => {
  console.log("Server is running at Port 5000");
});
