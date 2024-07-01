import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.send(`Hello from Vite and Express!`);
  });
  
router.get('/test', (req, res) => {
    res.send(`Hello from Vite and Express (Test)!`);
  });

export default router;