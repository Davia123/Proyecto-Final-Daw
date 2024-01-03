import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './domains/login/pages/inicio/inicio.component';
import { PaginaPrincipalComponent } from './domains/main/pages/pagina-principal/pagina-principal.component';
import { PageNotFoundComponent } from './domains/404/pages/404/404.component';

const routes: Routes = [
  { path: 'login', component: InicioComponent },
  { path: '', component: InicioComponent },
  { path: 'main', component: PaginaPrincipalComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
