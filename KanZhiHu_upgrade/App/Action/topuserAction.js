/**
 * Created by apple on 16/2/16.
 */

'use strict';

import * as types from './types';
import httpGet from '../Util/SkyRequest';

export function getTopuser(value:String, page:Number = 1) {
    let url = `http://api.kanzhihu.com/topuser/${value}/${page}`;
    return dispatch => {
        httpGet(
            url,
            obj => {
                if (obj.error !== '') {
                    dispatch(topuserGetFail(new Error(obj.error)));
                } else {
                    dispatch(topuserGetSuccess(obj.topuser,value, page));
                }
            },
            err => {
                dispatch(topuserGetFail(err))
            }
        );
    }
}

export function initTopuser() {
    return dispatch => {
        dispatch({type: types.ACTION_InitTopuser});
    }
}

function topuserGetSuccess(responseObj:Object, value, page) {
    return {
        type: types.ACTION_GetTopuserSuccess,
        responseObj,
        value,
        page
    }
}

function topuserGetFail(error:Error) {
    return {
        type: types.ACTION_GetTopuserFail,
        error
    }
}