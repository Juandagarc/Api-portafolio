import express from 'express';
import notionRouter from './notion.routes.js';

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
    res.send("API create for Notion API integration");
});

indexRouter.use('/notion', notionRouter);

export default indexRouter;