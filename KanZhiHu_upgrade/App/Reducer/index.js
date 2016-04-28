/**
 * Created by apple on 16/2/15.
 */

'use strict';

import  {combineReducers} from 'redux';
import posts from './posts';
import postAnswers from './postAnswers';
import topuser from './topuser';
import userDetail from './userDetail';

const rootReducer = combineReducers({
    posts,
    postAnswers,
    topuser,
    userDetail
});

export default rootReducer;