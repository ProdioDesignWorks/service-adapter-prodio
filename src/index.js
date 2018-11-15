import IPayment from './payment-interface';
import INotification from './notification-interface';
import Configuration from './configuration';
import fs from 'fs';
import path from 'path';

export default class Service {
    constructor(type) {
        this.serviceType = type;
    }

    ensureInitialized() {
        if (!this.serviceType.length) {
            throw new Error('Service type not provided');
        }
    }

    readConfig() {
        const service = this.serviceType;
        const j = `${service}sources.json`
        const p = path.resolve(__dirname, '..', 'services', j);
        if (!fs.existsSync(p)) {
            throw new Error(`${j} does not exists`);
        }

        return require(p);
    }

    init() {
        this.ensureInitialized();
        const config = this.readConfig();
        const configurator = new Configuration(config);
        const connectors = configurator.importConnectors();
        var iContract;

        switch (this.serviceType) {
            case 'payment':
                iContract = new IPayment();
                break;
            case 'notification':
                iContract = new INotification();
                break;
            default:
                throw new Error(`${this.serviceType} class not found`);
        }

        const service = configurator.compact(iContract, connectors);
        const ks = Object.getOwnPropertyNames(service);
        ks.map(
            k => (this[k] = service[k])
        );
    }
}