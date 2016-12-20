var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {
                    id: 1,
                    text: "Walk the dog"
                }, {
                    id: 2,
                    text: "Clean the yard"
                }, {
                    id: 3,
                    text: "Go for a walk"
                }, {
                    id: 4,
                    text: "Learn React"
                }
            ]
        }  
    },
    
    handleAddTodo: function(text) {
        var newId = todos.length;
        var newText = text;
        var newTodo = {
            id: newId,
            text: newText
        }
        setState({todos[...newTodo]});
    },
    
    render: function (){
        var {todos} = this.state;
        
        return (
            <div>
                <h1>Todo App title</h1>
                <TodoList todos={todos} />
                <AddTodo onSubmitHandle={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;