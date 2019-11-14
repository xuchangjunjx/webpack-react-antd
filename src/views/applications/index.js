/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "@/utils";
import "./style.less";
export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: props.route,
      showChild: false
    };
    this.props.history.listen(route => {
      const { pathname } = route;

      this.setState({
        showChild: this.state.route.path != pathname
      });
    });
  }
  render() {
    return (
      <div className="app">
        <div className="left">
          <ul>
            <li>
              <Link to="/application/cart">cart</Link>
            </li>
            <li>
              <Link to="/application/bus">bus</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          {this.state.showChild ? "" : "hello"}

          {renderRoutes(this.state.route.childrens, {
            someProp: "these extra props are optional"
          })}
        </div>
      </div>
    );
  }
}
