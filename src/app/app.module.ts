import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// OTROS
import {NgxPaginationModule} from 'ngx-pagination';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//    ANGULAR MATERIAL

import { ListpersonComponent } from './components/listperson/listperson.component';
import { NewpersonComponent } from './components/newperson/newperson.component';
import { AppleComponent } from './components/apple/apple.component';

//  SERVICE


@NgModule({ 
  declarations: [  
    AppComponent,
    NavbarComponent,
  
  
   
    ListpersonComponent,
    NewpersonComponent,
    AppleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
