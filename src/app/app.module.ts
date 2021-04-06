import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Ajax
import { HttpClientModule } from '@angular/common/http';

// Mis componentes
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home.component";
import { ProductosListComponent } from "./components/productos-list.component";
import { ErrorComponent } from "./components/error.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosListComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
