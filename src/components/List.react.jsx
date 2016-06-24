import React from "react";
import Element from "./Element.react.jsx";

const List = React.createClass({
  calculateState: function(props) {
    let scroll = this.refs.scrollable.scrollTop;
    const { elementHeight, tableHeight } = props;

    let visible = Math.floor(tableHeight / elementHeight);
    let visibleStart = Math.floor(scroll / elementHeight);
    let visibleEnd = Math.min(visibleStart + visible, props.products.length - 1);

    let displayStart = Math.max(0, visibleStart - visible * 1.2);
    let displayEnd = Math.min(displayStart + 2 * visible, props.products.length - 1);

    return ({
      visibleStart,
      visibleEnd,
      displayStart,
      displayEnd,
      products: props.products.slice(displayStart, displayEnd)
    })
  },

  getInitialState: function() {
    let visible = Math.floor(this.props.tableHeight / this.props.elementHeight);

    return {
      products: [],
      visibleStart: 0,
      visibleEnd: +this.props.elementHeight,
      displayStart: 0,
      displayEnd: visible * 2
    }
  },

  componentDidMount: function() {
    this.setState(this.calculateState(this.props));
  },

  componentWillReceiveProps: function(nextProps) {
    if(nextProps.products.length != this.state.products.length) {
      this.setState(this.calculateState(nextProps));
    }
  },

  handleScroll: function() {
    let state = this.calculateState(this.props);

    if(!(state.visibleStart >= this.state.displayStart && state.visibleEnd <= this.state.displayEnd))
      this.props.onScroll();

    this.setState(state);

  },

  render: function() {
    let { displayStart, displayEnd } = this.state;

    let topHeight = displayStart *  this.props.elementHeight
    let bottomHeight = (this.props.products.length - displayEnd) * this.props.elementHeight

    let elements = this.state.products.map((p, i) => <Element key={p.id} i={i} product={p} height={this.props.elementHeight}/>);

    return (
      <div style={{ height: `${this.props.tableHeight}px` }} className="products" ref="scrollable" onScroll={this.handleScroll}>
        <table className="table">
          <tbody>
            <tr key="top" style={{height: `${topHeight}px`}}>
              <td colSpan="20"/>
            </tr>
            {elements}
            <tr key="bottom" style={{height: `${bottomHeight}px`}}>
              <td colSpan="20"/>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

export default List;
