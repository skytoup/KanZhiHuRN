/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    PropTypes,
    TouchableHighlight,
    ListView,
    RefreshControl
} from 'react-native';
import PostItem from '../Component/Posts/postItem';
import PostAnswers from './postAnswers';
import PropTypeShapes from '../PropTypeShapes';

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class Posts extends Component {
    propTypes:{
        getPosts: PropTypes.func.isRequired,
        posts: PropTypeShapes.PostsData.isRequired
        };

    componentWillMount() {
        this._getPosts();
    }

    render() {
        let {posts, isRefreshing} = this.props.posts;
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={posts}
                    renderRow={d => <PostItem data={d} onPress={(data, title) => {this._rowOnPress(data, title)}}/>}
                    onEndReachedThreshold={35}
                    onEndReached={() => {
                        let time;
                        let posts = this.props.posts.posts;
                        let rc = posts.getRowCount();
                        if(rc>0) {
                            let d = posts.getRowData(0, rc-1);
                            time = d.publishtime;
                        }
                        this._getPosts(time);
                    }}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={() => this._getPosts()}
                            tintColor="#ff0000"
                            title={isRefreshing?'刷新中...':'刷新数据'}
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />
                    }
                />
            </View>
        );
    }

    _getPosts(time:Number) {
        this.props.getPosts(time);
    }

    _rowOnPress(data:Object, title:String) {
        let component = PostAnswers;
        this.props.navigator.push({component, title, passProps: {data}});
    }
};
