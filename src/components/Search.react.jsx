import React from "react";

const Search = React.createClass({
  render: function() {
    return (
      <div className="search">
        <input type="text" ref="search" onInput={this.props.handleInput}/>
        <label>Search Products</label>
      </div>
    )
  }
});

Search.propTypes = {
  handleInput: React.PropTypes.func
};

export default Search;
