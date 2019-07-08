import express from 'express';
import pizzaCtrl from '../controllers/pizza';

const router = express.Router();
router.get('/all', pizzaCtrl.all);
router.put('/save', pizzaCtrl.save);

export default router;
