var React = require('react');

var AddTodo = React.createClass({
    submitForm : function(e){
        e.preventDefault();
        if(this.refs.item.value.length > 0){
            this.props.onSubmitHandle(this.refs.item.value);
            this.refs.item.value = "";
        } else {
            this.refs.item.focus();
        }
    },
    render: function() {
        
        return (
            <form className="container__footer" onSubmit={this.submitForm}>
                <input type="text" placeholder="Add a todo item" ref="item"/>
                <button className="button expanded primary">Add new todo</button>
            </form>
        );
    }
});

module.exports = AddTodo