import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.page.html',
  styleUrls: ['./other-list.page.scss'],
})
export class OtherListPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.navigateBack("dashboard")
  }

}
