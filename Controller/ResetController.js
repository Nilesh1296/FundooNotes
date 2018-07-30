routerApp.controller("resetpasswordcontroller",function( $scope,$state,$location,userService)
{
  $scope.Reset=function()
  {
    var object =$location.search();
    var tokenurl =object.token;
    var user=
    {
      password:$scope.password
    }
      userService.resetNewPassword(user,tokenurl);
  // $state.go('resetpassword');
 };

});
