toDoApp.controller("ToDoController", ["ToDoService", "ToDoFactory", function(ToDoService, ToDoFactory) {
  var list = this;

  list.todos = ToDoService.getAll();

  list.addToDo = function(toDoText) {
    list.todos.push(new ToDoFactory(toDoText));
  };

  list.removeToDo = function() {
    list.todos.pop();
  }
}]);
