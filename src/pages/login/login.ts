import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { TypeSelectionPage } from '../type-selection/type-selection';
import { Constants } from '../../utils/Contants';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: any = ""
  password: any = ""
  errorHtml: any = "false"

  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider, public storage: Storage) {
  }

  ionViewWillEnter() {
    this.ApiProvider.getToken().then(res => {
      console.log(res)
      if (res != null && res != "") {
        this.navCtrl.setRoot(TypeSelectionPage);
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  gotoHome() {
    this.navCtrl.setRoot(TypeSelectionPage)
  }
  gotoSignup() {
    console.log("click ")
    this.navCtrl.push(SignUpPage)
  }

  loginUser() {
    this.errorHtml = "false"

    const formData = new FormData;
    formData.append("user_name", this.username)
    formData.append("password", this.password)


    this.ApiProvider.loginUser(formData).then(res => {
      console.log(res)
      if (res.status == "False") {
        this.errorHtml = res.message
      } else {
        // content
        this.storage.set(Constants.USER_TOKEN, res.message.content.token).then(res => {
          this.ApiProvider.userToken = res
          this.navCtrl.setRoot(TypeSelectionPage);
        })
      }
      // if (res.type == 1) {
      //   this.storage.set(Constants.USER_TOKEN, res.message.token).then(res => {
      //     this.ApiProvider.userToken = res
      //     this.navCtrl.setRoot(TabsPage);
      //   })
      // }
    })
  }
}
