import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookmarksPage from "./pages/BookMark";
import Navbar from "./components/NavBar";

import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <Router>
      <div className="p-4 bg-[#18181b]">
         <ToastContainer position="bottom-center" autoClose={2000} theme="dark" />
    <Navbar/>
        <Routes>
   
          <Route path="/" element={<HomePage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
