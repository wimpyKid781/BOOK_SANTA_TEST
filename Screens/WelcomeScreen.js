import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
//import SantaAnimation from '../components/SantaClaus';
import db from '../config'
import firebase from 'firebase'
export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            emailID : '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            isModalVisible: false,
        }
    }
    userLogIn=(emailID,password) =>{
      firebase.auth().signInWithEmailAndPassword(emailID,password)
      .then(() => {
          return Alert.alert('Succesful Login')
         this.props.navigation.navigate('DonateBooks')
          
      })
      .catch((error)=>{
          var errorCode = error.code
          var errorMessage = error.message
          return Alert.alert(errorMessage)
            
          
      })
    }
    userSignUp=(emailID,password,confirmPassword) =>{
      if(password!==confirmPassword){
        return(
          Alert.alert('Your passwords do not match. \n Please try again.')
        )
      }
      else{

      
        firebase.auth().createUserWithEmailAndPassword(emailID,password)
        .then(() => {
            return Alert.alert('Succesfully Added User')
           
            
        })
        .catch((error)=>{
            var errorCode = error.code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
              
            
        })
      }
    }
      showModal=()=>{
        return(
          <Modal animationType="fade" trasparent= {true} visible = {this.state.isModalVisible}>
           <View style = {styles.modalContainer}>
            <ScrollView style = {{width:'100%'}}>
              <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
               <Text style = {styles.modalTitle}>
                REGISTRATION
               </Text>
               <TextInput 
               style = {styles.formTextInput}
               placeholder={'First Name'}
               maxLength={8}
               onChangeText = {(text)=>{
                 this.setState({
                   firstName: text
                 })
               }}
               />
                <TextInput 
               style = {styles.formTextInput}
               placeholder={'Last Name'}
               maxLength={15}
               onChangeText = {(text)=>{
                 this.setState({
                   lastName: text
                 })
               }}
               />
                <TextInput 
               style = {styles.formTextInput}
               placeholder={'Phone Number'}
               maxLength={10}
               keyboardType = {'numeric'}
               onChangeText = {(text)=>{
                 this.setState({
                   contact: text
                 })
               }}
               />
                <TextInput 
               style = {styles.formTextInput}
               placeholder={'Address'}
               multiline = {true}
               onChangeText = {(text)=>{
                 this.setState({
                   address: text
                 })
               }}
               />
                <TextInput 
               style = {styles.formTextInput}
               placeholder={'Email Address'}
               keyboardType = {'email-address'}
               onChangeText = {(text)=>{
                 this.setState({
                   emailID: text
                 })
               }}
               />
                <TextInput 
               style = {styles.formTextInput}
               placeholder={'Password'}
               secureTextEntry = {true}
               onChangeText = {(text)=>{
                 this.setState({
                   password: text
                 })
               }}
               />
                <TextInput 
               style = {styles.formTextInput}
               placeholder={'Confirm Password'}
               secureTextEntry = {true}
               onChangeText = {(text)=>{
                 this.setState({
                   confirmPassword: text
                 })
               }}
               />
               <View style = {styles.modalbackbutton}>
                 <TouchableOpacity style = {styles.registerButton}
                 onPress={()=>{
                   this.userSignUp(this.state.emailID,this.state.password,this.state.confirmPassword)
                 }}
                 >
                   <Text style = {styles.registerButtonText}>
                     REGISTER
                   </Text>
                 </TouchableOpacity>
               </View>
               <View style = {styles.modalbackbutton}>
                 <TouchableOpacity style = {styles.registerButton}
                 onPress={()=>{
                   this.setState({
                     isModalVisible : false
                   })
                 }}
                 >
                   <Text style = {{color:'red'}}>
                     CANCEL
                   </Text>
                 </TouchableOpacity>
               </View>
              </KeyboardAvoidingView>
            </ScrollView>
           </View>
          </Modal>
        )
      }
      //PUT SANTA ANIMATION BACK IN AT 177
render(){
    return(
        <View style = {styles.container}>
          <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            {this.showModal()}
          </View>
         <View style = {styles.profileContainer}>
           
             <Text style = {styles.title}>
                 BOOK SANTA!
             </Text>
         </View>
         <View style = {styles.buttonContainer}>
           <TextInput
           style= {styles.logInBox}
           placeholder="acb@gmail.com"
           placeholderTextColor = 'white'
           keyboardType = 'email-address'
           onChangeText = {(text)=>{
               this.setState({
                   emailID:text
               })
           }}
           />
           <TextInput
           style= {styles.logInBox}
           placeholder="password"
           placeholderTextColor = 'white'
           secureTextEntry = {true}
           onChangeText = {(text)=>{
               this.setState({
                   password:text
               })
           }}
           />
           <TouchableOpacity style = {[styles.button,{marginTop: 20,marginBottom:20}]}
           onPress={()=>{
        this.userLogIn(this.state.emailID,this.state.password)
           }}>
             <Text style = {styles.buttonText}>
                 LOG IN!
             </Text>
           </TouchableOpacity>
           <TouchableOpacity style = {styles.button}
           onPress={()=>{
        this.userSignUp(this.state.emailID,this.state.password)
           }}>
             <Text style = {styles.buttonText}>
                 CREATE ACCOUNT
             </Text>
           </TouchableOpacity>
         </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})