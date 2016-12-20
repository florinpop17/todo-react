var React = require('react');

var TodoSearch = React.createClass({
    render: function() {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos"/>
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;