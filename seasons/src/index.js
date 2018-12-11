import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

	
	state = { lat: null, errorMessage: '' };	


	componentDidMount(){
		//in the componentDidMount is the best place to use to upload data.
		window.navigator.geolocation.getCurrentPosition(
		position => this.setState({ lat: position.coords.latitude}),
		err => this.setState({ errorMessage: err.message})
	 	);
	}

	renderContent(){
		//Render is should only be used to render JSX
		if (this.state.errorMessage && !this.state.lat) {
			return <div>{this.state.errorMessage}</div>
		}

		if(!this.state.errorMessage && this.state.lat){
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Spinner message="please accept location request" />


	};
	//react says we need to define render
	render(){
		//conditionals in renders
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);