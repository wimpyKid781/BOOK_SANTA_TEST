import React,{Component} from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import Firebase from 'firebase'
export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style = {styles.container}>
              <View style = {styles.drawerItemsContainer}>
                <DrawerItems 
                {...this.props}
                />
              </View>
              <View style = {styles.logoutContainer}>
                  <TouchableOpacity style = {styles.logoutButton}
                  onPress={()=>{
                      this.props.navigation.navigate('WelcomeScreen')
                      firebase.auth().signOut()
                  }
                  
                  }>
                    
                  </TouchableOpacity>
              </View>
            </View>
        )
    }
}