'use strict';

var app = angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
    'ui.router.tabs',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',

  'BlurAdmin.theme',
  'BlurAdmin.pages',
    'BlurAdmin.services.tabs'

]);

/*
app.controller("mainCtrl",function ($scope) {

});
*/


app.controller("mainCtrl",function($rootScope, $state, $scope,tabsData) {

    $scope.initialise = function() {

        $scope.go = function(state) {
            $state.transitionTo(state)
          /*  $location.path(
                $state.href(state)
            );*/
        };



       /* tabsData.addTabsFn({
            heading: '<i>charts</i>',
            route:   'charts.amCharts'
        });

        tabsData.addTabsFn( {
            heading: '<i>charts</i>',
            route:   'charts.amCharts'
        });*/

        $scope.tabData = tabsData.getTabsFn();

      /*  $scope.tabData   = [
            {
                heading: '<i>charts</i>',
                route:   'charts.amCharts'
            },
            {
                heading: '<i>charts</i>',
                route:   'charts.amCharts'
            }
        ];*/
    };

    $scope.initialise();
});

