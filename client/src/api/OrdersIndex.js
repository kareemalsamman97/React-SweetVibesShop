import axios from 'axios';
const API = axios.create({ baseURL: 'https://kareemalsamman-sweetvibesshop.zeet.app' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});
export const fetchOrder = () => API.get('/orders'); // fetching all the orders
export const createOrders = (newOrder) => API.post('/orders', newOrder); // creating new order
export const updateOrder = (id, updateOrder) => API.patch(`/orders/${id}`, updateOrder); // updating exit order
export const deleteOrder = (id) => API.delete(`/orders/${id}`); // deleting exit order
///////////////////////for the orders data/////////////////////////////////////////////////////