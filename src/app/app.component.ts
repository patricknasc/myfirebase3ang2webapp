import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';
import {AngularFire} from "angularfire2/angularfire2";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private af: AngularFire){

    const messages$ : FirebaseListObservable<any> = af.database.list('messages');
    messages$.subscribe(
      val => console.log(val)
    );

  }
}
