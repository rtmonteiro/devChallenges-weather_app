import { Component, OnInit } from '@angular/core';

export enum EWeatherIcon  {
  CLEAR = "Clear",
  CLOUD = "Cloud-background",
  HAIL = "Hail",
  HEAVY_CLOUD = "HeavyCloud",
  HEAVY_RAIN = "HeavyCloud",
  LIGHT_CLOUD = "LightCloud",
  LIGHT_RAIN = "LightRain",
  SHOWER = "Shower",
  SNOW = "Snow",
  THUNDERSTORM = "Thunderstorm"
}

@Component({
  selector: 'wt-card-show-status',
  templateUrl: './card-show-status.component.html',
  styleUrls: ['./card-show-status.component.scss']
})
export class CardShowStatusComponent implements OnInit {

  iconType: EWeatherIcon = EWeatherIcon.CLEAR;

  constructor() { }

  ngOnInit(): void {
  }

}
