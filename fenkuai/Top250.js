


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';
var Top250xqy = require("./Top250xqr");
var Top250 = React.createClass({
    getDefaultProps:function () {
      return {
          url_api:'http://api.douban.com/v2/movie/top250'
      }
    },
    getInitialState:function () {
      return {
          dataSource: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 != r2})
      }
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    },
    componentDidMount:function () {
        this.loadData();
    },
    loadData:function () {
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                console.log(responseData)
                var myArr = [ ];
                for (var i = 0;i < responseData.subjects.length;i++){
                    var myObj = {};
                    myObj.title = responseData.subjects[i].title;
                    myObj.image = responseData.subjects[i].images.large;
                    myObj.year = responseData.subjects[i].year;
                    myObj.id = responseData.subjects[i].id;
                    myArr.push(myObj);
                }
                //设置状态值给数据
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(myArr)
                });
            })
    },
    renderRow:function (rowData) {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>{this.pushToDetail(rowData)}}
            >
                <View style={styles.bigViewStyle}>
                    <Image
                        source={{uri:rowData.image}}
                        style={styles.iconStyle}
                    />
                    <View style={styles.rightViewStyle}>
                        <Text>{rowData.title}</Text>
                        <Text>{rowData.year}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    //详情页的函数
    pushToDetail:function (data) {
        //进行页面跳转
        this.props.navigator.push({
            component:Top250xqy,
            title:data.title,
            //跨页面传值用 passProps
            passProps:{data}
        })
    }
});


const styles = StyleSheet.create({
    bigViewStyle:{
        flexDirection:'row',
        padding:10
    },
    iconStyle:{
        width:100,
        height:120,
        marginRight:10
    },
    rightViewStyle:{
        justifyContent:'center'
    }
});

module.exports = Top250;




