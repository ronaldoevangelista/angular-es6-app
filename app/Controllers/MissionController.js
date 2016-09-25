const INIT = new WeakMap();
const SERVICE = new WeakMap();
const TIMEOUT = new WeakMap();

class MissionController {
    constructor($timeout, applicationService) {

        SERVICE.set(this, applicationService);

        TIMEOUT.set(this, $timeout);

    }
}

MissionController.$inject = ['$timeout', 'applicationService'];
export default MissionController;