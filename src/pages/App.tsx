import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";

class App extends Component<any, any> {
    render() {
        return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        );
    }
}

export default App;
