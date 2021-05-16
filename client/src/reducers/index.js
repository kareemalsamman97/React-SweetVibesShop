import { combineReducers } from 'redux';
import posts from './Posts[Reducers]';
import auth from './Auth[Reducers]';
import orders from './Orders[Reducers]';
import notiys from './Notfication[Reducer]';
export const reducers = combineReducers({ posts, auth , orders , notiys});


//************************************************************************************************************//
//                                       Home Reducer                                                         //
//                                                                                                            //
// here it contines all the redcuers page in one page                                                         //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//