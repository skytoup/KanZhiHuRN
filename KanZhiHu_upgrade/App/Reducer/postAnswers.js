/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {ListView} from 'react-native';
import * as types from '../Action/types';

let initialDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let initState = {postAnswers: initialDataSource};

export default function getPostAnswers(state = initState, action) {
    switch (action.type) {
        case types.ACTION_GetPostAnswersSuccess:
        {
            let postAnswers = state.postAnswers.cloneWithRows(action.responseObj);
            return {postAnswers};
        }
        case types.ACTION_GetPostAnswersFail:
        {
            return state;
        }
        case types.ACTION_InitPostAnswers:
        {
            return initState;
        }
        default:
        {
            return state;
        }
    }
}