interface DailyWeather {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: {
    description: string;
  };
}

export interface OpenWeatherApiResponseProtocol {
  daily: DailyWeather[];
}
