import axios from 'axios';
const API = axios.create({ baseURL: 'https://kareemalsamman-sweetvibesshop.zeet.app' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});
export const fetchPosts = () => API.get('/posts'); // fetching all the products
export const createPost = (newPost) => API.post('/posts', newPost); // creating new product
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost); // updating the exit product
export const deletePost = (id) => API.delete(`/posts/${id}`); // deleting the product
//////////////////////////// for the products data////////////////////
export const signIn = (formData) => API.post('/user/signin', formData); // singin action
export const signUp = (formData) => API.post('/user/signup', formData); // signup action
/////////////////////////////// for the auth page/////////////////////////////
