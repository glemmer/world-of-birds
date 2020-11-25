import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { UsersComponent } from './users/users.component';
import { BirdsComponent } from './birds/birds.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    UsersComponent,
    BirdsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-LM717FiPawYbwuPowR8KoyEDT3LkWSQ'
    }),
    RouterModule.forRoot([
      {path: '', redirectTo: '/main', pathMatch: 'full'},
      {path: 'locations', component: LocationsComponent},
      {path: 'birds', component: BirdsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'main', component: MainComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
