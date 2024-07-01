import express from 'express';
import { addPost, getPost } from '../models/queries.js';

const router = express.Router();
router.get('/', (req, res) => {
    res.send(`Hello from Vite and Express!`);
  });
  
router.get('/posts', async(req, res) => {
    const posts = await getPost();
    res.json(posts);
  });


router.post('/posts', async(req, res) => {
    const { titulo, url: img, descripcion, likes } = req.body;
    await addPost(titulo, img, descripcion, likes)
    res.send('Post added successfully')
});

export default router;