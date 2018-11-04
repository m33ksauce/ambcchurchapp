import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrayerRequest } from '../../models/prayerrequest'

@Component({
  selector: 'page-prayerRequests',
  templateUrl: 'prayerRequests.html'
})
export class prayerRequestsPage {
  myPrayerList: Array<PrayerRequest>;

  constructor(public navCtrl: NavController) {
    this.myPrayerList = new Array<PrayerRequest>();
    var prayer = new PrayerRequest("1",
      "Please pray for my sister",
      "She's just really not doing well",
      "Chris");

    this.myPrayerList.push(prayer);
  }

}
