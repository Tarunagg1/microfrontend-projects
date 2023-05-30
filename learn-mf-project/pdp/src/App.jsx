import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from 'Home/Header';
import Footer from 'Home/Footer';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">PDP page content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
