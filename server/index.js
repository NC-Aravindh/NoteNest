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

app.get("/notes", async (req, res) => {
  const data = await db.query("SELECT * FROM usernotes");
  res.json(data.rows);
});

app.post("/add", async (req, res) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    await db.query("INSERT INTO usernotes(title,content) VALUES($1 , $2)", [
      title,
      content,
    ]);
    res.status(201).json({ message: "Note added successfully" });
  } catch (error) {
    console.error("Error adding note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/deleteNote/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM usernotes WHERE id=$1", [id]);
    res.status(204).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Server is running at Port 5000");
});
