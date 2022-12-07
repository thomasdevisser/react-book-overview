import BookOverview from "./BookOverview";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

function App() {
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

export default App;
