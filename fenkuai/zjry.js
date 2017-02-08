


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
var Zjryxqr = require("./zjryxqr");
var Zjry = React.createClass({
    getDefaultProps:function () {
        return{
            url_api:'http://api.douban.com/v2/movie/in_theaters'
        }
    },
    getInitialState:function () {
      return{
            //换行方式
          dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2})
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
    //组件加载完成运行
    componentDidMount:function () {
        this.loadData();
    },
    loadData:function () {
        //RN 提供的接口方法
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                alert(responseData.subjects[0].title);
                //请求的数据转到这里 通过this.setState方法赋值给状态机
                var myArr = [ ];
                for(var i = 0;i<responseData.subjects.length;i++){
                    var myObj = {};
                    myObj.title = responseData.subjects[i].title;
                    myObj.image = responseData.subjects[i].images.large;
                    myObj.year = responseData.subjects[i].year;
                    myObj.id = responseData.subjects[i].id;
                    myArr.push(myObj);
                }
                this.setState({
                    //数组需要用这种形式赋值
                    dataSource:this.state.dataSource.cloneWithRows(myArr)
                })
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
    //点击具体的影评 弹出的详情页
    pushToDetail:function (data) {
        this.props.navigator.push({
            component:Zjryxqr,
            title:data.title,
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

module.exports = Zjry;




