import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
class Numbers extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	onPress = (operator) => {
		this.props.num(operator)
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.view}>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('C') }}>
						<Text style={styles.symbols}>C</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('%') }}>
						<Text style={styles.symbols}>%</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('back') }}>
						<Icon name='backspace' />
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('7') }}>
						<Text style={styles.symbols}>7</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('8') }}>
						<Text style={styles.symbols}>8</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('9') }}>
						<Text style={styles.symbols}>9</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress(4) }}>
						<Text style={styles.symbols}>4</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('5') }}>
						<Text style={styles.symbols}>5</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('6') }}>
						<Text style={styles.symbols}>6</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('1') }}>
						<Text style={styles.symbols}>1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('2') }}>
						<Text style={styles.symbols}>2</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('3') }}>
						<Text style={styles.symbols}>3</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('00') }}>
						<Text style={styles.symbols}>00</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('0') }}>
						<Text style={styles.symbols}>0</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.num} onPress={() => { this.onPress('.') }}>
						<Text style={styles.symbols}>.</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		flexDirection: 'column',
		backgroundColor: 'white',
	},
	view: {
		flex: 1,
		flexDirection: 'row',
	},
	num: {
		flex: 1,
		backgroundColor: 'rgba(0, 100, 250, 0.5)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	symbols: {
		fontSize: 30,
	}

})
export default Numbers;