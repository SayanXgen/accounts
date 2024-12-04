import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';
import { VoiceModalPage } from '../voice-modal/voice-modal.page';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  photo: any;
  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }
  async openCamera() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl, // Return the image as a base64 string
      source: CameraSource.Camera, // Use the device camera
    });

    this.photo = image.dataUrl; // Store the image
  }
  toOthers() {
    this.navCtrl.navigateForward("other-page")
  }

  toSalesBill() {
    this.navCtrl.navigateForward("sales-bill")
  }


  async voiceModal() {
    const modal = await this.modalController.create({
      component: VoiceModalPage,
      cssClass: "voiceModal",
    });

    return await modal.present();
  }
}