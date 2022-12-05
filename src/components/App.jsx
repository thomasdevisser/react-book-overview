import React, { Component } from "react";
import BookOverview from "./BookOverview";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<BookOverview />} />
            <Route path="/books" element={<BookOverview />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
