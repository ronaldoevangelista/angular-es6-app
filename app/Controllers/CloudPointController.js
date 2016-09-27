import '../../potree/js/viewer.js';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const TIMEOUT = new WeakMap();

class CloudPointController {
    constructor($timeout, applicationService) {
        SERVICE.set(this, applicationService);
        TIMEOUT.set(this, $timeout);
        console.log('cloud point start..');

    }
}

CloudPointController.$inject = ['$timeout', 'applicationService'];
export default CloudPointController;