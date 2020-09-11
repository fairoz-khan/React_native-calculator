import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from "react-native";
import Basicops from './components/Basicops';
import Numbers from './components/Numbers';

class App extends React.Component {

	state = { result: "", presence: false }

	calulate = () => {
		this.setState({ result: (eval(this.state.result)).toString() })
	}

	checkpresence = () => {
		special = '+-*/%.';
		console.log(this.state.result);
		for (i = 0; i < special.length; i++) {
			if (this.state.result[-1] === special[i]) {
				return true;
			}
		}
		return false;
	}

	setval = (exp) => {
		if (exp === 'C') {
			this.setState({ result: "" })
		} else if (exp === 'back') {
			this.setState({ result: this.state.result.slice(0, -1) })
		} else if (exp === '=') {
			if (!this.state.presence) {
				this.calulate()
			}
		} else {
			if (/^-?[\d.]+(?:e-?\d+)?$/.test(exp)) {
				if (this.state.result.length == 0 && (exp == '0' || exp == '00')) {
					this.setState({ result: this.state.result })
				} else {
					this.setState({ result: this.state.result + exp })
					this.setState({ presence: false })
				}
			} else {
				if (this.state.presence) {
					this.setState({ result: this.state.result })
				} else {
					if (this.state.result.length >= 1) {
						this.setState({ result: this.state.result + exp })
						this.setState({ presence: true })
					}
				}
			}
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
