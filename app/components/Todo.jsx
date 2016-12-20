var React = require('react');

var Todo = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
});

module.exports = Todo