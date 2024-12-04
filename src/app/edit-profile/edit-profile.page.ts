import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  constructor(
    private menuController: MenuController,
    private navCtrl: NavController,

  ) { }

  ngOnInit(

  ) {
  }



  closeProfile() {

    this.menuController.open();
    this.navCtrl.navigateForward("dashboard")
  }
}
