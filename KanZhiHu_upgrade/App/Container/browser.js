/**
 * Created by apple on 16/2/17.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    WebView,
    TouchableOpacity,
    Text,
    PropTypes
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tool: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 35,
        alignItems: 'center',
        borderTopColor: '#bcbac1',
        borderTopWidth: 1
    },
    btn: {
        padding: 10
    }
});

var WEBVIEW_REF = 'webview';

/**
 * 简单网页浏览器
 */
export default class Browser extends Component {
    propTypes: {
        url: PropTypes.string.isRequired
        };

    render() {
        let canGoBack = this.state !== null && this.state.canGoBack;
        let canGoForward = this.state !== null && this.state.canGoForward;
        let loading = this.state !== null && this.state.loading;
        return (
            <View style={styles.container}>
                <WebView
                    ref={WEBVIEW_REF}
                    source={{uri: this.props.url}}
                    startInLoadingState={true}
                    onNavigationStateChange={ state => this._onNavigationStateChange(state)}
                />
                <View style={styles.tool}>
                    <TouchableOpacity onPress={() => this._goBack()} style={styles.btn}>
                        <Text style={{color:canGoBack?'#333':'#dedede'}}>{'<后退'}</Text>
                    </TouchableOpacity>
                    <Text>{loading === false ? '加载完毕' : '加载中'}</Text>
                    <TouchableOpacity onPress={() => this._goForward()} style={styles.btn}>
                        <Text style={{color:canGoForward ?'#333':'#dedede'}}>{'前进>'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _onNavigationStateChange(state) {
        this.setState(state);
    }

    _goBack() {
        this.refs[WEBVIEW_REF].goBack();
    }

    _goForward() {
        this.refs[WEBVIEW_REF].goForward();
    }
};