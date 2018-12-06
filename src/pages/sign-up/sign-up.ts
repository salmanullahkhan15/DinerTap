import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../utils/Contants';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})


export class SignUpPage {

  username: any = "";
  email: any = "";
  password: any = "";
  confirmPassword: any = "";
  phone: any = ""
  errorHtml: any = "false"

  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  gotoHome() {
    this.navCtrl.setRoot(HomePage)
  }


  registerUser() {
    this.errorHtml = "false"

    // let body = {
    //   user_name: this.username,
    //   email: this.email,
    //   phone: this.phone,
    //   password: this.password,
    //   confirm_password: this.confirmPassword
    // }

    const formData = new FormData;
    formData.append("user_name", this.username)
    formData.append("email", this.email)
    formData.append("phone", this.phone)
    formData.append("password", this.password)
    formData.append("confirm_password", this.confirmPassword)

    // console.log(body)
    this.ApiProvider.registerUser(formData).then(res => {
      console.log(res)
      if (res.status == "False") {
        this.errorHtml = res.message
      } else {
        this.navCtrl.pop();
      }

      // if (res.type == 1) {
      //   this.storage.set(Constants.USER_TOKEN, res.message.token)
      //   this.navCtrl.push(LoginPage);
      // }
    })
  }

}
