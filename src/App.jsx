import "./App.css";
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home.jsx";

const About = lazy(() => import("./component/about.jsx"));
const Services = lazy(() => import("./component/services.jsx"));
const Contact = lazy(() => import("./component/contact.jsx"));


function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>loading....</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />

            {/* <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
             */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
