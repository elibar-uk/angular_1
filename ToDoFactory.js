
toDoApp.factory('ToDoFactory', function(){
  var Todo = fanction(todoText){
  this.text = todoText;
  this.completed = (typeof complete !== 'undefined') ? completed : false;
  };
  Todo.prototype.complete = function() {
    this.complete = true;
  };
  return Todo;
});
