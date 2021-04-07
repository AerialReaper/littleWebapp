import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

// Ajax
import { HttpClientModule } from '@angular/common/http';

// Forms
import { FormsModule } from "@angular/forms";

// Mis componentes
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home.component";
import { ProductosListComponent } from "./components/productos-list.component";
import { ErrorComponent } from "./components/error.component";
import { ProductoAddComponent } from "./components/producto-add.component";
import { ProductoDetailComponent } from "./components/producto-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosListComponent,
    ProductoAddComponent,
    ProductoDetailComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
