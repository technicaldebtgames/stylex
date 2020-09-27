import React from 'react';

import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';
import MainFooter from './components/MainFooter';

import './App.css';
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainContent />
      <MainFooter />
    </div>
  );
}

export default App;
