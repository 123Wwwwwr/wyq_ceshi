/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//组件引入
var Zjry = require("./fenkuai/zhugan");
export default class doubanzuoyeRN extends Component {
  render() {
      return(
          <Zjry />
      )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('doubanzuoyeRN', () => doubanzuoyeRN);
