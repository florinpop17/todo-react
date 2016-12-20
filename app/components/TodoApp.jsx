var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            show: false,
            search: "",
            todos: TodoAPI.getTodos()
        }  
    },
    
    handleAddTodo: function(text) {
        var newId = this.state.todos.length + 1;
        var newText = text;
        
        var newTodo = {
            id: newId,
            text: newText,
            completed: false
        }
        
        this.setState({
            todos: this.state.todos.concat([newTodo])
//            todos: [
//                ...this.state.todos,
//                {
//                    id: newId,
//                    text: newText
//                }
//            ]
        });
    },
    
    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        
        this.setState({todos: updatedTodos});
    },
    
    handleSearch: function(show, search) {
        this.setState({
            show: show,
            search: search.toLowerCase()
        })  
    },
    
    render: function (){
        var {todos} = this.state;
        
        return (
            <div className="columns large-4 medium-6 small-centered">
                <h1>Todo App title</h1>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <TodoAdd onSubmitHandle={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;