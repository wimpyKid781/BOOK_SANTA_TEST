import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonateScreen from '../Screens/bookDonateScreen'
import BookRequestScreen from '../Screens/bookRequestScreen'
export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks : {screen: BookDonateScreen,
    navigationOptions:{
        tabBarIcon: <Image 
        source = {require('../assets/request-list.png')}
        style = {{width:20, height:20}}
        />,
        tabBarLabel : 'donate-books'
    }
    },
    BookRequest : {screen: BookRequestScreen,
        navigationOptions:{
            tabBarIcon: <Image 
            source = {require('../assets/request-books.png')}
            style = {{width:20, height:20}}
            />,
            tabBarLabel : 'book-request'
        }
        }
    
})