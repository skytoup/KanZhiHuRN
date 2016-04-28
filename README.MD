# KanZhiHu
一款使用ReactNative@0.24.0 + Redux开发的KanZhiHu iOS、Android客户端App	
当时是模仿别人的一个iOS端看知乎的, 现在链接暂时找不到	
懒得做UI，界面可能会比较丑~

### GIF演示
![GIF](1.gif)
![GIF](2.gif)

### 运行:
1. 进入到项目根目录运行命令: npm install
2. 这一步可以不做, 只是为了Tab显示好看一点, "react-native-tabs"这个库的一处逻辑写错了一点, 导致当前点击的Tab不会显示选择颜色, 第60行改一下
```javascript
{!self.props.locked && (self.state.selected == el.props.name) ? React.cloneElement(el, self.state.props) : el}
```

3. 怎么在iOS、Android平台上运行请参考 [官方网站](http://facebook.github.io/react-native/): <http://facebook.github.io/react-native/>

### API来源
[看知乎](http://www.kanzhihu.com/): <http://www.kanzhihu.com/>

### 用到的第三方库
+ "react-native-simple-radio-button": "^1.4.0"
+ "react-native-tabs": "^0.1.10"

### 功能:
1. 下拉刷新、上拉自动加载更多
2. WebView加载网页
3. Navigator导航
4. Tabbar导航
5. Redux处理数据

### 待完成
1. 加载网络请求时, 添加等待弹框
2. ...

### 教程
1. [Redux框架搭建](http://skytoup.wicp.net/2015/12/24/React-Native%E6%90%AD%E5%BB%BARedux%E6%A1%86%E6%9E%B6/)
2. 待补上...

### 联系方式
* QQ：875766917，请备注
* Mail：875766917@qq.com

## 开源协议: [Apach2.0](LICENSE)