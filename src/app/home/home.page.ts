import { Component, ChangeDetectorRef } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private fire: AngularFireAuth, public ref: ChangeDetectorRef, public googleplus: GooglePlus ) {}

  loginWithGoogle() {
    this.fire.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then( () => {
      this.fire.auth.getRedirectResult().then( res => {
        this.ref.detectChanges();
        console.log(res);
      });
    });
  }


  loginwithfb() {
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
      console.log(res);
    });
  }
  login() {
    this.googleplus.login({
      webClientId: '939702638082-c2fegsr1sc3nhvs93mt7iu8e0jbj11gm.apps.googleusercontent.com',
      offline: true
    })
    .then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(suc => {
        alert('Login successfully');
      }).catch(err => console.error('Error: ', err));
    });
  }
}

