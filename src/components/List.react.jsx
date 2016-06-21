import React from "react";
import Element from "./Element.react.jsx";
import { all } from "../api/ProductsApi";

const List = React.createClass({
    getInitialState: function() {
        return {
            products: []
        }
    },

    componentWillMount: function() {
        all().then(data => {
            this.setState({ products: data.products });
        })
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
                <div style={{ height: `${this.props.tableHeight}px` }} className="products">
                    <table className="table">
                        <tbody>{elements}</tbody>
                    </table>
                </div>
            </div>
        );
    }
});

export default List;
