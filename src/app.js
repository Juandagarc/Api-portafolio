import express from 'express';
import cors from 'cors';
import indexRouter from './routes/index.routes.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Open Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});


// Routes
app.use('/api', indexRouter);

app.get('/', (req, res) => {
    res.send('API is running...');
    } 
);

export default app;