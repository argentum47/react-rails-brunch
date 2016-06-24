import React from "react";
import List from "./List.react.jsx";
import Search from "./Search.react.jsx";
import { getProductsPaginated, searchProducts } from "../api/ProductsApi";

const Grid = React.createClass({
  getInitialState: function() {
    return {
      search: ""
    }
  },

  fetchData: function() {
    getProductsPaginated(this.props.page, this.state.search).then(data => {
      this.props.dispatch({
        type: 'GET_PRODUCTS',
        payload: data,
        page: this.props.page + 1
      });
    })
  },

  componentWillMount: function() {
    if(!(this.props.products && this.props.products.length)) this.fetchData()
  },

  handleSearchProducts: function(e) {
    this.setState({ search: e.target.value });

    searchProducts(e.target.value).then(data => {
      this.props.dispatch({
        type: 'SEARCH_PRODUCTS',
        payload: data
      });
    })
  },

  handleScroll: function() {
    if(Number(this.props.page) < this.props.totalPages) {
      this.fetchData();
    }
  },

  render: function() {
    return (
      <div className="wrapper">
        <Search handleInput={this.handleSearchProducts}/>
        <table className="table heading">
          <thead>
            <tr>
              <th>Name</th>
              <th>Sku</th>
              <th>Price</th>
            </tr>
          </thead>
        </table>
        <List {...this.props} onScroll={this.handleScroll}/>
      </div>
    );
  }
});

export default Grid;
