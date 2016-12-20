var React = require('react');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed} = this.props;
        console.log(typeof completed);
        return (
            <div>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        );
    }
});

module.exports = Todo