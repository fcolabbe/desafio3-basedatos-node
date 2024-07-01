import express from 'express';
import dotenv from 'dotenv';
import router from './routes/route.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

//routes 
app.use("/",router)


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});