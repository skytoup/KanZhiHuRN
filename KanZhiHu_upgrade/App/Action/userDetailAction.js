/**
 * Created by apple on 16/2/17.
 */

'use strict';

import * as types from './types';
import httpGet from '../Util/SkyRequest';

export function getUserDetail(hash: String) {
    let url = `http://api.kanzhihu.com/userdetail2/${hash}`;
    return dispatch => {
        httpGet(
            url,
            obj => {
                if (obj.error !== '') {
                    dispatch(userDetailGetFail(new Error(obj.error)));
                } else {
                    dispatch(userDetailGetSuccess(obj));
                }
            },
            err => {
                dispatch(userDetailGetFail(err))
            }
        );
    }
}

export function initUserDetail() {
    return dispatch => {
        dispatch({type: types.ACTION_InitUserDetail});
    }
}

function userDetailGetSuccess(responseObj:Object) {
    return {
        type: types.ACTION_GetUserDetailSuccess,
        responseObj
    }
}

function userDetailGetFail(error:Error) {
    return {
        type: types.ACTION_GetUserDetailFail,
        error
    }
}