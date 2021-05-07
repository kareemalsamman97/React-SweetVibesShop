import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema({
    NotificationType: String,
    NotificationMessage: String,
    NotificationSeenOrNot: String,
    NotificationImages: String,
    NotificationTitle: String,
    NotificationDate: {
        type: Date,
        default: new Date(),
    },
})

var Notification = mongoose.model('notification', notificationSchema);

export default Notification;