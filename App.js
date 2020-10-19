import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Alert,
	Platform,
	StatusBar,
} from 'react-native';

export default function App() {
	const handlePress = () => {
		console.log('Text Pressed');
	};
	// console.log(require('./assets/icon.png')) //render local or static images

	return (
		<SafeAreaView style={styles.container}>
			<Button
				color='orange'
				title='Click Me'
				onPress={() => {
					Alert.prompt('My Title', 'My Message', (text) => {
						console.log(text);
					});
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: Platform.OS === 'android' ? 20 : 0,
	},
});
