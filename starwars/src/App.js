import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWars from './components/StarWars/StarWars';
import './App.css';

const App = () => {
   const [data, setData] = useState([]); // Initializes the state of data as an empty array
   const [error, setError] = useState();
   
   useEffect(() => {
      axios.get(`https://swapi.co/api/people`)
         .then(response => {
            console.log(response.data); 
            setData(response.data.results); // setsData set to the results array of characters coming from the api
         })
         .catch(error => setError(error.response));
   }, []);

   return (
      <div className='App'>
         <h1 className="Header">React Wars</h1>
         <StarWars characterList={data} /> 
      </div>
   );
};

export default App;