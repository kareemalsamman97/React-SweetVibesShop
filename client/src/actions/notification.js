import { FETCH_ALL_NOTIFICATION, CREATENOTIFICATION, UPDATENOTIFICATION , DELETENOTIFICATION  } from '../constants/actionTypes';
import * as api from '../api/notificationIndex.js';

export const fetchNotification = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotification();

    dispatch({ type: FETCH_ALL_NOTIFICATION, payload:  data});
  } catch (error) {
    console.log(error);
  }
};
export const updateNotifications = (id, notiy) => async (dispatch) => {
  try {
    const { data } = await api.updateNotification(id, notiy);

    dispatch({ type: UPDATENOTIFICATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createNotifications = (notiy) => async (dispatch) => {
  try {
    const { data } = await api.createNotification(notiy);

    dispatch({ type: CREATENOTIFICATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNotification = (id) => async (dispatch) => {
  try {
    await await api.deleteNotification(id);

    dispatch({ type: DELETENOTIFICATION, payload: id });
  } catch (error) {
    console.log(error);
  }

};