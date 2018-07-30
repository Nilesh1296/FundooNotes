routerApp.controller("registrationcontroller",function($scope,$state,userService)
{

    $scope.Registration = function()
    {
     var user =
     {
       name:$scope.username,
       email:$scope.email,
       password:$scope.password,
       mobilenumber:$scope.mobilenumber

     }
     userService.registration(user);
    };

    $scope.Login=function()
    {
      $state.go('login');
    }
});
