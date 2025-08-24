import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'



function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path = "/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path = "/login" element={<Login />} />
      <Route path = "/logout" element={<Logout />} />
      <Route path = "/register" element={<RegisterAndLogout />} />
      <Route path = "/*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App


// import React from "react";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// console.log(createBrowserRouter, RouterProvider);

// import Home from "./pages/Home.jsx";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import NotFound from "./pages/NotFound.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <NotFound />,   // 👈 this handles all unmatched routes
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;



