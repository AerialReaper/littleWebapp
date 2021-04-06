import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Mis componentes
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home.component";
import { ErrorComponent } from "./components/error.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
