routerApp.factory('noteService',function($http,$state)
{
  var factory={};

  factory.addNoteUser=function(note)

  {
    console.log( "note service" + note.title);
    return $http
    ({
       url:'http://localhost:8090/Fundoonotes/create',
       method:'POST',
       data: note,
       headers: {
          "key": localStorage.getItem("token")
        }

    }).then(function successCallback(response)
    {
     console.log("note added successfully",response)

    },function errorCallback(response) {
        console.log("Please try again",response.data)
    });
  };

  factory.updateNote=function(note)
  {
    console.log("in update controller"  +note);
  //  console.log("in update Controller" +noteobject)
    return $http
    ({
       url:'http://localhost:8090/Fundoonotes/update',
       method:'PUT',
       data:note,
       headers: {
          "key": localStorage.getItem("token")
        }

    }).then(function successCallback(response)
    {
     console.log(response.data);
    },function errorCallback(response) {
        console.log("Please try again",response.data);
    });
  };

  factory.archiveNote=function(note)
  {
    return $http
    ({
       url:'http://localhost:8090/Fundoonotes/update',
       method:'PUT',
       data:note,
       headers: {
          "key": localStorage.getItem("token")
        }

    }).then(function successCallback(response)
    {
     console.log(response.data);
    },function errorCallback(response) {
        console.log("Please try again",response.data);
    });
  };

  factory.Updating=function(note)
  {
    console.log("update service",note);
    return $http
    ({
       url:'http://localhost:8090/Fundoonotes/update',
       method:'PUT',
       data:note,
       headers: {
          "key": localStorage.getItem("token")
        }

    }).then(function successCallback(response)
    {
     console.log("updated successfully");
    },function errorCallback(response) {
        console.log("Please try again");
    });
  };

  factory.delete=function(note)
  {
    console.log(note.id);
    return $http
    ({
       url:'http://localhost:8090/Fundoonotes/delete/'+note.id,
       method:'DELETE',
       data:note,
       headers: {
          "key": localStorage.getItem("token")
        }

    }).then(function successCallback(response)
    {
     console.log("Deleted successfully");
    },function errorCallback(response) {
        console.log("Please try again",response.data);
    });
  };

  factory.unarchive=function(note)
  {
    console.log(note.id);
    return $http
    ({
      url:'http://localhost:8090/Fundoonotes/update',
      method:'PUT',
      data:note,
      headers: {
         "key": localStorage.getItem("token")
       }
    }).then(function successCallback(response)
    {
     console.log("Deleted successfully");
    },function errorCallback(response) {
        console.log("Please try again",response.data);
    });
  };


  return factory;
});
