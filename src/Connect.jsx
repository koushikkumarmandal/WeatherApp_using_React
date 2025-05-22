import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function Connect(){

    let [connect,Setconnect]=useState({
    name: 'Kolkata',
    temp: 29.97, 
    humidity: 79,
    weather: 'Haze'
});



let updateInfo=(result)=>{
    Setconnect(result);
}


    return(
        <div>
      <SearchBox updateInfo={updateInfo}/>
      <br /><br />
      <InfoBox info={connect}/>
        </div>
    );
}