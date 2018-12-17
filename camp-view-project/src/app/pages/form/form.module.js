'use strict';

var formApp = angular.module('camp.page.form',[]);

formApp.controller('mainCtrl',function($scope){
    $scope.name="liuwei";
})

formApp.config(routeConfig);

function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/input-normal',
            templateUrl: 'app/pages/form/input-normal.html',
            title: 'input-normal',
            sidebarMeta: {
                icon: 'ion-android-home',
                order: 0,
            },
        });

    $urlRouterProvider.otherwise('/input-normal');
}
