import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from "../App";
import Login from "../views/login";

interface RouterProps {}
interface RouterState {}

class Router extends React.Component<RouterProps, RouterState> {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default Router;