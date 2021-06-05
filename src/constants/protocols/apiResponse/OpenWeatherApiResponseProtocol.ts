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

export interface OpenWeatherApiResponseProtocol {
  daily: DailyWeather[];
}
