import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tab1', 
  templateUrl: 'tab1.html',
})
export class Tab1Page {
// id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
   
  } 
  openModal(id) {
   let modal = this.modalCtrl.create('ModalPage', id);
    modal.present();

    }
}
