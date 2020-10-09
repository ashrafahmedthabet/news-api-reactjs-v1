import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Search from './component/search.js';
import View from './component/view';

function App() {
  let [result,setResult]=useState([])
  const search=(e)=>{
    e.preventDefault();
    let title=e.target.title.value;
    const api=`https://newsapi.org/v2/everything?q=${title}&apiKey=9ddc36be1cd04afa94c4201d6d694bc3`;
    axios(api).then(response=>{
    setResult(response.data);
    });
    
  }
  return (
     <div className="container">
       <h1 className="text-center mt-3 mb-5">News Search</h1>
     <Search search={search} />
     <View result={result} />
     </div>
  
    
  );
}

export default App;
