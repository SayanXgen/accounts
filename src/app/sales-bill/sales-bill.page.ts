import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sales-bill',
  templateUrl: './sales-bill.page.html',
  styleUrls: ['./sales-bill.page.scss'],
})
export class SalesBillPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }
  date: any
  ngOnInit() {
  }
  back() {
    this.navCtrl.navigateBack("dashboard")
  }

  billList() {
    this.navCtrl.navigateBack("billing-list")
  }
}
