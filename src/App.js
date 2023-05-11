import React from "react";
import {Route, Routes} from "react-router-dom"
import Login from "./js/Member/Login";
import SignUp from "./js/Member/SignUp";
import MyPage from "./js/Member/MyPage";
import MyPosts from "./js/Meeting/MyPosts";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/myposts' element={<MyPosts />} />
      </Routes>
    </div>
  );
}

export default App;