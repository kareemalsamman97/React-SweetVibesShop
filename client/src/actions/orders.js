import { FETCH_ALL_ORDER, CREATEORDER, UPDATEORDER, DELETEORDER } from '../constants/actionTypes';
import * as api from '../api/OrdersIndex.js';

export const getOrder = () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrder();

    dispatch({ type: FETCH_ALL_ORDER, payload:  data});
  } catch (error) {
    console.log(error);
  }
};

export const createOrderss = (order) => async (dispatch) => {
  try {
    const { data } = await api.createOrders(order);

    dispatch({ type: CREATEORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = (id, order) => async (dispatch) => {
  try {
    const { data } = await api.updateOrder(id, order);

    dispatch({ type: UPDATEORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};



export const deleteOrder = (id) => async (dispatch) => {
  try {
    await await api.deleteOrder(id);

    dispatch({ type: DELETEORDER, payload: id });
  } catch (error) {
    console.log(error);
  }
};
