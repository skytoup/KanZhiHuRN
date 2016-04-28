/**
 * Created by apple on 16/2/15.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    PropTypes
} from 'react-native';
import PropTypeShapes from '../../PropTypeShapes/index';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 13,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 0
    },
    rowTop: {
        flexDirection: 'row',
        marginBottom: 8
    },
    rowTopDate: {
        flex: 1
    },
    rowTopText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    rowExcerpt: {
        color: '#333',
        fontSize: 15
    },
    rowLine: {
        backgroundColor: '#dedede',
        height: 1,
        marginTop: 5
    }
});

export default class PostItem extends Component {
    propTypes:{
        onPress: PropTypes.func,
        data: PropTypeShapes.PostItemData.isRequired
        };

    render() {
        let {date, name, excerpt} = this.props.data;
        return (
            <TouchableHighlight underlayColor='#efefef' onPress={() => {
                if(this.props.onPress !== null && this.props.onPress !== undefined) {
                    this.props.onPress(this.props.data, `${date} ${changeName(name)}`);
                }
            }}>
                <View style={styles.container}>

                    <View style={styles.rowTop}>
                        <Text style={[styles.rowTopDate, styles.rowTopText]}>{date}</Text>
                        <Text style={styles.rowTopText}>{changeName(name)}</Text>
                    </View>
                    <Text style={styles.rowExcerpt}>{excerpt}</Text>
                    <View style={styles.rowLine}/>
                </View>
            </TouchableHighlight>
        );
    }
};

function changeName(name:String):String {
    switch (name) {
        case 'yesterday':
            return '昨日最新';
        case 'recent':
            return '今日热门';
        case 'archive':
            return '历史精华';
        default:
            return '未知';
    }
}
