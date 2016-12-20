var React = require('react');
var TodoList = require('TodoList');

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
                }
            ]
        }  
    },
    render: function (){
        var {todos} = this.state;
        
        return (
            <div>
                <h1>Todo App title</h1>
                <TodoList todos={todos} />
            </div>
        )
    }
});

module.exports = TodoApp;