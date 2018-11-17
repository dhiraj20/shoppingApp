import { AppSettings } from './app.settings';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';

import { AppInterceptor } from './theme/utils/app-interceptor.service';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { SidenavMenuComponent } from './theme/components/sidenav-menu/sidenav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SidenavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppSettings,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
