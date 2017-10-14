import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { global } from '../../app/global'

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  
  public localonline:boolean = false;
  price: any; 
  price2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Каталог продукции');
  }
  
  
  doFrame() {
    // this.online=!this.online;
    // console.log('Смена обзора...');
    
    this.localonline=!this.localonline;
   
  }
}
