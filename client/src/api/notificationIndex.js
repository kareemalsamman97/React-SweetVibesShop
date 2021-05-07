import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

///////////////////////////////
export const fetchNotification = () => API.get('/notification');
export const createNotification  = (newNotification) => API.post('/notification', newNotification );
export const deleteNotification  = (id) => API.delete(`/notification/${id}`);
export const updateNotification = (id, updatedNotification) => API.patch(`/notification/${id}`, updatedNotification);