/**
 * Created by apple on 16/2/15.
 */

'use strict';

import React, {
    PropTypes,
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as postAction from './postsAction';
import * as postAnswersAction from './postAnswersAction';
import * as topuserAction from './topuserAction';
import * as userDetailAction from './userDetailAction';

const actions = {
    ...postAction,
    ...postAnswersAction,
    ...topuserAction,
    ...userDetailAction
};

export default function createActions(dispatch) {
    return bindActionCreators(actions, dispatch);
};