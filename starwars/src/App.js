import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWars from './components/StarWars/StarWars';
import './App.css';

const App = () => {
   // Try to think through what state you'll need for this app before starting. Then build out
   // the state properties here.
   const [data, setData] = useState([]);
   const [error, setError] = useState();
   
   useEffect(() => {
      axios.get(`https://swapi.co/api/people`)
         .then(response => {
            console.log(response.data);
            setData(response.data.results);
         })
         .catch(error => setError(error.response));
   }, []);

   return (
      <div className="App">
         <h1 className="Header">React Wars</h1>
         <StarWars characterList={data} />
      </div>
   );
};

export default App;