import express from 'express';
import pizzaCtrl from '../controllers/pizza';

const router = express.Router();
router.get('/pizzas', pizzaCtrl.all);
router.post('/pizzas', pizzaCtrl.save);
router.put('/pizzas/:id', pizzaCtrl.update);

export default router;
