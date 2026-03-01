import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Achievements from "./components/Achievements";
import Projects from "./components/projects";
import PositionsOfResponsibility from "./components/PositionsOfResponsibility";
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
                                <Experience />
                                <Education />
                                <Skills />
                                <CompetitiveProgramming />
                                <Achievements />
                                <Projects />
                                <PositionsOfResponsibility />
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
