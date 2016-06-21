import React from "react";
import Element from "./Element.react.jsx";
import { all } from "../api/ProductsApi";

const List = React.createClass({
    getInitialState: function() {
        return {
            products: [],
            totalPages: 1,
            page: 0,
            shouldUpdate: true
        }
    },

    fetchData: function(per_page) {
        all(this.state.page, per_page).then(data => {
            this.setState({ products: [...this.state.products, ...data.products], shouldUpdate: false, totalPages: data.total_pages });
        })
    },

    componentWillMount: function() {
        this.fetchData();
    },

    componentDidUpdate: function(prevState) {
        if(this.state.shouldUpdate != prevState.shouldUpdate && this.state.page != prevState.page && this.state.shouldUpdate) {
            this.fetchData();
        }
    },

    handleScroll: function() {
        let product = this.refs.products;
        let page = Number(this.state.page);
        let visible = Math.floor(this.props.tableHeight / this.props.elementHeight);
        let total = this.state.products.length;
        let scrolled =  Math.floor(product.scrollTop / this.props.elementHeight);

        if((scrolled >= total - visible) && page < this.state.totalPages) {
            this.setState({ page: page + 1, shouldUpdate: true });
        }
    },

    render: function() {
        let elements = this.state.products.map((p, i) => <Element key={p.id} i={i} product={p} height={this.props.elementHeight}/>);

        return (
            <div className="wrapper">
                <table className="table heading">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sku</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                </table>
                <div style={{ height: `${this.props.tableHeight}px` }} className="products" ref="products" onScroll={this.handleScroll}>
                    <table className="table">
                        <tbody>

                            {elements}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

export default List;
