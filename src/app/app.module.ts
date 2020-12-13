import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { LocationsComponent } from './components/locations/locations.component';
import { UsersComponent } from './components/users/users.component';
import { BirdsComponent } from './components/birds/birds.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    UsersComponent,
    BirdsComponent,
    MainComponent,
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD-LM717FiPawYbwuPowR8KoyEDT3LkWSQ'
    }),
    RouterModule.forRoot([
      {path: '', redirectTo: '/main', pathMatch: 'full'},
      {path: 'locations', component: LocationsComponent},
      {path: 'birds', component: BirdsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'main', component: MainComponent},
      {path: 'login', component: LoginComponent},
      {path: 'new-user', component: NewUserComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    router.navigateByUrl('/main');
  }
}
