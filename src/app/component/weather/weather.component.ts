import { Component, OnInit } from '@angular/core';
import { Country, State, City } from 'country-state-city';
import { Covid19Service } from 'src/app/service/covid19.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  WeatherData: any;
  countries: any;
  selectedOption: any;
  lat = 38.8951;
  lon = -77.0364;
  constructor(private httpService: Covid19Service) {}

  ngOnInit() {
    this.httpService.currentMessage.subscribe((message: string) => {
      let data = State.getStatesOfCountry(message);
      this.countries = data;
    });

    // console.log(data);

    console.log(this.countries);
    this.WeatherData = {
      main: {},
      isDay: true,
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=ff1bc4683fc7325e9c57e586c20cc03e`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
      });
  }
  getCountry() {
    this.countries.forEach((element: any) => {
      if (element.name == this.selectedOption) {
        this.lat = element.latitude;
        this.lon = element.longitude;
        this.getWeatherData();
      }
    });
  }
  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.WeatherData.temp_celcius = (
      this.WeatherData.main.temp - 273.15
    ).toFixed(0);
    this.WeatherData.temp_min = (
      this.WeatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.WeatherData.temp_max = (
      this.WeatherData.main.temp_max - 273.15
    ).toFixed(0);
    this.WeatherData.temp_feels_like = (
      this.WeatherData.main.feels_like - 273.15
    ).toFixed(0);
  }
}
