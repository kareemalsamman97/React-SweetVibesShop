import express from 'express';
import mongoose from 'mongoose';

import Orders from '../models/OrderPosts.js';

const router = express.Router();

export const getOrders = async (req, res) => { 
    try {
        const PostOrders = await Orders.find();
                
        res.status(200).json(PostOrders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getOrder = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Orders.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createOrderss = async (req, res) => {
    const post = req.body;

    const newOrderMessage = new Orders({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newOrderMessage.save();

        res.status(201).json(newOrderMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { StatusOrder , CustomerName, CustomerOrders, CustomerPhone, CustomerEmail, CustomerAddress , TotalPrice , Quntity , OrderImages , createdAt } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateOrder = { StatusOrder , CustomerName, CustomerOrders, CustomerPhone, CustomerEmail, CustomerAddress , TotalPrice , OrderImages, Quntity, createdAt, _id: id };

    await Orders.findByIdAndUpdate(id, updateOrder, { new: true });

    res.json(updateOrder);
}

export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Orders.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export default router;