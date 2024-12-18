import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Use DATABASE_URL from .env or a default fallback
const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes("rds.amazonaws.com")
    ? { rejectUnauthorized: false }
    : false, // Only apply SSL for cloud databases
});

app.use(
  cors({
    origin: "https://ec2-13-61-12-21.eu-north-1.compute.amazonaws.com",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/notes", async (req, res) => {
  const data = await db.query("SELECT * FROM usernotes ORDER BY id ASC;");
  res.json(data.rows);
});

app.post("/add", async (req, res) => {
  try {
    const { title, content } = req.body;

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

app.put("/editNote/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    await db.query(
      "UPDATE usernotes SET title = CASE WHEN $1 != '' THEN $1 ELSE title END, content = CASE WHEN $2 != '' THEN $2 ELSE content END WHERE id = $3",
      [title, content, id]
    );
    res.status(204).json({ message: "Note updated successfully" });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.PORT_NO, () => {
  console.log("Server is running at Port 5000");
});
