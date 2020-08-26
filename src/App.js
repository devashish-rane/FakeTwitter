import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed.js';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
    

       {/* sidebar */}
       <Sidebar/>

       {/* Feed */}
       <Feed/>
       
       {/* widget */}
       <Widgets/>
    </div>
  );
}

export default App;
