import express from 'express';

import { getOrders , getOrder , createOrderss , updateOrder , deleteOrder } from '../controllers/orders.js';

const router = express.Router();


router.get('/', getOrders);
router.post('/',  createOrderss);
router.patch('/:id',  updateOrder);
router.delete('/:id', deleteOrder);

export default router;