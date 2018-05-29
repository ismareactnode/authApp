import React, { Component } from 'react'
import { View, Text } from 'react-native';
import firebase from 'firebase';

import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';
import LoginForm from './components/LoginForm';


export default class NativeApp extends Component {
componentWillMount(){
  firebase.initializeApp({
    apiKey: 'AIzaSyC6fvbtvqjAC9NU8X1S6RoOmAaTaIb8kp8',
    authDomain: 'authapp-2ef2f.firebaseapp.com',
    databaseURL: 'https://authapp-2ef2f.firebaseio.com',
    projectId: 'authapp-2ef2f',
    storageBucket: 'authapp-2ef2f.appspot.com',
    messagingSenderId: '1021987394844'
  });
}
  render() {
    return(
      <View>
        <Header title="CONNEXION"/>
        <LoginForm />
      </View>
    );
  }
}
