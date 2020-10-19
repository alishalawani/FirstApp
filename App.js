import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
	const handlePress = () => {
		console.log('Text Pressed');
	};
	// console.log(require('./assets/icon.png')) //render local or static images

	return (
		<SafeAreaView style={[styles.container, containerStyle]}>
			<Button color='white' title='Click Me' onPress={()=>{Alert.prompt('My Title', 'My Message', (text)=>{console.log(text)})}}/>
		</SafeAreaView>
	);
}

const containerStyle = { backgroundColor: 'orange'};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center', //vertically
		alignItems: 'center', //horizontally
	},
});
