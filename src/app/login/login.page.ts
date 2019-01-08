import { Component, OnInit } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from '../user';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public user: User = new User();
  dbUser;
  match;
  constructor(public db: AngularFireDatabase,
  private router: Router) {

    this.dbUser= db.list('/user')
    .valueChanges()
    .subscribe(res=> {
      this.dbUser=res; 
    })
   }

  ngOnInit() {
 
}

 async login() {
    try {
      var check = await firebase.auth().signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (check) {
        for (var id in this.dbUser) {
          if (firebase.auth().currentUser.uid == this.dbUser[id].id) {
            this.dbUser[id];
    
           
          }
        }
        localStorage.setItem('password', (this.user.password));
        
      }
    }
    
    
  }


}
