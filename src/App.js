import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
//Ashish Vishwakarma
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>

          {/* <NavLink to={"*"}></NavLink> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        {/* when path is not available */}
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
