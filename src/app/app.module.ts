import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { JumbotronComponent } from './component/jumbotron/jumbotron.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { routing } from './app.routing';
import { ProfileComponent } from './component/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JumbotronComponent,
    HomePageComponent,
    AboutPageComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
