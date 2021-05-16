import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    localStorage.setItem('isLoggedIn' , JSON.stringify(true))
    dispatch({ type: AUTH, data });
    router.push('/shop');
  } catch (error) {
   alert('You have entered an invalid email or password')
  }
};
export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push('/shop');
  } catch (error) {
  }
};
////////////// for the auth data////////////////////////////