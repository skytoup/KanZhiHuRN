/**
 * Created by apple on 16/2/16.
 */

'use strict';

import * as types from './types';
import httpGet from '../Util/SkyRequest';

export function getPostAnswers(date:Number, name:String) {
    let url = `http://api.kanzhihu.com/getpostanswers/${date}/${name}`;
    return dispatch => {
        httpGet(
            url,
            obj => {
                if (obj.error !== '') {
                    dispatch(postsGetFail(new Error(obj.error)));
                } else {
                    dispatch(postsGetSuccess(obj.answers));
                }
            },
            err => {
                dispatch(postsGetFail(err))
            }
        );
    }
}

export function initPostAnswers() {
    return dispatch => {
        dispatch({type: types.ACTION_InitPostAnswers});
    }
}

function postsGetSuccess(responseObj:Object) {
    return {
        type: types.ACTION_GetPostAnswersSuccess,
        responseObj
    }
}

function postsGetFail(error:Error) {
    return {
        type: types.ACTION_GetPostAnswersFail,
        error
    }
}