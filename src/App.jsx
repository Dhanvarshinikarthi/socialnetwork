import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import Wall from "./pages/wall";
import Friends from "./pages/friends";
import Header from "./components/mediaheader/header/header";
import ChatPage from "./pages/chatpage";

function App() {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Wall />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/chatpage" element={<ChatPage />} />
        </Routes>
      </>
    </>
  );
}

export default App;
