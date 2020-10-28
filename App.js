import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={WelcomeScreen}
				/>
				<Stack.Screen name='Image' component={ViewImageScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
