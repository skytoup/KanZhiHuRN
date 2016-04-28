/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    Image
} from 'react-native';
import PropTypeShapes from '../../PropTypeShapes/index';

var styles = StyleSheet.create({
    touchTop: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    touchBottom: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    container: {
        margin: 10,
        flex: 1,
        borderRadius: 10,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    line: {
        backgroundColor: '#e0e0e0',
        height: 1
    },
    topContentView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    topTitle: {
        flex: 1,
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
        margin: 5,
        marginTop: 10,
        marginBottom: 10
    },
    bottomContent: {
        margin: 10
    },
    bottomImg: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    bottomContentView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomContentName: {
        marginLeft: 2,
        fontSize: 17,
        color: '#808098',
        margin: 5
    },
    bottomContentVoteView: {
        backgroundColor: '#54a2ee',
        borderRadius: 3,
        padding: 3,
        alignSelf: 'flex-start',
        marginTop: 8,
        marginRight: 8
    },
    bottomContentVote: {
        color: '#fff',
        fontSize: 12
    },
    bottomContentSummary: {
        flex: 1,
        marginTop: 8,
        fontSize: 15
    },
    img: {
        width: 10,
        height: 30,
        marginRight: 15,
        marginLeft: 5,
        transform: [{scaleX: -1}]
    }
});

export default class postAnswerItem extends Component {
    propTypes:{
        onPress: PropTypes.func,
        onNamePress: PropTypes.func,
        data: PropTypeShapes.PostAnswerItemData.isRequired
        };

    render() {
        let {questionid, title, answerid, avatar, authorhash, authorname, vote, summary} = this.props.data;
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.touchTop} underlayColor='#d9d9d9' onPress={() => {
                    if(this.props.onPress) {
                        this.props.onPress(`http://www.zhihu.com/question/${questionid}`);
                    }
                }}>
                    <View style={styles.topContentView}>
                        <Text style={styles.topTitle}>{title}</Text>
                        <Image source={require('image!ic_keyboard_arrow_left')} style={styles.img}/>
                    </View>
                </TouchableHighlight>

                <View style={styles.line}/>

                <TouchableHighlight style={styles.touchBottom} underlayColor='#d9d9d9' onPress={() => {
                    if(this.props.onPress !== null && this.props.onPress !== undefined) {
                        this.props.onPress(`http://www.zhihu.com/question/${questionid}/answer/${answerid}`);
                    }
                }}>
                    <View style={styles.bottomContent}>
                        <View style={styles.bottomContentView}>
                            <Image source={{uri:avatar}}
                                   resizeMode='contain'
                                   style={styles.bottomImg}/>
                            <TouchableHighlight underlayColor='#fff' onPress={() => {
                                if(this.props.onNamePress !== null && this.props.onNamePress !== undefined) {
                                    this.props.onNamePress(authorhash, authorname);
                                }
                            }}>
                                <Text style={styles.bottomContentName}>{authorname}</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.bottomContentView}>
                            <View style={styles.bottomContentVoteView}>
                                <Text style={styles.bottomContentVote}>{vote}</Text>
                            </View>
                            <Text style={styles.bottomContentSummary}>{summary}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
};