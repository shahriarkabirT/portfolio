import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import routes from './routes/index.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config();
connectDB();

const corsOptions = {
    origin: ['http://103.191.51.232:3000','http://localhost:3000','http://103.191.51.232'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  };
  
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/',routes);
app.use('/api/users',userRoutes);
 
export default app; 
