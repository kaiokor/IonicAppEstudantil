import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  // Declarar as variáveis email e senha
  email: string = '';
  senha: string = '';

  constructor(private navCtrl: NavController) {}

  // Função de login
  onLogin() {
    if (this.email && this.senha) {
      // Lógica de autenticação, como chamada de API, vai aqui
      console.log('Login realizado com:', this.email, this.senha);
      
      // Navegar para a página principal após login bem-sucedido
      this.navCtrl.navigateForward('/home');
    } else {
      console.log('Por favor, preencha todos os campos');
    }
  }

  // Função de recuperação de senha
  onForgotPassword() {
    console.log('Redirecionando para recuperação de senha');
    // Navegar para a página de recuperação de senha
    this.navCtrl.navigateForward('/recuperar-senha');
  }
}
