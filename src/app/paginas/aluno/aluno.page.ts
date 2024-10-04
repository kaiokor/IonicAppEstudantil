import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  constructor(public nav: NavController) { }

  abrirPagina(){
    this.nav.navigateForward('notas');
  }

  abrirNotas(){
    this.nav.navigateForward('notas');
  }
  abrirAulas(){
    this.nav.navigateForward('aulas');
  }

  ngOnInit() {
  }

  
}
