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
  imageUrl: string | undefined;
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

  async openGallery() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // Get image as a base64 string
        source: CameraSource.Photos,        // Opens the gallery
      });

      this.imageUrl = image.dataUrl; // Save the selected image URL
    } catch (error) {
     
    }
  }
}