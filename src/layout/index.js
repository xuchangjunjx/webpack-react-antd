/* eslint-disable no-unused-vars */
import React from "react";
import RouterView from "@/components/router-view";
import { Link } from "react-router-dom";
import "./style.less";
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="content">
          <RouterView route={this.props.route} />
        </div>
      </div>
    );
  }
}
