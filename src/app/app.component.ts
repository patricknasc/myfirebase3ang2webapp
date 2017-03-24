import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(){

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyChfbiTaN7deX4Dyiggzv3vbq4LHqU50kw",
      authDomain: "fir-crud-f765e.firebaseapp.com",
      databaseURL: "https://fir-crud-f765e.firebaseio.com",
      storageBucket: "fir-crud-f765e.appspot.com",
      messagingSenderId: "450788208288"
    };
    initializeApp(config);

     var root = database().ref();
     root.on('value', function(snap){
       console.log(snap.val());
     })

  }
}
