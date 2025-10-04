import { Routes, Route } from "react-router-dom";
import Structure from "./Components/Structure";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import NotFound from "./Pages/Not-found";

// React-router-dom is a react library used for routing
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Structure />}>
          {/* all pages are rendered inside the structure component so that they will all have the header, outlet and footer */}
          <Route path='/' element={<Home />} />
          {/* whenever a particular path is visited, whatever is in the element will show */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Route>
        <Route path='/login' element={<Login />} />
        {/* login is written outside of the structure route because we dont want it to have a header and a footer */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
