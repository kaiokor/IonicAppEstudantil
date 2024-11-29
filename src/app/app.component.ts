import { Component, ViewChild } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { IonMenu } from '@ionic/angular';

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

  @ViewChild(IonMenu) menu!: IonMenu;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Se está na Tela de Login
        if (this.router.url === '/landing') {
          // Disabilita o menu
          this.menu.disabled = true;
        } else {
          // Habilita para outras paginas
          this.menu.disabled = false;
        }
      }
    })
  }

  async logout(){
    this.authService.signOut().then(()=>{
      this.router.navigate(['/landing'])
    }).catch((error)=>{
      console.log(error);
    })
  }
}
