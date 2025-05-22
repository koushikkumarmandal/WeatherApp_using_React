import './SearchBox.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



export default function SearchBox({updateInfo}){
    let URL="https://api.openweathermap.org/data/2.5/weather";
    let KEY="d08809d403236ef0f07ac1b882271498";


    let[city,setCity]=useState("");
    let[error,setError]=useState(false);

     let getweathetinfo=async()=>{
        try{

            let response=await fetch(`${URL}?q=${city}&appid=${KEY}&units=metric`);
        let json_response= await response.json();
         console.log(json_response);
        let result={
            name:json_response.name,
            temp:json_response.main.temp,
            humidity:json_response.main.humidity,
            weather:json_response.weather[0].main
        }
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
        
    }

    let handlechange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let info=await getweathetinfo();
        updateInfo(info);
        }
        catch(err){
            setError(true);
        }
    
    }

   

    return (
        <div className='SearchBox'>
            <h3>Search Weather</h3>

        <form action="" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handlechange}/>
        <br /><br />
        <Button type='submit' variant="contained">SEARCH</Button>
       

        {error && <p>Enter a Correct City</p>}
    </form>
        </div>
        
    )
}