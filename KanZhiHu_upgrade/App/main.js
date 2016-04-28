/**
 * Created by apple on 16/2/15.
 */

'use strict';

import React, {
    Component,
    ListView,
    AppRegistry
} from 'react-native';
import { Provider } from 'react-redux/native';
import App from './Container/app';
import configureStore from './Store/configureStore';
import {connect} from 'react-redux/native';
import createAction from './Action';

const store = configureStore();

function mapStateToTopProps(state) {
    return state;
}

function mapDispatchToTopProps(dispatch) {
    return createAction(dispatch);
}

var A = connect(mapStateToTopProps, mapDispatchToTopProps)(App);

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <A />}
            </Provider>
        );
    }
};