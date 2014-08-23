var mRest = angular.module('mRest', ['ui.router']);

mRest.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '/app/views/shared/main.html'
        });

});