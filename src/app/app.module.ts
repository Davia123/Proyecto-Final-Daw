import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';
import { InicioComponent } from './domains/login/pages/inicio/inicio.component';
import { FooterComponent } from './domains/shared/components/footer/footer.component';
import { PaginaPrincipalComponent } from './domains/main/pages/pagina-principal/pagina-principal.component';
import { CarrouselComponent } from './domains/main/components/carrousel/carrousel.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    CarrouselComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
