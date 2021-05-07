import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

///////////////////////////////
export const fetchOrder = () => API.get('/orders');
export const createOrders = (newOrder) => API.post('/orders', newOrder);
export const updateOrder = (id, updateOrder) => API.patch(`/orders/${id}`, updateOrder);
export const deleteOrder = (id) => API.delete(`/orders/${id}`);