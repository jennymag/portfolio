import Styled from "styled-components";
import Icons from "./Icons";
import { useEffect, useState } from "react";
import rain from "./image/rain.png";
import sunny from "./image/sunny.png";
import snowflake from "./image/snowflake.png";
import rainandsnow from "./image/rainandsnow.png";
import icepellets from "./image/icepellets.png";

const Foot = Styled.section`


display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 2% 10% 2% 10%;
color: white;
background-color: #333333;
overflow: hidden;

div {
  margin-bottom: 6px;
}
h3 {
  margin: 0;
padding: 0;
  padding: 0 0 6px 10px;
  font-size: 40px;
  font-family: 'Dawning of a New Day', cursive;
}

img {
  padding: 20px 0 0 15px;
}

p {
  max-width: 350px;
}
img {
  margin-bottom: 30px;
 
}
`;
const Weather = Styled.div`

img {
  width: 80px;
  padding: 10px;
  text-align: center;
}
p {
  color: red;
}
`;

function Footer() {
  const [weather, setWeather] = useState();
  const [hasWeatherError, setHasWeatherError] = useState(false);

  useEffect(() => {
    fetch(
      "https://climacell-microweather-v1.p.rapidapi.com/weather/realtime?lat=59.334591&lon=18.063240",

      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ee35290345mshd0332aad3bcf7fap1eb04bjsn9381828c87fc",
          "x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        setWeather(data.precipitation.value);
      })
      .catch((err) => {
        console.error(err);
        setHasWeatherError(true);
      });
  }, []);

  let weatherPrecentation;

  if (weather === 0) {
    weatherPrecentation = sunny;
  } else if (weather === 1) {
    weatherPrecentation = rain;
  } else if (weather === 2) {
    weatherPrecentation = snowflake;
  } else if (weather === 3) {
    weatherPrecentation = rainandsnow;
  } else if (weather === 4) {
    weatherPrecentation = icepellets;
  }

  return (
    <Foot>
      <div>
        <h3>About me</h3>
        <p>
          Hello there! I'm a passioned Frontend Developer Student with a big
          interest in design. I'm currently living in Stockholm. My interest in
          coding and web development has followed me since I was a kid, but
          today not all of my pages is related to cute cats :)
        </p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>
          Find me on my socials down below! Feel free to contact me if you want
          to know more.
        </p>
        <Icons />
      </div>
      <Weather>
        <h3>Weather in Stockholm</h3>
        <p>
          {hasWeatherError ? (
            "Error: Can not fetch data"
          ) : (
            <img src={weatherPrecentation} alt="weather" />
          )}
        </p>
      </Weather>
    </Foot>
  );
}

export default Footer;
