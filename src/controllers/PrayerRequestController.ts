import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { PrayerRequest } from '../models/PrayerRequest';

export class PrayerRequestController {
    private _afs: AngularFirestore;
    private prayerList: Observable<PrayerRequest[]>;

    constructor(public afs: AngularFirestore){
        this._afs = afs;
    }

    loadPrayerList(): PrayerRequestController {
        this.prayerList = this._afs.collection<PrayerRequest>('prayers').valueChanges();
        return this;
    }

    getPrayerList(): Observable<PrayerRequest[]> {
        return this.prayerList;
    }
}