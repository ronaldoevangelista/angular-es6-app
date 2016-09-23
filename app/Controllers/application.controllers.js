import HomeController from './HomeController';


var moduleName = 'application.controllers';

angular.module(moduleName, [])
    .controller('application.homeController', HomeController);

export default moduleName;