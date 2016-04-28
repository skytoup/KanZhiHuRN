/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {ListView} from 'react-native';
import * as types from '../Action/types';

let initialDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let initState = {topuser: initialDataSource};

export default function getTopuser(state = initState, action) {
    switch (action.type) {
        case types.ACTION_GetTopuserSuccess:
        {
            let datas;
            if (action.page > 1) {
                datas = state.datas.concat(action.responseObj);
            } else {
                datas = action.responseObj
            }
            let topuser = state.topuser.cloneWithRows(datas);

            return {topuser, page: action.page, value: action.value, datas};
        }
        case types.ACTION_GetTopuserFail:
        {
            return state;
        }
        case types.ACTION_InitTopuser:
        {
            return initState;
        }
        default:
        {
            return state;
        }
    }
}