/* eslint-disable no-unused-vars */
import React from "react";
import { HashRouter } from "react-router-dom";
import RouterView from "@/components/router-view";

import routes from "./config";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <RouterView route={{ childrens: routes }} />
      </HashRouter>
    );
  }
}
