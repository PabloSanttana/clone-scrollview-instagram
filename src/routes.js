import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Image} from 'react-native'

import logo from './assets/instagram.png'

const AppStack = createStackNavigator()

import Feed from './screens/Feed'

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerTitle: props => <Image source={logo} />,
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#f5f5f5'},
            }}>
                <AppStack.Screen name="Feed" component={Feed}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}