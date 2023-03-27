import { Routes, Route, Link, Outlet } from 'react-router-dom';
import React from 'react';

function NestedRoute() {
    return (
      <div>
        <h1>Main routes</h1>
       <nav>
        <ul>
          <li>
            <Link to="nested-route-1">Nested Route 1</Link>
          </li>
          <li>
            <Link to="nested-route-2">Nested Route 2</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
      </div>
    );
  }

function NestedRoute1() {
    return (
      <div>
        <h2>Nested Route 1</h2>
      </div>
    );
  }
  
  function NestedRoute2() {
    return (
      <div>
        <h2>Nested Route 2</h2>
      </div>
    );
  }

function NestedRoutes() {
  return (<>
      <Routes>
      <Route
          path="/check"
          element={<NestedRoute />}
        >
        <Route
          path="nested-route-1"
          element={<NestedRoute1 />}
        />
        <Route
          path="nested-route-2"
          element={<NestedRoute2 />}
        />
        </Route>
      </Routes>
      </>
  );
}
export default NestedRoutes;

