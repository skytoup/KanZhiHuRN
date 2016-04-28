/**
 * Created by apple on 16/2/15.
 */

'use strict';

import React, {ListView} from 'react-native';
import * as types from '../Action/types';

let initialDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default function getPosts(state = {posts: initialDataSource, isRefreshing: false, datas: []}, action) {
    switch (action.type) {
        case types.ACTION_GetPostsSuccess:
        {
            let datas;
            if (action.loadMore) {
                datas = state.datas.concat(action.responseObj);
            } else {
                datas = action.responseObj;
            }
            let newPosts = state.posts.cloneWithRows(datas);
            return {posts: newPosts, isRefreshing: false, datas};
        }
        case types.ACTION_GetPostsFail:
        {
            let newState = {...state};
            newState.isRefreshing = false;
            return newState;
        }
        case types.ACTION_GetPostsRefresh:
        {
            let newState = {...state};
            newState.isRefreshing = action.isRefreshing;
            return newState;
        }
        default:
        {
            return state;
        }
    }
}