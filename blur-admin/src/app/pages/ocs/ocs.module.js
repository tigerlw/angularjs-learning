(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ocs', [
        'BlurAdmin.pages.ocs.amCharts'
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('ocs', {
                url: '/ocs',
                abstract: true,
                template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
                title: 'ocs',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 151
                }
            });
    }

})();
