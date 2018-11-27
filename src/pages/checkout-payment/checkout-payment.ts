import { CheckoutConfirmPage } from './../checkout-confirm/checkout-confirm';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckoutPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout-payment',
  templateUrl: 'checkout-payment.html',
})
export class CheckoutPaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPaymentPage');
  }


  gotoCheckoutConfirm() {
    this.navCtrl.push(CheckoutConfirmPage, { animate: true, direction: 'forward' })
  }

  goBack() {
    this.navCtrl.pop({ animate: true, direction: 'back' })
  }

}
