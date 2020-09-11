import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Basicops extends Component {
	constructor(props) {
		super(props);
	}

	onPress = (operator) => {
		this.props.sym(operator)
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.ops} onPress={() => { this.onPress('+') }}>
					<Text style={styles.symbols}>+</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.ops} onPress={() => { this.onPress('-') }}>
					<Text style={styles.symbols}>-</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.ops} onPress={() => { this.onPress('*') }}>
					<Text style={styles.symbols}>*</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.ops} onPress={() => { this.onPress('/') }}>
					<Text style={styles.symbols}>/</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.ops} onPress={() => { this.onPress("=") }}>
					<Text style={styles.symbols}>=</Text>
				</TouchableOpacity>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	ops: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'skyblue',
	},
	symbols: {
		fontSize: 40,
		fontWeight: "bold",
		color: 'white'
	}
})

export default Basicops;