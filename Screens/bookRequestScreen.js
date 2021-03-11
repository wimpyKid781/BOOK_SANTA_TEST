import React,{Component} from 'react';
import {View, Text,TextInput,KeyboardAvoidingView,StyleSheet,TouchableOpacity} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../Components/MyHeader'
export default class BookRequestScreen extends Component {
    constructor(){
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            bookName:'',
            reasonToRequest: '',
        }
    }
    createUniqueId(){
        return(Math.random().toString(36).substring(6))
    }
    addRequest=(bookName,reasonToRequest)=>{
var userId = this.state.userId
var randomRequestId = this.createUniqueId()
db.collection('requested_books').add({
    'user_id': userId,
    'book_name': bookName,
    'reason_to_request': reasonToRequest,
    'request_id': randomRequestId
})
this.setState({
    bookName:'',
    reasonToRequest:'',
})
    }
render(){
    return(
        <View style = {{flex:1}}>
            <MyHeader title = 'Request Books'/>
            <KeyboardAvoidingView style = {styles.keyboardAvoidingView}>
             <TextInput style = {styles.formTextInput}
             placeholder = 'Enter your requested book name.'
             onChangeText = {(text)=>{
                 this.setState({
                     bookName: text
                 })
             }}
             value = {this.state.bookName}
             />
              <TextInput style = {[styles.formTextInput,{height:300}]}
             placeholder = 'Why do you want the book?'
             multiline
             numberOfLines = {8}
             onChangeText = {(text)=>{
                 this.setState({
                     ReasonToRequest: text
                 })
             }}
             value = {this.state.reasonToRequest}
             />
             <TouchableOpacity style={styles.button}
            onPress={()=>{

            }} 
            >
                 <Text>
                PLACE YOUR REQUEST!
                 </Text>
             </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}
}