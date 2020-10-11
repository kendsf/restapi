import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    const { title, name} = this.props;
  return (
    <div className="component">
    <h1>Title:{title}</h1>
    <h2>Name: {name}</h2>
    </div>
  );
}
}

export default MyComponent;
