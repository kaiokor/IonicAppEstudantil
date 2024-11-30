import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {
  nome: string = '';
  semestre: string = '';
  user: any;


  @ViewChild('nomeRef', { static: true }) nomeRef!: ElementRef;
  @ViewChild('semestreRef', { static: true}) semestreRef!: ElementRef;

  constructor(public nav: NavController, private firestore: Firestore, private renderer: Renderer2, private authService: AuthenticationService) { }

  abrirPagina(){
    this.nav.navigateForward('notas');
  }

  abrirNotas(){
    this.nav.navigateForward('notas');
  }
  abrirAulas(){
    this.nav.navigateForward('aulas');
  }

  async ngOnInit() {
    this.user = this.authService.getProfile();

    if (!this.user || !this.user.uid) {
      console.error('User is not authenticated or user ID is not available.');
      return; // Exit if user is not defined
    }

    const userQuery = query(collection(this.firestore, 'aluno'), where('uid', '==', this.user.uid)); // Assuming this.user.uid is defined
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data(); // Get the first document's data
      this.nome = userData['nome']; // Get the name
      this.semestre = userData['semestre']; // Get the semestre

      console.log('User Name: ', this.nome);
      console.log('User Semestre: ', this.semestre);

      // Create and append the user's name to the DOM
      const nomeText = this.renderer.createElement('ion-text');
      const nomeContent = this.renderer.createText(this.nome);
      this.renderer.appendChild(nomeText, nomeContent);
      this.renderer.appendChild(this.nomeRef.nativeElement, nomeText);

      // Create and append the user's semestre to the DOM
      const semestreText = this.renderer.createElement('ion-text');
      const semestreContent = this.renderer.createText(this.semestre);
      this.renderer.appendChild(semestreText, semestreContent);
      this.renderer.appendChild(this.semestreRef.nativeElement, semestreText);
    } else {
      console.log('No user found with the specified UId.');
    }
  }

  
}
