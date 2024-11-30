import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Auth, User } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth, private auth: Auth) { }

  async loginUser(email:string,password:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  async signOut(){
    return await this.ngFireAuth.signOut()
  }

  getProfile(): User | null{
    return this.auth.currentUser;
  }
}
