routerApp.controller('dashController',function($scope,$state,$http,noteService,$mdDialog,$mdMenu)
{

$scope.getAllNotes=function()
{
   $scope.token =localStorage.getItem("token");
  console.log(localStorage.getItem("token"));
  console.log("getting notes");
  return $http
  ({
     url:'http://localhost:8090/Fundoonotes/get',
     method:'GET',
     headers: {
        "key": localStorage.getItem("token")
      }

  }).then(function successCallback(response)
  {
   console.log("Getting all the data successfully ",response.data)
   $scope.noteArray = response.data;
  },function errorCallback(response) {
      console.log("Please try again",response.data)
  });
};



$scope.addNote = function()
{
   var note=
   {
       title:$scope.title,
       description:$scope.description
    }

    console.log("note",note);
    if(note.title!=undefined&&note.description!=undefined)
  {
   noteService.addNoteUser(note);
   $scope.getAllNotes();
 }

};
$scope.getAllNotes();

$scope.DeleteNote=function(note)
{
  console.log(note.id);
  var noteobject=
  {
      title:note.title,
      description:note.description,
      trash:true,
      id:note.id
   }
   note.trash = true;
   console.log(note);
   noteService.updateNote(note);
};
$scope.Archieve=function(note)
{
   note.archive = true;
   console.log(note);
   //noteService.updateNote(note);
   noteService.archiveNote(note);
};

$scope.color=[
[
      {'colorname':'White', value: '#fcf7fb'},
      {'colorname': 'Red', value: '#e71949'},
      {'colorname': 'Orange', value:'#e73619'},
      {'colorname':'Yellshowsmallcardow',value:'#dae719'}
],

[
  {'colorname':'Blue', value: '#4219e7'},
  {'colorname': 'Green', value: '#19e729'},
  {'colorname': 'Pink', value:'#e7198b'},
  {'colorname':'Black',value:'#171716f2'}
],
[
  {'colorname':'SkyBlue', value: '#19b07ff2'},
  {'colorname': 'DarkGreen', value: '#2a582df2'},
  {'colorname': 'DarkBlue', value:'#536898f2'},
  {'colorname':'Brinjalcolor',value:'#745398f2'}

],
];

$scope.changeColor=function(colorname,note)
{
  console.log(angular.toJson(note));
  note.colour=colorname;
  noteService.updateNote(note).then(function(res){
    $scope.getAllNotes();
  });
  console.log(note.colour);
showsmallcard
}
$scope.Pin=function(note)
{
  console.log("r1");
   note.pin = true;
   console.log(note);

   noteService.updateNote(note);
};
$scope.Restore=function(note)
{
  console.log(note.id);
   note.trash = false;
   note.archive = false;
   console.log(note);
   noteService.updateNote(nshowsmallcardote);
};

$scope.DeleteTrash=function(note)
{
  note.archive=false;
  note.trash=true;
  noteService.updateNote(note);
}

$scope.Delete=function(note)
{
noteService.delete(note);
};

$scope.Unarchive=function(note)
{
  note.archive=false;
  noteService.unarchive(note);
};

 $scope.showPrompt = function(ev,note)
  {
    $mdDialog.show({
           locals: {item:note},
         controller: DialogController,
         templateUrl: 'Templates/dialog1.tmpl.html',
         parent: angular.element(document.body),
         targetEvent: ev,
         clickOutsideToClose:true,
         fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
       })
 };

 function DialogController($scope, $mdDialog,item) {
   $scope.note=item;

    $scope.Update=function(note)
    {
      console.log("in note controller",note);
      noteService.Updating(note);
    };

};
// $scope.showsmallcard=false;
//  $scope.GridView=function()
//  {
//
//    var notes=document.getElementById("card");
//    if(!$scope.showsmallcard)
//    {
//      elements[i].style.width = "100%";
//    }
//    else {
//      elements[i].style.width = "50%";
//    }
//
//  };

});
