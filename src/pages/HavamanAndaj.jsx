import { useEffect, useState } from "react";
import Simplebox from "../component/cards/Simplebox";
import axios from "axios";

const HavamanAndaj = () => {
  const [weather, setWeather] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
 const CITY = "425416,IN";
  const LAT = 21.2547;
  const LON = 74.0409;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`,
        );
        setWeather(res.data);
      } catch (err) {
        console.error("Weather API Error:", err.response?.data || err.message);
      }
    };
    fetchWeather();

    // ⏱️ प्रत्येक 10 मिनिटांनी update (live feel)
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  if (!weather)
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      <div className="bg-[#fff3e0] flex flex-col items-center">
        <Simplebox
          title="⛅ हवामान अंदाज"
          subtitle="आजचा हवामान अंदाज"
          text="आपल्या गावासाठी हवामानाची माहिती खाली दर्शवली आहे."
        />
        <p className="text-[11px] text-[#E65100]">
          गाव: वावडी, तालुका: नवापूर, जिल्हा: नंदुरबार
        </p>
        <div className="max-w-md mx-auto my-5 border border-orange-400 rounded-xl p-6 text-sm">
          <h2 className="text-center text-orange-600 font-bold text-lg">
            🌤️ हवामान: {weather.name}
          </h2>

          <div className="mt-4 space-y-2">
            <p>🌡️ तापमान: {weather.main.temp}°C</p>
            <p>☁️ स्थिती: {weather.weather[0].description}</p>
            <p>⬆️ कमाल तापमान: {weather.main.temp_max}°C</p>
            <p>⬇️ किमान तापमान: {weather.main.temp_min}°C</p>
            <p>💧 आर्द्रता: {weather.main.humidity}%</p>
            <p>💨 वाऱ्याचा वेग: {weather.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HavamanAndaj;
