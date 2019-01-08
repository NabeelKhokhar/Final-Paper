import { Component, OnInit } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from '../user';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';  

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    public user: User= new User();
    dbUser: AngularFireList<any>

  constructor( public fAuth: AngularFireAuth,
               public db: AngularFireDatabase,
               private router: Router) { 
                this.dbUser = db.list('/users'); 
               }  
  ngOnInit() {
  }
async signup() {
     try  {
      var r =await firebase.auth().createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
}
