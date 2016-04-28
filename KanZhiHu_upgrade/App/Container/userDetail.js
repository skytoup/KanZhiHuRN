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
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    PropTypes,
    Linking
} from 'react-native';
import PropTypeShapes from '../PropTypeShapes';
import TopAnswers from './topAnswers';
import Browser from './browser';

var styles = StyleSheet.create({
    rightButton: {
        paddingRight: 10,
        paddingLeft: 15,
        flex: 1,
        justifyContent: 'center'
    },
    rightButtonText: {
        fontSize: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#efeff4'
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    textInfo: {
        fontSize: 16,
        color: '#848484',
        marginRight: 10
    },
    text: {
        fontSize: 15,
        color: '#989898'
    },
    textData: {
        fontSize: 14,
        color: '#333',
        marginRight: 10
    },
    line: {
        backgroundColor: '#bcbac1',
        height: 1,
        marginTop: 8,
        marginBottom: 8
    },
    top: {
        backgroundColor: '#fff',
        padding: 10,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#c8c7cc'
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    headRight: {
        marginLeft: 10,
        flex: 1
    },
    headInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        backgroundColor: '#fff'
    },
    data: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgData: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    bottomContent: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#c8c7cc',
        borderBottomColor: '#c8c7cc'
    },
    bottom: {
        marginTop: 20
    },
    imgIn: {
        width: 10,
        height: 30,
        transform: [{scaleX: -1}],
        marginRight: 10
    },
    textAnswer: {
        fontSize: 18,
        color: '#333',
        flex: 1
    }
});

/**
 * 用户详情
 */
export default class UserDetail extends Component {
    propTypes:{
        getUserDetail: PropTypes.func.isRequired,
        initUserDetail: PropTypes.func.isRequired,
        hash: PropTypes.string,
        userDetail: PropTypeShapes.UserDetailData
        };

    componentWillMount() {
        this.props.getUserDetail(this.props.hash);
    }

    componentWillUnmount() {
        this.props.initUserDetail();
    }

    render() {
        this.props.route.rightButton = (
            <TouchableOpacity style={styles.rightButton} onPress={() => {
                let url = `http://www.zhihu.com/people/${this.props.hash}`;
                // Linking.openURL(url);
                this.props.navigator.push({component: Browser, title: '知乎', passProps:{url}});
            }}>
                <Text style={styles.rightButtonText}>主页</Text>
            </TouchableOpacity>
        );
        let signature, answer, followee, follower, description, agree, thanks, avatar;
        if (this.props.userDetail.userDetail) {
            ({
                signature, description, avatar, detail: {answer, followee, follower, agree, thanks}
            } = this.props.userDetail.userDetail);
            if (signature === '') {
                signature = '-';
            }
            if (description === '') {
                description = '-';
            }
        } else {
            signature = answer = followee = follower = description = agree = thanks = '-';
        }
        return (
            <ScrollView style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.head}>
                        <Image source={{uri:avatar}} style={styles.img}/>
                        <View style={styles.headRight}>
                            <Text style={styles.textInfo}>{signature}</Text>
                            <View style={styles.line}/>
                            <View style={styles.headInfo}>
                                <View>
                                    <Text style={styles.textData}>{answer}</Text>
                                    <Text style={styles.text}>TA的回答</Text>
                                </View>
                                <View>
                                    <Text style={styles.textData}>{followee}</Text>
                                    <Text style={styles.text}>TA关注的人</Text>
                                </View>
                                <View>
                                    <Text style={styles.textData}>{follower}</Text>
                                    <Text style={styles.text}>关注TA的人</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.textInfo}>{description}</Text>

                    <View style={styles.line}/>

                    <View style={styles.data}>
                        <Image source={require('image!ic_thumb_up')} style={styles.imgData}/>
                        <Text style={styles.textData}>{agree}</Text>
                        <Image source={require('image!ic_favorite_border')} style={styles.imgData}/>
                        <Text style={styles.textData}>{thanks}</Text>
                    </View>
                </View>

                <TouchableHighlight style={styles.bottom} underlayColor='#d9d9d9'
                                    onPress={() => this._onTopAnsetsPress()}>
                    <View style={styles.bottomContent}>
                        <Text style={styles.textAnswer}>高票答案</Text>
                        <Image style={styles.imgIn} source={require('image!ic_keyboard_arrow_left')}/>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        );
    }

    _onTopAnsetsPress() {
        if (this.props.userDetail.userDetail) {
            let topAnswers = this.props.userDetail.userDetail.topanswers;
            let component = TopAnswers;
            console.log(this.props.userDetail);
            this.props.navigator.push({component, passProps: {topAnswers}});
        }
    }
};