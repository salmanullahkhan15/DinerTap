import { RestaurantListingPage } from './../restaurant-listing/restaurant-listing';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {





  }
  gotoRestaurantList() {
    this.navCtrl.setRoot(RestaurantListingPage)
  }
}
