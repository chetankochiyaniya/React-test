import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavaBar from "./components/Navbar";
import Product from "./components/Product";

const App=()=>{

  return <> 
            <NavaBar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/product/:id" element={<Product/>}/>
            </Routes>
        </>
}
export default App;
