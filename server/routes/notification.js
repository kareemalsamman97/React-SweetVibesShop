import express from 'express';

import { getNotification  , createtNotification ,updateNotifications , deletetNotification } from '../controllers/notification.js';

const router = express.Router();


router.get('/', getNotification);
router.post('/',  createtNotification);
router.patch('/:id', updateNotifications);
router.delete('/:id', deletetNotification);
export default router;