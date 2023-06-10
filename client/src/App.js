import React from "react";
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RouterLayout from "./routes/RouterLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RouterLayout />}>
      <Route index element={<Dashboard/>}/>
      <Route path="/setting" element={<Settings />}/>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
