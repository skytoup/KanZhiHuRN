/**
 * Created by apple on 16/2/17.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    ListView,
    Linking
} from 'react-native';
import TopAnswersItem from '../Component/Topuser/topAnswersItem';
import PropTypeShapes from '../PropTypeShapes';
import Browser from './browser';

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class TopAnswers extends Component {
    propTypes:{
        topanswers: PropTypeShapes.UserDetailTopAnswersData
        };

    render() {
        this.props.route.title = '高票答案';
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        ds = ds.cloneWithRows(this.props.topAnswers);
        return (
            <View style={styles.container}>
                <ListView
                    renderRow={(d) => <TopAnswersItem data={d} onPress={url => this._onRowPress(url)}/>}
                    dataSource={ds}
                />
            </View>
        );
    }

    _onRowPress(url) {
        // Linking.openURL(url);
        this.props.navigator.push({component: Browser, title: '知乎', passProps:{url}});
    }
};