import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native';

function WelcomeScreen({navigation}) {
	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/background.jpg')}>
			<View style={styles.logoContainer}>
				<Image source={require('../assets/logo.png')} style={styles.logo} />
				<Text style={styles.text}>Google is your best friend</Text>
			</View>

			<View
				style={styles.loginButton}
				onStartShouldSetResponder={() =>
					navigation.navigate('Image', { name: 'Alisha' })
				}
			/>
			<View style={styles.registerButton} />
		</ImageBackground>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: 'purple',
	},
	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: '#4ecdc4',
	},
	logo: {
		width: 200,
		height: 200,
    },
    logoContainer:{
        position: 'absolute',
        top:70,
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize: 20,
    }
});
