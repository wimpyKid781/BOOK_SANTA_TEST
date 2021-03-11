import React,{Component} from 'react';
import LottieView from 'lottie-react-native'
export default class SantaAnimation extends React.Component{
    render(){
        return(
            <LottieView 
            source = {require('../assets/data.json')}
            style = {{width:'60%'}}
            autoPlay loop
            />
        )
    }
}