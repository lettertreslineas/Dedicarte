import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([{path:'', component: ContenedorComponent },]) ],
  declarations: [ AppComponent, HelloComponent, ContenedorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
