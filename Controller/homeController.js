routerApp.controller('homecontroller',  function($scope,$state,  $rootScope, $mdSidenav)
{
  $rootScope = $state;
  $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

  $scope.TrashPage=function()
  {
      $state.go('home.trash');
  };

  $scope.ArchivePage=function()
  {

    $state.go('home.archive');
  };

  $scope.sendToLogin=function()
  {
     localStorage.clear();
    $state.go('login')
  };

  $scope.changetoolbarcolor=function()
  {
    if($state.is('home.archive'))
    {
      console.log("color change");
      $scope.toolbarcolor={

        "background-color" : "#454545"
      }
    }
  else if($state.is('home.trash'))
     {
      $scope.toolbarcolor={
        "background-color" : "#999999"
      }
    }
  };

 $scope.changetoolbarcolor();
 $scope.showsmallcard=false;
  $scope.GridView=function()
  {

   $scope.showsmallcard=!$scope.showsmallcard;
    var notes=document.getElementsByClassName("card");
    if($scope.showsmallcard)
    {
      for(i = 0; i < notes.length; i++)
      {
      notes[i].style.width = "100%";
    }
    }
    else {

      notes[i].style.width = "30%";
    }

  };

// $scope.showsmallcard=false;
//  $scope.GridView=function()
//  {
//    var notes=document.
//
//  };
});
