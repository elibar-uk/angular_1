toDoApp.service("ToDoService", ['$http', 'ToDoFactory', function($http, ToDoFactory) {

  this.getAll = function() {
    var todos = [];
    _fetchToDosFromApi(todos);
    return todos;
  };

  function _fetchToDosFromApi(todos) {
    $http.get('https://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(response) {
        _handleResponseFromApi(response.data, todos)
    }, function(err) {});
  }

  function _handleResponseFromApi(data, todos) {
    data.forEach(function(ToDoData) {
      todos.push(new ToDoFactory(ToDoData.text));
      });
  }
}]);
