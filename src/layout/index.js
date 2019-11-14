import React from "react";
import { renderRoutes } from "@/utils";
import { Link } from "react-router-dom";
import "./style.less";
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: props.route
    };
    console.log(props.route);
  }
  render() {
    return (
      <div className="container">
        <div className="flex">
          {this.state.route.childrens.map((el, index) => {
            return (
              <div key={"index" + index}>
                <Link to={el.path}>{el.meta.title}</Link>
              </div>
            );
          })}
        </div>
        <div className="content">
          {renderRoutes(this.state.route.childrens)}
        </div>
      </div>
    );
  }
}

// export default ({ route }) => (
//   <div>
//     <h1>Root</h1>
//     {/* child routes won't render without this */}
//     {renderRoutes(route.routes)}
//   </div>
// );
