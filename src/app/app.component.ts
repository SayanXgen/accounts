import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  inputType: string = 'password'
  password: string = 'cCas'
  public appPages = [
    // { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private menuController: MenuController,
    private navCtrl: NavController
  ) {}
  toggleInputType() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

  editProfile() {
    
    this.menuController.close();
    this.navCtrl.navigateForward("edit-profile")
  }
}
