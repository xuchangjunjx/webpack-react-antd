import React from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  componentWillMount() {
    this.setState({
      text: "hello world"
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.text}</div>
        <Link to="/application">applications</Link>
      </div>
    );
  }
}
export default MyComponent;
