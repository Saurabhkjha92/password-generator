
import { useState } from 'react';
import './App.css';
import { LC, NM, SM, UC } from './Digits';

function App() {


  let [uppercase,setuppercase]=useState(false)
  let [lowerrcase,selowercase]=useState(false)
  let [symbol,setsymbol]=useState(false)
  let [number,ssetnumber]=useState(false)
  let [passwordlen,setpasswordlen]=useState(10);
  let [fpass,sefpass]=useState('')
   
  let createpassword=()=>{
    let charset ='';
    let finalpass = '';
    if(uppercase||lowerrcase||symbol||number)
    {
      if(uppercase)  charset+=UC
      if(lowerrcase)  charset+=LC
      if(symbol) charset+=SM
      if(number) charset+=NM
      for(let i=0;i<passwordlen;i++)
      {
          finalpass += charset.charAt(Math.floor(Math.random()*charset.length))
      }
        sefpass(finalpass)
      
    }
    else{
      alert("please select box")
    }
  }
    let  copypass=()=>{
      navigator.clipboard.writeText(fpass)

        }
  return (
       <>
      <div className="passwordbox">
                <h3>Password Generator</h3>
                <div className="passwordboxin">
                  <input type="text" value={fpass}  readOnly/><button onClick={copypass}>copy</button>
                </div>
            <div className="passlength" >
              <label> password length</label>
              <input type="number"  max={20} min={10} value={passwordlen} onChange={(event)=>setpasswordlen(event.target.value)} /></div>  


              <div className="passlength">
              <label>include uppercase</label>
              <input type='checkbox' checked={uppercase} onChange={(event)=>setuppercase(!uppercase)}/></div> 


              <div className="passlength">
              <label> include lowercase</label>
              <input type="checkbox" checked={lowerrcase} onChange={()=>selowercase(!lowerrcase)}/></div> 

              <div className="passlength">
              <label> include number</label>
              <input type="checkbox"  checked={number} onChange={()=>ssetnumber(!number)}/></div> 

              <div className="passlength">
              <label>including symbol</label>
              <input type="checkbox" checked={symbol} onChange={()=>setsymbol(!symbol)}/></div> 


              <button className='btn' onClick={createpassword}>Generate Password</button>


      </div>
      </>
      
    
  );
}

export default App;
