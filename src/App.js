import React, { } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import "./App.css";
import MainPageNotLogin from "./Components/MainPageNotLogin";
import UserIsLoginTwitter from "./Components/UserIsLoginTwitter";
import { auth } from "./firebase/config";

function App() {
  const [cookie] = useCookies(["user"])
  return (
    <CookiesProvider>
      <div className="app">
        {
          auth.currentUser || cookie?.user ? <UserIsLoginTwitter /> : <MainPageNotLogin />
        }
      </div>
    </CookiesProvider>
  );
}


export default App;
