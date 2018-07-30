routerApp.controller("forgetpasswordcontroller",function( $scope,$state,userService)
{

  $scope.ResetPassword=function()
  {
    var user=
    {
      email:$scope.email
    }
    console.log("user",user);
    userService.resetPassword(user);
    $state.go('resetpassword');
  };

});
