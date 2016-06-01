
toDoApp.factory("ToDoFactory", function() {
  // var self = this;

  ToDo = function(toDoText) {
    this.text = toDoText;
    this.completed = false;
  };

  ToDo.prototype.complete = function() {
    this.completed = true;
  };

  return ToDo;
});
