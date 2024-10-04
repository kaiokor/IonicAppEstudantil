import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // inserir home url: /home icon: home
    //são basicamente os botões no side menu e seus caminhos
    { title: 'Aluno', url: '/aluno', icon: 'school' },
    { title: 'Matérias', url: '/materias', icon: 'layers' },

    
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
