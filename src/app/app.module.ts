import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { InicioComponent } from './domains/login/pages/inicio/inicio.component';
import { FooterComponent } from './domains/shared/components/footer/footer.component';
import { PaginaPrincipalComponent } from './domains/main/pages/pagina-principal/pagina-principal.component';
import { CarrouselComponent } from './domains/main/components/carrousel/carrousel.component';
import { AppRoutingModule } from './app-routing.module';
import { TimerComponent } from './domains/shared/components/timer/timer.component';
import { PageNotFoundComponent } from './domains/404/pages/404/404.component';
import { ActionCategoryComponent } from './domains/categories/pages/actionCategory/actionCategory.component';
import { CarrerasCategoryComponent } from './domains/categories/pages/carrerasCategory/carrerasCategory.component';
import { CooperativoCategoryComponent } from './domains/categories/pages/cooperativoCategory/cooperativoCategory.component';
import { TerrorCategoryComponent } from './domains/categories/pages/terrorCategory/terrorCategory.component';
import { RolCategoryComponent } from './domains/categories/pages/rolCategory/rolCategory.component';
import { SupervivenciaCategoryComponent } from './domains/categories/pages/supervivenciaCategory/supervivenciaCategory.component';
import { Top2weeksComponent } from './domains/tops/pages/top2weeks/top2weeks.component';
import { TopForeverComponent } from './domains/tops/pages/topForever/topForever.component';
import { TopTableComponent } from './domains/tops/components/top-table/top-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    CarrouselComponent,
    PageNotFoundComponent,
    TimerComponent,
    ActionCategoryComponent,
    CarrerasCategoryComponent,
    CooperativoCategoryComponent,
    TerrorCategoryComponent,
    RolCategoryComponent,
    SupervivenciaCategoryComponent,
    Top2weeksComponent,
    TopForeverComponent,
    TopTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HttpClient,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
