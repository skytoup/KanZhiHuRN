/**
 * Created by apple on 16/2/15.
 */

'use strict';

import * as types from './types';
import httpGet from '../Util/SkyRequest';

export function getPosts(time:Number) {
    let url = 'http://api.kanzhihu.com/getposts';
    let loadMore = false;
    if (time != null && time != undefined) {
        url += `/${time}`;
        loadMore = true;
    }
    return dispatch => {
        if (loadMore === false) {
            dispatch(postsRefresh(true));
        }
        httpGet(
            url,
            obj => {
                if (obj.error !== '') {
                    dispatch(postsGetFail(new Error(obj.error)));
                } else {
                    dispatch(postsGetSuccess(obj.posts, loadMore));
                }
            },
            err => {
                dispatch(postsGetFail(err))
            }
        );
    }
}

function postsGetSuccess(responseObj:Object, loadMore:Boolean) {
    return {
        type: types.ACTION_GetPostsSuccess,
        loadMore,
        responseObj
    }
}

function postsGetFail(error:Error) {
    return {
        type: types.ACTION_GetPostsFail,
        error
    }
}

function postsRefresh(isRefreshing:boolean) {
    return {
        type: types.ACTION_GetPostsRefresh,
        isRefreshing
    }
}