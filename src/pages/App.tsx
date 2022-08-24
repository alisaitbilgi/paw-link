import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Form from "./Form/Form";

class App extends Component<any, any> {
    render() {
        return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="form" element={<Form />} />
            </Routes>
        );
    }
}

export default App;
