import { MapPage } from './../pages/map/map';
import { RestaurantListingPage } from './../pages/restaurant-listing/restaurant-listing';
import { RestaurantMenuPage } from './../pages/restaurant-menu/restaurant-menu';
import { FilterPage } from './../pages/filter/filter';
import { TypeSelectionPage } from './../pages/type-selection/type-selection';
import { SignUpPage } from './../pages/sign-up/sign-up';
import { ReservationFormPage } from './../pages/reservation-form/reservation-form';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AboutUsPage } from '../pages/about-us/about-us';
import { StarRatingModule } from 'ionic3-star-rating';

import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ReservationFormPage,
    SignUpPage,
    AboutUsPage,
    TypeSelectionPage,
    FilterPage,
    RestaurantMenuPage,
    RestaurantListingPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    StarRatingModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ReservationFormPage,
    SignUpPage,
    AboutUsPage,
    TypeSelectionPage,
    FilterPage,
    RestaurantMenuPage,
    RestaurantListingPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
