import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './domains/login/pages/inicio/inicio.component';
import { PaginaPrincipalComponent } from './domains/main/pages/pagina-principal/pagina-principal.component';
import { PageNotFoundComponent } from './domains/404/pages/404/404.component';
import { ActionCategoryComponent } from './domains/categories/pages/actionCategory/actionCategory.component';
import { CarrerasCategoryComponent } from './domains/categories/pages/carrerasCategory/carrerasCategory.component';
import { CooperativoCategoryComponent } from './domains/categories/pages/cooperativoCategory/cooperativoCategory.component';
import { TerrorCategoryComponent } from './domains/categories/pages/terrorCategory/terrorCategory.component';
import { RolCategoryComponent } from './domains/categories/pages/rolCategory/rolCategory.component';
import { SupervivenciaCategoryComponent } from './domains/categories/pages/supervivenciaCategory/supervivenciaCategory.component';
import { Top2weeksComponent } from './domains/tops/pages/top2weeks/top2weeks.component';
import { TopForeverComponent } from './domains/tops/pages/topForever/topForever.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { CategoryDetailComponent } from './domains/categories/pages/categoryDetail/categoryDetail.component';

const routes: Routes = [
  /* { path: 'login', component: InicioComponent }, */
  /* { path: '', redirectTo: '/login', pathMatch: 'full' }, */
  { path: '', redirectTo: '/userstage/main', pathMatch: 'full' },
  {
    path: 'userstage',
    component: LayoutComponent,
    children: [
      { path: 'main', component: PaginaPrincipalComponent },
      { path: '', redirectTo: '/userstage/main', pathMatch: 'full' },
      { path: 'action', component: ActionCategoryComponent },
      { path: 'carreras', component: CarrerasCategoryComponent },
      { path: 'cooperativo', component: CooperativoCategoryComponent },
      { path: 'terror', component: TerrorCategoryComponent },
      { path: 'rol', component: RolCategoryComponent },
      { path: 'supervivencia', component: SupervivenciaCategoryComponent },
      { path: 'twoWeeks', component: Top2weeksComponent },
      { path: 'forever', component: TopForeverComponent },
      { path: 'detail/:id', component: CategoryDetailComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
