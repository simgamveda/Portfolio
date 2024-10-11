import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent  implements OnInit {

  public data:any;
  public months:any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  constructor(private navParams: NavParams,private modalController: ModalController) {}

  ngOnInit() {
    // Get data passed to the modal
    this.data = this.navParams.get('data');
  }

  public dismissModal()
  {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
