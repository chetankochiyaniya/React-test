
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavaBar from "./components/Navbar";
import Product from "./components/Product";
import Protected from './components/Protected';
import User1 from "./components/User1";
import User2 from "./components/User2";
import Users from "./components/Users";
// lazy load the About page
const LazyAbout = React.lazy(() => import("./components/About"))

const App = () => {

  const [isSignedIn, setIsSignedIn] = useState(false)
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }

  return (
    <>
      <NavaBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* lazy loading routes */}
        <Route exact path="/about" element={<React.Suspense fallback="Loading ...."><LazyAbout /></React.Suspense>} />
        {/* protected routes */}
        <Route exact path="/product/:id" element={
          <Protected isSignedIn={isSignedIn}>
            <Product />
          </Protected>} />
        <Route path="/users" element={<Users />} >
          <Route path="user/1" element={<User1 />} />
          <Route path="user/2" element={<User2 />} />
        </Route>
      </Routes>
      {isSignedIn ? (
        <div>
          <button onClick={signout}>
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <button onClick={signin}>
            Sign in
          </button>
        </div>
      )}
    </>
  );
};

export default App;
