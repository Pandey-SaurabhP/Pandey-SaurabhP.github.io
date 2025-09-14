import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import About from "./components/about";
import Projects from "./components/projects";
import ContactUs from "./components/contact";
import Private from "./components/Private";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/*"
                        element={
                            <>
                                <Header />
                                <About />
                                <Projects />
                                <ContactUs />
                            </>
                        }
                    />
                    <Route path="/private" element={<Private />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
