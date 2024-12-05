import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  inputType: string = 'password';
  password: string = 'ihsbdii';
  constructor(
    private menuController: MenuController,
    private navCtrl: NavController,

  ) { }

  ngOnInit(

  ) {
  }

  toggleInputType() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

  closeProfile() {

    this.menuController.open();
    this.navCtrl.navigateForward("dashboard")
  }
}
