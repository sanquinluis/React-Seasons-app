import React from 'react';
import ReactDOM from 'react-dom';

 

class App extends React.Component {

	constructor(props) {
		super(props);
		//THIS is the ONLY TIME that we do a direct 
		//Assigment to this.state inside a Constructor. 
		this.state = { lat: null, errorMessage: '' };

		window.navigator.geolocation.getCurrentPosition(
		position => {
			//Calling setState.
			this.setState({ lat: position.coords.latitude});
		},
		err => {
			this.setState({ errorMessage: err.message});
			}

	 	);
	};

	//react says we need to define render
	render(){
		if (this.state.errorMessage && !this.state.lat) {
			return <div>{this.state.errorMessage}</div>
		}

		if(!this.state.errorMessage && this.state.lat){
			return <div>{this.state.lat}</div>
		}

		return <div>Loading!....</div>
	}
};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);