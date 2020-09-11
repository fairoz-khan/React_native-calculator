import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from "react-native";
import Basicops from './components/Basicops';
import Numbers from './components/Numbers';

class App extends React.Component {

	state = { result: "" }

	calulate = () => {
		val = eval(this.state.result);
		this.setState({ result: (val).toString() })
	}
	setval = (exp) => {
		if (exp === 'C') {
			this.setState({ result: "" })
		} else if (exp === 'back') {
			this.setState({ result: this.state.result.slice(0, -1) })
		} else if (exp === '=') {
			this.calulate()
		} else {
			this.setState({ result: this.state.result + exp })
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.first}>
					<Text style={styles.result}>{this.state.result}</Text>
				</View>
				<View style={styles.second}>
					<Numbers num={this.setval} />
					<Basicops sym={this.setval} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	first: {
		flex: 2,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		backgroundColor: "#fff"
	},
	second: {
		flex: 3,
		flexDirection: 'row',
		backgroundColor: "#fff"
	},
	result: {
		fontSize: 40,
	}
});

export default App;
