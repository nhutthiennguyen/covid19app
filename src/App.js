import React, {useEffect} from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import './App.scss';

function App() {
  useEffect(()=>{
    const data = await fetchData();
    
  }, [])
  return (
    <div className="container">
        <Cards/>
        <Chart/>
        <CountryPicker/>
    </div>
  );
}

export default App;
