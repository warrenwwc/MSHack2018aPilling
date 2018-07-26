angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.alarm'
      2) Using $state.go programatically:
        $state.go('tabsController.alarm');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab3/page2
  */
  .state('tabsController.alarm', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/alarm.html',
        controller: 'alarmCtrl'
      },
      'tab3': {
        templateUrl: 'templates/alarm.html',
        controller: 'alarmCtrl'
      }
    }
  })

  .state('tabsController.camera', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/camera.html',
        controller: 'cameraCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.setting'
      2) Using $state.go programatically:
        $state.go('tabsController.setting');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab3/page4
  */
  .state('tabsController.setting', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      },
      'tab3': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/tab1/page2')


});