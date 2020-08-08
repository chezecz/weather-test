import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { StartPageComponent } from './start-page/start-page.component';

import { GetWeatherService } from './get-weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponentComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GetWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
