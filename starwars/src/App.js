import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = (props) => {
   // Try to think through what state you'll need for this app before starting. Then build out
   // the state properties here.
   const [data, setData] = useState({ starwarsChars: [] });

   useEffect(() => {
      const fetchData = () => {
         axios
            .get(`https://swapi.co/api/people`)
            .then(response => setData(response.data));
      };

      fetchData();
   }, []);

   return (
      <div className="App">
         <h1 className="Header">React Wars</h1>

      </div>
   );
};

export default App;