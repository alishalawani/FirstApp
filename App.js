import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableNativeFeedback,
} from 'react-native';

export default function App() {
	const handlePress = () => {
		console.log('Text Pressed');
	};
	// console.log(require('./assets/icon.png')) //render local or static images

	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1} onPress={handlePress}>
				Hello React Native{' '}
			</Text>
			<TouchableNativeFeedback onPress={handlePress}>
				<View
					style={{
						width: 200,
						height: 70,
						backgroundColor: 'dodgerblue',
					}}></View>
			</TouchableNativeFeedback>
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
