var React = require('react');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed} = this.props;
        
        return (
            <label htmlFor={id}>
                <input id={id} type="checkbox" checked={completed} onChange={() => {
                    this.props.onToggle(id);
                }}/>
                {text}
            </label>
        );
    }
});

module.exports = Todo