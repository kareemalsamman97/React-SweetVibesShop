import axios from 'axios';
const API = axios.create({ baseURL: 'https://kareemalsamman-sweetvibesshop.zeet.app' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});
export const fetchNotification = () => API.get('/notification'); // getting all notfication 
export const createNotification  = (newNotification) => API.post('/notification', newNotification ); // creatign new notfication
export const deleteNotification  = (id) => API.delete(`/notification/${id}`); // deleting exit notfication
export const updateNotification = (id, updatedNotification) => API.patch(`/notification/${id}`, updatedNotification); // updating the exit notfication
///////////////////////for the notification data/////////////////////////////////////////////////////