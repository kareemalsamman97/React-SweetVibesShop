import express from 'express';
import mongoose from 'mongoose';

import Notification from '../models/notification.js';

const router = express.Router();

export const getNotification = async (req, res) => { 
    try {
        const Postnotification = await Notification.find();
                
        res.status(200).json(Postnotification);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createtNotification = async (req, res) => {
    const noity = req.body;

    const newnotification = new Notification({ ...noity, NotificationOrderID: req.userId, NotificationDate: new Date().toISOString() })

    try {
        await newnotification.save();

        res.status(201).json(newnotification);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateNotifications = async (req, res) => {
    const { id } = req.params;
    const { NotificationType, NotificationMessage, NotificationSeenOrNot, NotificationImages, NotificationTitle , NotificationDate } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedNotification = { NotificationType, NotificationMessage, NotificationSeenOrNot, NotificationImages, NotificationTitle, NotificationDate , _id: id };

    await Notification.findByIdAndUpdate(id, updatedNotification, { new: true });

    res.json(updatedNotification);
} 

export const deletetNotification = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Notification.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
//updateNotifications


export default router;
