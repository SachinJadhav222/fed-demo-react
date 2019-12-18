import React from "react";

export default class ItemRP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = itemName => {
    this.setState(prevState => {
      return {
        items: [
          ...prevState.items,
          this.props.isUpper ? itemName.toUpperCase() : itemName
        ]
      };
    });
  };

  render() {
    const { items } = this.state;
    // let itemList = items.map((item, index) => <li key={index}>{item}</li>);

    return <div>{this.props.children(items, this.addItem)}</div>;
  }
}
