/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    ListView,
    Image,
    Text,
    PropTypes,
    Dimensions,
    Linking
} from 'react-native';
import PostAnswerItem from '../Component/PostAnswers/postAnswerItem';
import PropTypeShapes from '../PropTypeShapes/index';
import UserDetail from './userDetail';
import Browser from './browser';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efeff4'
    }
});

export default class postAnswers extends Component {
    propTypes:{
        getPostAnswers: PropTypes.func.isRequired,
        initPostAnswers: PropTypes.func.isRequired,
        data: PropTypeShapes.PostItemData.isRequired,
        postAnswers: PropTypeShapes.PostAnswersData.isRequired
        };

    componentWillMount() {
        let date = this.props.data.date;
        this.props.getPostAnswers(date.replace(/-/g, ''), this.props.data.name);
    }

    componentWillUnmount() {
        this.props.initPostAnswers();
    }

    render() {
        let {postAnswers} = this.props.postAnswers;
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={postAnswers}
                    renderRow={ d =>
                        <PostAnswerItem
                            data={d}
                            onPress={url => this._rowOnPress(url)}
                            onNamePress={(hash, name) => this._rowOnNamePress(hash, name)}
                        />
                    }
                    renderHeader={ () =>
                        <Image
                            resizeMode="cover"
                            source={{uri:this.props.data.pic}}
                            style={{height:Dimensions.get('window').width/2}}
                        />
                    }
                />
            </View>
        );
    }

    _rowOnPress(url) {
        // Linking.openURL(url);
        this.props.navigator.push({component: Browser, title: '知乎', passProps:{url}});
    }

    _rowOnNamePress(hash, name) {
        let component = UserDetail;
        let title = name;
        this.props.navigator.push({component, title, passProps:{hash}});
    }
};