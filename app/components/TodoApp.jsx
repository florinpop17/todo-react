var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            show: false,
            search: "",
            todos: [
                {
                    id: 1,
                    text: "Walk the dog",
                    completed: false
                }, {
                    id: 2,
                    text: "Clean the yard",
                    completed: false
                }, {
                    id: 3,
                    text: "Go for a walk",
                    completed: false
                }, {
                    id: 4,
                    text: "Learn React",
                    completed: true
                }
            ]
        }  
    },
    
    handleAddTodo: function(text) {
        var newId = this.state.todos.length + 1;
        var newText = text;
        
        console.log(newId, newText);
        
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
                <TodoList todos={todos} />
                <TodoAdd onSubmitHandle={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;