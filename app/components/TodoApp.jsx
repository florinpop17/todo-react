var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoAPI = require('TodoAPI');

var moment = require('moment');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            show: false,
            search: "",
            todos: TodoAPI.getTodos()
        }  
    },
    
    componentDidUpdate: function() {
        TodoAPI.setTodos(this.state.todos);  
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
//            todos: this.state.todos.concat([newTodo])
            todos: [
                ...this.state.todos,
                {
                    id: newId,
                    text: newText,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },
    
    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        var {todos, show, search} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, show, search)
        
        return (
            <div className="columns large-4 medium-6 small-centered">
                <h1>Todo App title</h1>
                <div className="container">
                    <TodoSearch onSearch={this.handleSearch} />
                    <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                    <TodoAdd onSubmitHandle={this.handleAddTodo}/>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;