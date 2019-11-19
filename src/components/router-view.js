import React from "react";
import { renderRoutes } from "@/utils";

export default class RouterView extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this);
    return (
      <div>
        {renderRoutes(this.props.route.childrens, {
          someProp: ""
        })}
      </div>
    );
  }
}
