import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyLayout from './components/MyLayout';
import Profiles from './components/Profiles';
import MyHome from './components/MyHome';
import Groups from './components/Groups';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <MyLayout>
              <MyHome />
            </MyLayout>
          } />
          <Route path='/profiles' element={
            <MyLayout>
              <Profiles />
            </MyLayout>
          } />
          <Route path='/groups' element={
            <MyLayout>
              <Groups />
            </MyLayout>
          } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
