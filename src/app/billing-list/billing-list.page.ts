import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.page.html',
  styleUrls: ['./billing-list.page.scss'],
})
export class BillingListPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.navigateBack("dashboard")
  }
}
