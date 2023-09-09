import express from 'express';
import dotenv from 'dotenv';
import notion from '../controllers/notion.controller.js';

dotenv.config();

const notionRouter = express.Router();

notionRouter.get("/", (req, res) => {
  res.send("Notion API integration");
});


// Get Projects
notionRouter.get("/projects", async (req, res) => {
  try {
      const databaseId = process.env.NOTION_DATABASE_KEY;
      const response = await notion.databases.query({
          database_id: databaseId,
      });
      console.log(response);
      
      res.json(response);
  } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});


export default notionRouter;