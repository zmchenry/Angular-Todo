!function(){var t=angular.module("todo",[]);t.factory("todoList",function(){var t=[{title:"Learn Angular",completed:!1},{title:"Learn Bootstrap",completed:!0}];return t}),t.controller("TodoController",function o(t,e){t.todos=e,t.filt="all",t.todo={},t.addTodo=function(o){t.todo.title&&(t.todo.title=t.todo.title.trim(),t.todos.push(t.todo),t.todo={},o.$setPristine())},t.removeTodo=function(t){var o=this.todos.indexOf(t);this.todos.splice(o,1)},t.changeFilter=function(o){switch(o){case"all":t.filt="all";break;case"active":t.filt="active";break;case"completed":t.filt="completed";break;default:console.log(o)}},t.inprogress=0,t.$watch("todos",function(o){var e=0;angular.forEach(o,function(t){e+=t.completed?0:1}),t.inprogress=e},!0)}),t.directive("headerTodo",function(){return{restrict:"E",templateUrl:"partials/header-todo.html"}}),t.directive("listTodo",function(){return{restrict:"E",templateUrl:"partials/list-todo.html"}}),t.directive("footer",function(){return{restrict:"E",templateUrl:"partials/footer.html"}})}();