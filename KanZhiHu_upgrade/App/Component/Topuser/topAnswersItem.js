/**
 * Created by apple on 16/2/17.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import PropTypeShapes from '../../PropTypeShapes';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },
    agree: {
        backgroundColor: '#54a2ee',
        borderRadius: 3,
        padding: 3,
        marginRight: 5,
        width: 40,
        alignItems: 'center'
    },
    agreeText: {
        fontSize: 14,
        color: '#fff'
    },
    text: {
        flex: 1,
        fontSize: 18,
        color: '#333',
        marginRight: 5
    },
    img: {
        width: 10,
        height: 30,
        transform: [{scaleX: -1}],
        marginRight: 10,
        alignSelf: 'center'
    }
});

export default class topAnswersItem extends Component {
    propTypes:{
        data: PropTypeShapes.UserDetailTopAnswerData
        };

    render() {
        let {agree, ispost, title, link} = this.props.data;
        agree /= 1000;
        agree = agree > 10 ? Math.round(agree) : agree.toFixed(1) * 1;
        return (
            <TouchableHighlight underlayColor="#a9a9a9" onPress={() => {
                if(this.props.onPress !== null && this.props.onPress !== undefined) {
                    this.props.onPress(`${ispost?'http://zhihu.com':'http://zhuanlan.zhihu.com'}${link}`);
                }
            }}>
                <View style={styles.container}>
                    <View style={styles.agree}>
                        <Text style={styles.agreeText}>{`${agree}k`}</Text>
                    </View>
                    <Text style={styles.text}>{title}</Text>
                    <Image source={require('image!ic_keyboard_arrow_left')} style={styles.img}/>
                </View>
            </TouchableHighlight>
        );
    }
};