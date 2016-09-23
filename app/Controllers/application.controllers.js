import HomeController from './HomeController';
import MissionController from './addMissionController';


var moduleName = 'application.controllers';

angular.module(moduleName, [])
    .controller('application.homeController', HomeController)
    .controller('application.addmissionController', MissionController);

export default moduleName;