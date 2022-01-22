import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Bmi from './components/BMI';
 
function App() {
  return (
    <div className="App container"> 
      <div className="row justify-content-center">
        <div className='col-lg-6 col-lg-offset-3'>
          <Bmi/>
        </div>
      </div>
    </div>
  );
}

export default App;
