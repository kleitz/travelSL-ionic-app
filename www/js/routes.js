angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.category', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/category.html',
        controller: 'categoryCtrl'
      }
    }
  })

  .state('tabsController.user', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/user.html',
        controller: 'userCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('emergency', {
    url: '/page5',
    templateUrl: 'templates/emergency.html',
    controller: 'emergencyCtrl'
  })

  .state('tabsController.historicalPlaces', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/historicalPlaces.html',
        controller: 'historicalPlacesCtrl'
      }
    }
  })

  .state('tabsController.wildLife', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/wildLife.html',
        controller: 'wildLifeCtrl'
      }
    }
  })

  .state('tabsController.beach', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/beach.html',
        controller: 'beachCtrl'
      }
    }
  })

  .state('tabsController.city', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/city.html',
        controller: 'cityCtrl'
      }
    }
  })
  
  .state('tabsController.camping', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/camping.html',
        controller: 'campingCtrl'
      }
    }
  })
  
  .state('tabsController.Food&Beverage', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/Food&Beverage.html',
        controller: 'Food&BeverageCtrl'
      }
    }
  })
  
  .state('tabsController.Waterfalls', {
    url: '/page16',
    views: {
      'tab2': {
        templateUrl: 'templates/Waterfalls.html',
        controller: 'WaterfallsCtrl'
      }
    }
  })
  
  
  .state('tabsController.sightseeing1', {
    url: '/page17',
    views: {
      'tab2': {
        templateUrl: 'templates/sightseeing1.html',
        controller: 'sightseeing1Ctrl'
      }
    }
  })
  
   .state('tabsController.Climate', {
    url: '/page18',
    views: {
      'tab2': {
        templateUrl: 'templates/Climate.html',
        controller: 'ClimateCtrl'
      }
    }
  })
  

.state('tabsController.Sugges', {
    url: '/page19',
    views: {
      'tab2': {
        templateUrl: 'templates/Sugges.html',
        controller: 'SuggesCtrl'
      }
    }
  })
  
  .state('tabsController.contactus', {
    url: '/page20',
    views: {
      'tab2': {
        templateUrl: 'templates/contactus.html',
        controller: 'contactusCtrl'
      }
    }
  })
  



  .state('tabsController.adventure', {
    url: '/page10',
    views: {
      'tab2': {
        templateUrl: 'templates/adventure.html',
        controller: 'adventureCtrl'
      }
    }
  })

  .state('sightseeing', {
    url: '/sightseeing',
        templateUrl: 'templates/sightseeing.html',
        controller: 'MapController'
    }
  )
	.state('sightseeing2', {
    url: '/sightseeing2',
        templateUrl: 'templates/sightseeing2.html',
        controller: 'MapController2'
    }
  )
  .state('map', {
    url: '/page12',
    templateUrl: '/map',
    controller: 'MapController'
  })
  
  
  .state('tabsController.Nearby', {
      url: "/page13",
      views: {
        'home-tab': {
          templateUrl: "Nearby.html",
          controller: 'NearbyCtrl'
        }
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
  .state('tabsController.places', {
    url: '/page31/:responseId',
    views: {
      'tab2': {
        templateUrl: 'templates/places.html',
        controller: 'placessCtrl'
      }
    }
  })
  .state('tabsController.test', {
    url: '/page31/:name',
    views: {
      'tab2': {
        templateUrl: 'templates/places.html',
        controller: 'TestCtrl'
      }
    },
    params: {
      name: null
    }
  })
  
  

$urlRouterProvider.otherwise('/login')

  

});
