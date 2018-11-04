import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrayerRequest } from '../../models/PrayerRequest';
import { PrayerRequestController } from '../../controllers/PrayerRequestController';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-prayerRequests',
  templateUrl: 'prayerRequests.html'
})
export class prayerRequestsPage {
  private _prayerRequestController: PrayerRequestController;
  myPrayerList: Observable<PrayerRequest[]>;

  constructor(public navCtrl: NavController, public afs: AngularFirestore) {
    this._prayerRequestController = new PrayerRequestController(afs);
    this.myPrayerList = this._prayerRequestController.loadPrayerList().getPrayerList()
  }
}
