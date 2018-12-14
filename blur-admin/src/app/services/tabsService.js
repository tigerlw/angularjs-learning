(function(){
    'use strict';
    var app=angular.module('BlurAdmin.services.tabs',[]);

    app.service('tabsData',tabsService);

   function tabsService($cacheFactory,$window){
       //var cache = $cacheFactory('cache01');
       var cacheLocal = $window.sessionStorage;

       var tabs = cacheLocal['tabs'];
       var tabsMap = cacheLocal['tabsMap'];

       if(tabsMap == null || tabs == null) {
           tabs = [];
           tabsMap = {};
           //cacheLocal.put('tabs', tabs);
           //cacheLocal.put('tabsMap', tabsMap);

       } else
       {
           tabs = JSON.parse(tabs);
           tabsMap = JSON.parse(tabsMap);
       }


        return{
            getTabsFn:function(){
                return tabs;
            },
            addTabsFn:function(tab) {
                if (tabsMap[tab.heading] == null)
                {
                    if(tab.route == 'components.mail')
                    {
                        tab.route = 'components.mail.label';
                    }
                    tabsMap[tab.heading] = tab;
                    tabs.push(tab);

                    cacheLocal['tabs']=JSON.stringify(tabs);
                    cacheLocal['tabsMap'] = JSON.stringify(tabsMap);
                }
            },
            mvTabsFn:function(tab) {
                var result = [];

                for (var item in tabs) {
                    if (tabs[item].heading != tab.heading && item != "active") {
                        result.push(tabs[item]);
                        //result["active"] = parseInt(item);
                    }
                }

                if (tabs["active"] > 0) {
                    result["active"] = tabs["active"] - 1;
                }else{
                    result["active"] = tabs["active"];
                }

                tabsMap[tab.heading] = null;

                tabs=result;

                cacheLocal['tabs']=JSON.stringify(tabs);
                cacheLocal['tabsMap'] = JSON.stringify(tabsMap);

            }
        };
    }

})();