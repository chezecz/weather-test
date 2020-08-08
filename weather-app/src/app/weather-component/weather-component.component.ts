import { Component, OnInit } from '@angular/core';

import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponentComponent implements OnInit {

  cities = ['Sydney', 'Melbourne', 'Brisbane']

  city = 'Sydney'

  constructor(private getWeatherService: GetWeatherService) { }

  ngOnInit(): void {
  }

  getWeather() {
  	this.getWeatherService.getWeather(this.city).subscribe(result => {
  		console.log(result)
  	})
  }

}
