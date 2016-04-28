/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image
} from 'react-native';
import Posts from './posts';
import Topuser from './topuser';
var Tabs = require('react-native-tabs');


var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50
    }
});

export default class Tabbar extends Component {
    render() {
        let content;
        switch (this.props.route.title) {
            case '首页':
            {
                content = (<Posts {...this.props} />);
                break;
            }
            case '用户排行':
            {
                content = (<Topuser {...this.props} />);
                break;
            }
            default:
            {
                content = null;
                break;
            }
        }
        return (
            <View style={styles.container}>
                {content}
                <Tabs selected="首页" style={{backgroundColor:'#f8f8f8', borderTopWidth:1, borderTopColor:'#c3c3c3'}}
                      onSelect={el => {
                          this.props.route.title = el.props.name;
                          this.props.navigator.forceUpdate();
                          return {style:{color:'blue'}};
                      }}>
                    <Text name="首页">首页</Text>
                    <Text name="用户排行">用户排行</Text>
                </Tabs>
            </View>
        );
    }
};