import {Component, Input, OnInit} from '@angular/core';

export enum EWeatherIcon  {
  CLEAR = 'Clear',
  CLOUD = 'Cloud-background',
  HAIL = 'Hail',
  HEAVY_CLOUD = 'HeavyCloud',
  HEAVY_RAIN = 'HeavyRain',
  LIGHT_CLOUD = 'LightCloud',
  LIGHT_RAIN = 'LightRain',
  SHOWER = 'Shower',
  SLEET = 'Sleet',
  SNOW = 'Snow',
  THUNDERSTORM = 'Thunderstorm'
}

interface WeatherStatus {
  iconType: EWeatherIcon;
  date: string;
  maxTemperature: number;
  minTemperature: number;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wt-card-show-status',
  templateUrl: './card-show-status.component.html',
  styleUrls: ['./card-show-status.component.scss']
})
export class CardShowStatusComponent implements OnInit{

  @Input() weatherStatus!: WeatherStatus;
  unitIsCelsius = true;
  readonly unit!: string;

  constructor() {
    this.unit = this.unitIsCelsius ? '°C' : '°F';
  }

  ngOnInit(): void {
    this.weatherStatus = {
      iconType: EWeatherIcon.CLEAR,
      date: 'Tomorrow',
      maxTemperature: 16,
      minTemperature: 11
    };
  }

}
