export default class Configuration {
	constructor(config){
		this.config = config;
	}

	isEmpty(obj){
		return Object.keys(obj).length < 1;
	}

	getConfig(config){
		const keysToRemove = ['connector'];
		keysToRemove.map(
			key => (delete config[key])
		);
		return config;
	}

	getConnectors(){
		return Object.keys(
			this.config
		).map(
			connectorKey => {
				const o = {};
				/*
					by default consider is_active is true
				*/
				if(!this.config[connectorKey].hasOwnProperty('is_active')){
					this.config[connectorKey]['is_active'] = true;
				}

				if(this.config[connectorKey]['is_active']){
					o['name'] = connectorKey;
					o['connector'] = this.config[connectorKey]['connector'];
					o['config'] = this.getConfig(this.config[connectorKey]);
				}

				return o;
			}
		).filter(
			c => !this.isEmpty(c)
		);
	}

	importConnectors(){
		const connectors = this.getConnectors();
		const o = {
			connectors: connectors.map(
				connector => connector.name
			)
		};

		return connectors.reduce(
			(config, connector) => {
				const cn = require(connector.connector).default;
				const cf = new cn(connector.config);
				const cnf = {
					[connector.name]: cf
				};
				return Object.assign({}, config, cnf);
			},
		o);
	}

	compact(iInterface, connectors){
		const connectorNames = Object.keys(connectors).filter(
			c => c !== 'connectors'
		);

		const noOfConnectors = connectorNames.length;
		const iInterfaceFns = Object.getOwnPropertyNames(
			Object.getPrototypeOf(iInterface)
		);

		if(noOfConnectors === 1){
			const cFns = Object.getOwnPropertyNames(
				Object.getPrototypeOf(connectors[connectorNames[0]])
			);
			
			const o = {};

			iInterfaceFns.map(
				fn => {
					if(fn !== 'constructor') o[fn] = connectors[connectorNames[0]][fn];
				}
			);

			return { ...connectors, ...o, };
		}else{
			const oo = {};
			connectorNames.map(
				connectorName => {
					const cFns = Object.getOwnPropertyNames(
						Object.getPrototypeOf(connectors[connectorName])
					);
					
					const o = {};

					iInterfaceFns.map(
						fn => {
							if(fn !== 'constructor') o[fn] = connectors[connectorName][fn];
						}
					);
				}
			);

			return { ...connectors, };
		}
	}
}













