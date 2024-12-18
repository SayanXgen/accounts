import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  inputType: string = 'password';
  password: string = 'ihsbdii';
  profileImage: string = 'assets/images/demo.jpg';
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



  async changeProfileImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl, // Returns base64 data URL
        source: CameraSource.Prompt // Prompt user to choose between camera and gallery
      });

      if (image?.dataUrl) {
        this.profileImage = image.dataUrl; // Update the profile image
        console.log('Profile image updated!');
      }
    } catch (error) {
      console.error('Error changing profile image:', error);
    }
  }
}
