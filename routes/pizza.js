import express from 'express';
import pizzaCtrl from '../controllers/pizza';

const router = express.Router();
router.get('/pizzas', pizzaCtrl.all);
router.post('/pizzas', pizzaCtrl.save);
router.put('/pizzas/:id', pizzaCtrl.update);
router.delete('/pizzas/:id', pizzaCtrl.delete);

export default router;
