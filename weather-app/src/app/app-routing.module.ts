import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPageComponent } from './start-page/start-page.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';

const routes: Routes = [
	{path: '', component: StartPageComponent},
	{path: 'weather', component: WeatherComponentComponent},
	{path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
