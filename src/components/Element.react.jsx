import React from "react";

const Element = React.createClass({
  render: function() {
    let { product, i } = this.props;
    let clsname = product.active ? (["odd", "even"][(i%2) ^ 1]) : "red"

    return (
      <tr className={clsname} style={{ height: `${this.props.height}px` }}>
        <td>{product.name}</td>
        <td>{product.sku}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
});

export default Element;
