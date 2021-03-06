angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.vipinfo', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/vipinfo.html',
        controller: 'vipinfoCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.about', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('feedBack', {
    url: '/page5',
    templateUrl: 'templates/feedBack.html',
    controller: 'feedBackCtrl'
  })

  .state('settings', {
    url: '/page6',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('addInfo', {
    url: '/page7',
    templateUrl: 'templates/addInfo.html',
    controller: 'addInfoCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});