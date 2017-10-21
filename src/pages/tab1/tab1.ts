import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
 
// http Call
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-tab1', 
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  films: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http:Http) {
    // this.films = this.http.get('https://swapi.co/api/films').map(res => res.json());
    this.films = this.http.get('../assets/data.json').map(res => res.json());
    // this.films = this.http.get('http://amberregion.ru/old/news.json').map(res => res.json());
}
  openDetails(film) {
    this.navCtrl.push('NewsDetailPage', {film: film});
  }
  openModal(id) {
   let modal = this.modalCtrl.create('ModalPage', id);
    modal.present();

    }
}
