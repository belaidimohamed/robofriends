import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false ,
    }
  }
  componentDidCatch() {
    this.setState({hasError: true})
  }
  render() {
    if(this.state.hasError) {
      return (
        <h1>Opps , there was an error</h1>
      );
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundry;