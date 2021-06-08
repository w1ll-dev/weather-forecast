interface Weather {
  description: string;
}
interface DailyWeather {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: Weather[];
}

interface OpenWeatherApiResponseProtocol {
  daily: DailyWeather[];
}

export default OpenWeatherApiResponseProtocol;
