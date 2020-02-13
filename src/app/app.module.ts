import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import 'hammerjs';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/**
 * funciona
 * hecho con
 * Angular CLI: 8.0.6
Node: 12.4.0
OS: darwin x64
Angular: 8.0.3
... common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.800.6
@angular-devkit/build-angular     0.800.6
@angular-devkit/build-optimizer   0.800.6
@angular-devkit/build-webpack     0.800.6
@angular-devkit/core              8.0.6
@angular-devkit/schematics        8.0.6
@angular/animations               7.2.14
@angular/cdk                      7.3.7
@angular/cli                      8.0.6
@angular/material                 7.3.7
@ngtools/webpack                  8.0.6
@schematics/angular               8.0.6
@schematics/update                0.800.6
rxjs                              6.4.0
typescript                        3.4.5
webpack                           4.30.0
 * 
 */