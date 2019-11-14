/* eslint-disable no-unused-vars */
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { renderRoutes } from "@/utils";
import routes from "./config";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Router>{renderRoutes(routes)}</Router>;
  }
}
