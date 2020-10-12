import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
	const handlePress = () => {
		console.log('Text Pressed');
	};
	// console.log(require('./assets/icon.png')) //render local or static images

	return (
		<SafeAreaView style={styles.container}>
			<Button color='orange' title='Click Me' onPress={()=>{Alert.alert('Button Tapped')}}/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center', //vertically
		alignItems: 'center', //horizontally
	},
});
