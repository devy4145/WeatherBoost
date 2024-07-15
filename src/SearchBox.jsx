import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { Alert, colors } from "@mui/material";

export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");
    let [error, setError] = useState(false); 

    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "8c1acac6b4ac3cbe4a0b07b38218ca9a";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city : jsonResponse.name,
                country : jsonResponse.sys.country,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                weather : jsonResponse.weather[0].main, 
            };
            // console.log(result);
            return result;
        }   catch(err){
            throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
    }

    return(
        <div className="SearchBox">
        {/* <h3>Search for the weather</h3> */}
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color: "red"}}>No such place found!</p>}
        </form>
        </div>
    )
}