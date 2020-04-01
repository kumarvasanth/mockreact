import React from 'react';
import './App.css';
import User from "./users";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
                   <h1>Please find the List of Users ,click on User to know activity time ranges.</h1>

      <User></User>
    </div>
  );
}

export default App;
