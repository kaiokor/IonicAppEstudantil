import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.page.html',
  styleUrls: ['./aulas.page.scss'],
})
export class AulasPage {
  constructor(public nav: NavController) { }

  abrirNotas(){
    this.nav.navigateForward('notas');
  }

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    return utcDay == 3;
    
  }

  highlightedDates = (isoString: string) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();

    if (utcDay == 9 || utcDay == 16) {
      return {
        textColor: '#F',
        backgroundColor: 'var(--ion-color-danger)',
      };
    }

    if ((utcDay == 2 || utcDay == 23 || utcDay == 30)) {
      return {
        textColor: '#F',
        backgroundColor: 'var(--ion-color-success)',
      };
    }

    return undefined;
  };
}
