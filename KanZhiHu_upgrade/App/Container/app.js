/**
 * Created by apple on 16/2/15.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Navigator,
    Text,
    BackAndroid,
    Platform
} from 'react-native';
import Tabbar from './tabbar';
import NavigationBarItem from '../Component/NavigationBar/navigationBarBackItem';

var styles = StyleSheet.create({
    nivagationBar: {
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#c3c3c3'
    },
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 64 : 56
    },
    navBarTitleView: {
        flex: 1,
        justifyContent: 'center'
    },
    navBarTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#333'
    },
    navBarLeftButton: {
        flex: 1,
        justifyContent: 'center'
    },
    navBarRightButton: {
        flex: 1,
        justifyContent: 'center'
    }
});

const REF_NAV = 'ref_navigator';

export default class App extends Component {
    componentDidMount() {
        if(Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => {
                let nav = this.refs[REF_NAV];
                if(nav && nav.getCurrentRoutes().length > 1) {
                    nav.pop();
                } else {
                    return false;
                }
                return true;
            });
        }
    }
    render() {
        return (
            <Navigator
                ref={REF_NAV}
                initialRoute={{title:'', component:Tabbar}}
                renderScene={(route, nav) => this._renderScene(route, nav)}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={this._routeMapper}
                        style={styles.nivagationBar}
                     />
                }
            >
            </Navigator>
        );
    }

    _routeMapper = {
        Title: function (route, nav, index, navState) {
            if (route.title === null || route.title === undefined) {
                return null;
            }
            return (
                <View style={styles.navBarTitleView}>
                    <Text style={styles.navBarTitle}>{route.title}</Text>
                </View>
            );
        },
        LeftButton: function (route, nav, index, navState) {
            if (index > 0 && (route.leftButton === null || route.leftButton === undefined)) {
                return (
                    <NavigationBarItem title='返回' onPress={()=>{nav.pop()}}/>
                );
            }
            return (
                <View style={styles.navBarLeftButton}>
                    {route.leftButton}
                </View>
            );
        },
        RightButton: function (route, nav, index, navState) {
            return (
                <View style={styles.navBarRightButton}>
                    {route.rightButton}
                </View>
            );
        }
    };

    _renderScene(route, nav) {
        let Compnent = route.component;
        return (
            <View style={styles.container}>
                <Compnent
                    navigator={nav}
                    route={route}
                    {...route.passProps}
                    {...this.props}
                />
            </View>
        );
    }
};