/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    PropTypes,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 15
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingLeft: 10
    },
    img: {
        width: 10,
        height: 30,
        marginRight: 5
    },
    text: {
        fontSize: 16
    }
});

export default class navigationBarBackItem extends Component {
    propTypes:{
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func
        };

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {this.props.onPress()}}>
                <View style={styles.content}>
                    <Image source={require('image!ic_keyboard_arrow_left')} style={styles.img}/>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};