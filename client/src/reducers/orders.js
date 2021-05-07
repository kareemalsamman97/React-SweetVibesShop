import { FETCH_ALL_ORDER, CREATEORDER, UPDATEORDER, DELETEORDER} from '../constants/actionTypes';

export default (orders = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ORDER:
      return action.payload;
    case CREATEORDER:
      return [...orders, action.payload];
    case UPDATEORDER:
      return orders.map((order) => (order._id === action.payload._id ? action.payload : order));
    case DELETEORDER:
      return orders.filter((order) => order._id !== action.payload);
    default:
      return orders;
  }
};

