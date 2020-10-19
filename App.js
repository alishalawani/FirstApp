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
  Dimensions
} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation()
  console.log(useDimensions())

	// console.log(require('./assets/icon.png')) //render local or static images

	return (
		<SafeAreaView style={styles.container}>
    <View style={{backgroundColor: 'dodgerblue', width:'100%', height: landscape ? '100%' : '30%'}}>

    </View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
    flex:1,
		backgroundColor: 'white',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
