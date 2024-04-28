import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCafeComponent, } from './../components/listar-cafe/listar-cafe.component';
import { HttpClientModule } from '@angular/common/http';
import {
  BrowserModule,
  // provideClientHydration,
} from '@angular/platform-browser';



@NgModule({
  declarations: [
    // Remove ListarCafeComponent from declarations array
  ],
  imports: [  
    CommonModule,
    ListarCafeComponent, // Add ListarCafeComponent to imports array
    HttpClientModule,
    BrowserModule
  ],
  // providers: [provideClientHydration()],
  exports: [
    ListarCafeComponent,
  ]
})
export class CafeModule { }
