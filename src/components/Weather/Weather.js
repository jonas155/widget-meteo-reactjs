import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
    const ville = 'Paris';
    //const codePostal = '75000';
    const appId = process.env.REACT_APP_API_KEY;
    console.log(process.env);
    
    /*const [lon, setLon] = useState(null);
    const [lat, setLat] = useState(null);*/
    const [temp, setTemp] = useState(null);


    function getWeather(lat,lon){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`, {
            }).then((result) => {
                console.log('Requete getWeather OK', result.data);
                setTemp(result.data.main.temp);
            }).catch((error) => {
                console.log('Requete getWeather NOK', error);
            });
    }

    useEffect(() => {
       //appel api
       axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${ville}&appid=${appId}`, {
        }).then((result) => {
            console.log('Requete getLocation OK', result.data);
            /*setLon(result.data[0].lon);
            setLat(result.data[0].lat);*/
            getWeather(result.data[0].lat, result.data[0].lon);
        }).catch((error) => {
            console.log('Requete getLocation NOK', error);
        });
      },[]);
      
    return (
    <main>
      <div>Paris</div>
      <div>75000</div>
      <div>{temp} °</div>
    </main>
    );
  };
  
  export default Weather;