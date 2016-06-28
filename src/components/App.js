import React from 'react';

import Contador from './Contador';
import PlacarContainer from './PlacarContainer.js';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<PlacarContainer />
				<Contador />
			</div>
		);
	}
}
