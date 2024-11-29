import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'aluno',
    loadChildren: () => import('./paginas/aluno/aluno.module').then( m => m.AlunoPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./paginas/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'aulas',
    loadChildren: () => import('./paginas/aulas/aulas.module').then( m => m.AulasPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./paginas/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'aluno',
    loadChildren: () => import('./paginas/aluno/aluno.module').then( m => m.AlunoPageModule)
  },



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
