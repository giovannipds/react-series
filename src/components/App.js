import React from 'react';

import Contador from './Contador';
import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Grêmio Arena/RS",
		data: "29/06/2016",
		horario: "19h"
	},
	casa: {
		nome: 'Grêmio'
	},
	visitante: {
		nome: 'Inter'
	}
}

export default class App extends React.Component {
	render() {
		return (
			<div>
				<PlacarContainer {...dados} tempo={92} />
				<Contador />
			</div>
		);
	}
}
