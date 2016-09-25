import HomeController from './HomeController';
import MissionController from './MissionController';


var moduleName = 'application.controllers';

angular.module(moduleName, [])
    .controller('application.homeController', HomeController)
    .controller('application.missionController', MissionController);

export default moduleName;