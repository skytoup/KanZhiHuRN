/**
 * Created by apple on 16/2/17.
 */

'use strict';

import React, {ListView} from 'react-native';
import * as types from '../Action/types';

let initState = {};
export default function getUserDetail(state = initState, action) {
    switch (action.type) {
        case types.ACTION_GetUserDetailSuccess:
        {
            return {userDetail: action.responseObj};
        }
        case types.ACTION_GetUserDetailFail:
        {
            return state;
        }
        case types.ACTION_InitUserDetail:
        {
            return initState;
        }
        default:
        {
            return state;
        }
    }
}