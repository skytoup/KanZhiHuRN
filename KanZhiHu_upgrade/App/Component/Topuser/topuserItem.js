/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    PropTypes,
} from 'react-native';
import PropTypeShapes from '../../PropTypeShapes';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    index: {
        color: '#afafaf',
        fontSize: 18
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 13
    },
    contentRight: {
        marginLeft: 13,
        flex: 1
    },
    name: {
        color: '#333',
        fontSize: 16
    },
    text: {
        color: '#878787',
        fontSize: 15,
        marginTop: 2
    },
    line: {
        backgroundColor: '#cbcacf',
        height: 1,
        marginTop: 10
    },
    signature: {
        marginRight: 5
    }
});

export default class TopuserItem extends Component {
    propTypes:{
        data: PropTypeShapes.TopuserItemData.isRequired,
        onPress: PropTypes.func
        };

    render() {
        let value, type;
        if (this.props.data.agree) {
            value = this.props.data.agree;
            type = '赞同';
        } else {
            value = this.props.data.follower;
            type = '粉丝';
        }
        let {avatar, name, signature} = this.props.data;
        return (
            <TouchableHighlight underlayColor='#efefef' onPress={() => {
                if(this.props.onPress !== null && this.props.onPress !== undefined) {
                    this.props.onPress(this.props.data);
                }
            }}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.index}>{this.props.id}</Text>
                        <Image source={{uri:avatar}} style={styles.img}/>
                        <View style={styles.contentRight}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={[styles.text, styles.signature]}>{signature}</Text>
                            <Text style={styles.text}>
                                {`${type}数:${value}`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.line}/>
                </View>
            </TouchableHighlight>
        );
    }
};