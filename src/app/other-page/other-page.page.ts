import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.page.html',
  styleUrls: ['./other-page.page.scss'],
})
export class OtherPagePage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.navigateBack("dashboard")
  }
  otherList() {
    this.navCtrl.navigateBack("other-list")
  }
}
