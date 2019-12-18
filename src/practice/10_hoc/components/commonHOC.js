import React, { Component } from 'react'

const commonHOC = (WrappedElement, isUpper) => {
  class CommonHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        item: []
      };
    }

    addItem = itemName => {
      this.setState(prevState => {
        return {
          item: [...prevState.item, isUpper ? itemName.toUpperCase() : itemName]
        };
      });
    };

    render() {
     const { item } = this.state;
      let itemList = item.map((item, index) => <li key={index}>{item}</li>);
      return (
        <WrappedElement
          item={item}
          addItem={this.addItem}
          itemList={itemList}
          {...this.props}
        />
      );
    }
  }
  return CommonHOC;
};
export default commonHOC;
