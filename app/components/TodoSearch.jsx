var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function() {
        var show = this.refs.show.checked;
        var search = this.refs.search.value;
        
        this.props.onSearch(show, search);
    },
    render: function() {
        return (
            <div>
                <div>
                    <input type="search" ref="search" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="show" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;