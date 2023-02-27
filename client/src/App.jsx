import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Base from "./pages/Base";
import Signup from "./pages/signup";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5174/'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}
export default App;
