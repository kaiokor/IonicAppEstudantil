import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  // Definir as propriedades usadas no HTML
  email: string = '';
  senha: string = '';

  constructor() {}

  // Método de login chamado no botão
  onLogin() {
    if (this.email && this.senha) {
      console.log('Login realizado com:', this.email, this.senha);
      // Adicione lógica de autenticação aqui (como uma chamada de API)
    } else {
      console.log('Por favor, preencha todos os campos');
    }
  }
}
