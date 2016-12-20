var React = require('react');

var Todo = React.createClass({
    render: function() {
        var {text, completed} = this.props;
        
        return (
            <div>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        );
    }
});

module.exports = Todo