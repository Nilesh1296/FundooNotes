var routerApp=angular.module('myApp', ['ui.router','ngMaterial']);

routerApp.config(function($stateProvider,$urlRouterProvider)

{

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'Templates/login.html',
            controller :'logincontroller'
        })


       .state('registration', {
          url:'/registration',
          templateUrl :'Templates/registration.html',
          controller :'registrationcontroller'



        })

        .state('forgetpassword',
        {
          url:'/forgetpassword',
          templateUrl:'Templates/forgetpassword.html',
          controller:'forgetpasswordcontroller'
        })

        .state('resetpassword',
         {
           url:'/resetpassword',
           templateUrl:'Templates/Resetpassword.html',
           controller:'resetpasswordcontroller'
         })
       .state('home',{
         url:'/home',
         templateUrl:'Templates/home.html',
         controller:'homecontroller'
       })

       .state('home.dashboard',{
        url:'/dashboard',
        templateUrl:'Templates/dashboard.html',
        controller :'dashController'
      })
      .state('home.trash',{
        url:'/trash',
        templateUrl:'Templates/Trash.html',
        controller:'dashController'
      })
      .state('home.archive',{
        url:'/archive',
        templateUrl:'Templates/Archive.html',
        controller:'dashController'
      });
  $urlRouterProvider.otherwise('/login');
});
