
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavaBar from "./components/Navbar";
import Product from "./components/Product";
import User1 from "./components/User1";
import User2 from "./components/User2";
import Users from "./components/Users";
// lazy load the About page
const LazyAbout = React.lazy(()=> import("./components/About"))

const App = () => {
  return (
    <>
      <NavaBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* lazy loading routes */}
        <Route exact path="/about" element={<React.Suspense fallback="Loading ...."><LazyAbout/></React.Suspense>} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route  path="/users" element={<Users />} >
          <Route path="user/1" element={<User1/>}/>
          <Route path="user/2" element={<User2/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
