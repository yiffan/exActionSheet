import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public acSheet: ActionSheetController,
    public navCtrl: NavController) {

  }

  showAction(){
    const action = this.acSheet.create({
      title: 'เลือกรายการ',
      subTitle: '----------------',
      buttons: [
        {
          text: 'Add'
        },
        {
          text: 'Edit',
          role: 'edit',
          handler: () => {
            console.log('แก้ไขแล้ว')
          }
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            console.log('ลบแล้ว')
          }
        }
      ]
    });
    action.present();
  }

}
