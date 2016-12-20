var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function() {
        var show = this.ref.show.checked;
        var search = this.ref.search.value;
        
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
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;