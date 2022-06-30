import { useState } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json';

function App() {
   
  const [search, setSearch] = useState(''); 

  return (
    <div className="App">
      <h1>Search Bar</h1>
      <input type="text" placeholder="Search..." onChange={e=>setSearch(e.target.value)}/>
      {JSONDATA.filter((item)=>{
   if(search === "")
   {
      return false
   }
   else
   {
     let fname = item.first_name;
     if(fname.toLowerCase().includes(search.toLowerCase()))
   		return item;
     }
  }
)
.map((val, key)=>{
          return(
          <div key={key}>
            <p>{val.first_name}<br/>{val.email}</p>
          </div>
        )
        })}
    </div>
  );
}

export default App;
