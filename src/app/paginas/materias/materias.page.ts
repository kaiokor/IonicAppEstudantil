import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

  constructor(public nav: NavController) { }

  abrirAulas(){
    this.nav.navigateForward('aulas');
  }
  
  ngOnInit() {
  }

}
