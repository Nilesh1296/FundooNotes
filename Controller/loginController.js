routerApp.controller("logincontroller",function( $scope,$state,userService)
{

$scope.LoginPage = function()
{
   var user=
   {
       email:$scope.email,
       password:$scope.password
    }

    console.log("user",user);
     userService.login(user);
  };

    $scope.RegistrationPage=function()
    {
        $state.go('registration');
    };
     $scope.ForgetPassword=function()
     {
      $state.go('forgetpassword');
    };

  //  $state.go('home.dashboard');
});
