const INIT = new WeakMap();
const SERVICE = new WeakMap();
const TIMEOUT = new WeakMap();

class MissionController {
    constructor($timeout, missionService) {

        SERVICE.set(this, missionService);

        TIMEOUT.set(this, $timeout);

    }
}

MissionController.$inject = ['$timeout', 'missionService'];
export default MissionController;