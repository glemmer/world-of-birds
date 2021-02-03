import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationsComponent } from './components/locations/locations.component';
import { UsersComponent } from './components/users/users.component';
import { BirdsComponent } from './components/birds/birds.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { ListBirdsComponent } from './components/list-birds/list-birds.component';
import { AddBirdComponent } from './components/add-bird/add-bird.component';
import { ViewBirdComponent } from './components/view-bird/view-bird.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    UsersComponent,
    BirdsComponent,
    MainComponent,
    LoginComponent,
    NewUserComponent,
    LogoutComponent,
    ListBirdsComponent,
    AddBirdComponent,
    ViewBirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
//      apiKey: 'XXXXXXX'
      apiKey: 'AIzaSyD-LM717FiPawYbwuPowR8KoyEDT3LkWSQ'
}),
    RouterModule.forRoot([
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'locations', component: LocationsComponent},
      {path: 'birds', component: BirdsComponent},
      {path: 'users', component: UsersComponent},
      {path: 'main', component: MainComponent},
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'new-user', component: NewUserComponent},
      {path: 'list-birds', component: ListBirdsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    router.navigateByUrl('/login');
  }
}
