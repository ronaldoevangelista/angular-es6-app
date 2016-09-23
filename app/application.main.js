import { default as controllersModuleName } from './Controllers/application.controllers';
import { default as servicesModuleName } from './application.services';
import { default as directivesModuleName } from './application.services';

var moduleName = 'application';

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'application.homeController',
            controllerAs: 'vm'
        })
        .when('/addMission', {
            templateUrl: 'templates/addMission.html',
            controller: 'application.addmissionController',
            controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/' });
    console.log("find..");
}

config.$inject = ['$routeProvider'];

var app = angular.module(moduleName, ['ngRoute', 'ngMessages', 'ngMaterial', servicesModuleName, controllersModuleName, directivesModuleName])
    .config(config);

export default moduleName;