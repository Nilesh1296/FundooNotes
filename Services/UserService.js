routerApp.factory('userService',function($http,$state)
{
  var factory ={};

  factory.login=function(user)
  {
    return $http
    ({
       url:'http://localhost:8090/Fundoonotes/login',
       method:'POST',
       data: user

    }).then(function successCallback(response)
    {
     console.log("login Successfully",response.data)
     localStorage.setItem("token",response.data);
     $state.go('home.dashboard');
    },function errorCallback(response) {
        console.log("Please try again",response.data)
    });
  };

    factory.resetPassword=function(user)
    {
      return $http
      ({
         url:'http://localhost:8090/Fundoonotes/forgetpassword',
         method:'POST',
         data: user

      }).then(function successCallback(response)
      {
       console.log("link sended successfully ",response.data)
      },function errorCallback(response) {
          console.log("Please try again",response.data)
      });
    };

    factory.resetNewPassword=function(user,tokenurl)
    {
      return $http
      ({
         url:'http://localhost:8090/Fundoonotes/resetpassword/'+tokenurl,
         method:'PUT',
         data: user

      }).then(function successCallback(response)
      {

       console.log("Password reset successfully ",response.data)

      },function errorCallback(response) {
          console.log("Please does not reset successfully",response.data)
      });
    };

  factory.registration=function(user)
  {
    return $http
    ({
       url:'http://localhost:8090/Fundoonotes/registration',
       method:'POST',
       data:user

    }).then(function successCallback(response)
    {
     console.log("registration Successfully")
     $state.go('login');
    },function errorCallback(response) {
        console.log("Please try again")
    });

    };


  return factory;
});
