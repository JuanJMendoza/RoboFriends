import React, { Component } from "react";

class ErrorbBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Whoops! This isn't good. :T</h1>;
    }
    return this.props.children;
  }
}

export default ErrorbBoundary;
