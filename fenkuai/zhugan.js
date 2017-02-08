
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
//底部导航栏
    TabBarIOS,
//顶部导航栏
    NavigatorIOS,
} from 'react-native';
//引入正在热映模块
var Zjry = require("./zjry");
var Jjsy = require("./jjsy");
var Top250 = require("./Top250");
var Grxx = require("./grxx");
var Zhugan = React.createClass({
    getInitialState:function () {
        return{
            select:"Top250"
        }
    },
    render:function () {
        return(
            //底部转换框
            <TabBarIOS
                tintColor='orange'
            >
                {/*正在热映*/}
                <TabBarIOS.Item
                    //给图片的属性
                    icon={require("./../images/tabbar_home@2x.png")}
                    title='正在热映'
                    selected={this.state.select == '正在热映'}
                    onPress={()=>this.setState({select:"正在热映"})}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Zjry,
                            title:'正在热映',
                            leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                            tintColor:'orange',
                            rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                        }}
                    >

                    </NavigatorIOS>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    //给图片的属性
                    icon={require("./../images/tabbar_message_center@2x.png")}
                    title='即将上映'
                    selected={this.state.select == '即将上映'}
                    onPress={()=>this.setState({select:"即将上映"})}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Jjsy,
                            title:'即将上映',
                            leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                            tintColor:'orange',
                            rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                        }}
                    >

                    </NavigatorIOS>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    //给图片的属性
                    icon={require("./../images/tabbar_discover@2x.png")}
                    title='Top250'
                    selected={this.state.select == 'Top250'}
                    onPress={()=>this.setState({select:"Top250"})}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Top250,
                            title:'Top250',
                            leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                            tintColor:'orange',
                            rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                        }}
                    >

                    </NavigatorIOS>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    //给图片的属性
                    icon={require("./../images/navigationbar_friendattention@2x.png")}
                    title='个人信息'
                    selected={this.state.select == '个人信息'}
                    onPress={()=>this.setState({select:"个人信息"})}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Grxx,
                            title:'个人信息',
                            leftButtonIcon:require("./../images/navigationbar_friendattention@2x.png"),
                            tintColor:'orange',
                            rightButtonIcon:require("./../images/navigationbar_pop@2x.png")
                        }}
                    >

                    </NavigatorIOS>
                </TabBarIOS.Item>

            </TabBarIOS>
        )
    }
})


const styles = StyleSheet.create({

});

module.exports = Zhugan;