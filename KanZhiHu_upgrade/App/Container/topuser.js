/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    ListView,
    Text,
    PropTypes
} from 'react-native';
import PropTypeShapes from '../PropTypeShapes';
import TopusrItem from '../Component/Topuser/topuserItem';
import UserDetail from './userDetail';
import Radio from 'react-native-simple-radio-button';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    line: {
        height: 1,
        backgroundColor: '#cbcacf'
    }
});

/**
 * 用户排行
 */
export default class topuser extends Component {
    propTypes:{
        getTopuser: PropTypes.func.isRequired,
        initTopuser: PropTypes.func.isRequired,
        topuser: PropTypeShapes.TopuserData.isRequired
        };

    componentWillMount() {
        this.props.getTopuser('agree');
    }

    componentWillUnmount() {
        this.props.initTopuser();
    }

    render() {
        let radio_props = [
            {label: '赞同数', value: 'agree'},
            {label: '粉丝数', value: 'follower'}
        ];
        let {topuser, value, page} = this.props.topuser;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>排行指标:</Text>
                    <Radio
                        radio_props={radio_props}
                        radioStyle={{marginLeft:15}}
                        initial={0}
                        formHorizontal={true}
                        onPress={(value) => {
                            this.props.getTopuser(value);
                        }}
                    />
                </View>
                <View style={styles.line}/>
                <ListView
                    dataSource={topuser}
                    renderRow={(d, sid, rid) =>
                        <TopusrItem
                            data={d}
                            id={new Number(rid)+1}
                            onPress={ data => this._rowOnPress(data)}
                        />
                    }
                    onEndReachedThreshold={35}
                    onEndReached={() => {
                        this.props.getTopuser(value, page+1);
                    }}
                />
            </View>
        );
    }

    _rowOnPress(data) {
        let component = UserDetail;
        let title = data.name;
        let hash = data.hash;
        this.props.navigator.push({component, title, passProps: {hash}});
    }
};