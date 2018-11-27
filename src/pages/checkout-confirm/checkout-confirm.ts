import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckoutConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout-confirm',
  templateUrl: 'checkout-confirm.html',
})
export class CheckoutConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutConfirmPage');
  }

  goBack() {
    this.navCtrl.pop({ animate: true, direction: 'back' })
  }
}
