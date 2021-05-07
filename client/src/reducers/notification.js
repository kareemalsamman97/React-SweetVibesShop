import { FETCH_ALL_NOTIFICATION, CREATENOTIFICATION, DELETENOTIFICATION , UPDATENOTIFICATION} from '../constants/actionTypes';

export default (notiys = [], action) => {
  switch (action.type) {
    case FETCH_ALL_NOTIFICATION:
      return action.payload;
    case UPDATENOTIFICATION:
    return notiys.map((notiy) => (notiy._id === action.payload._id ? action.payload : notiy));
    case CREATENOTIFICATION:
      return [...notiys, action.payload];
      
    case DELETENOTIFICATION:
      return notiys.filter((notiy) => notiy._id !== action.payload);
    default:
      return notiys;
  }
};

