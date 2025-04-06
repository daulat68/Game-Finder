import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from './components/store';
import HeroSection from "./components/HeroSection";
import Bookmark from "./components/Bookmark";
import GameDetail from './components/GameDetail';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center p-4 bg-light border rounded shadow-sm">
            <h2 className="mb-3">You're not Signed In</h2>
            <p>Please sign in to view your bookmarks</p>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HeroSection /> },
      {
        path: "/bookmarks",
        element: (
          <ProtectedRoute>
            <Bookmark />
          </ProtectedRoute>
        )
      },
      { path: "game/:id", element: <GameDetail /> },
    ],
  },
]);

// ✅ Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ClerkProvider>
);
