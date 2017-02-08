


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Top250xqy = React.createClass({
    getInitialState:function () {
        return {
            summary:""
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.state.summary}
                </Text>
            </View>
        );
    },
    //加载数据 并给状态机赋值
    componentDidMount:function () {
        var uri_api = "http://api.douban.com/v2/movie/subject/" + this.props.data.id;
        fetch(uri_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                var summary = responseData.summary;
                this.setState({
                    summary:summary
                })
            })
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

module.exports = Top250xqy;




