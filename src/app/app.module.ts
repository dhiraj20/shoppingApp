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
import { CategoryListComponent } from './theme/components/category-list/category-list.component';
import { AppService } from './app.service';
import { TopMenuComponent } from './theme/components/top-menu/top-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { MenuComponent } from './theme/components/menu/menu.component';
import { OptionsComponent } from './theme/components/options/options.component';
import { FooterComponent } from './theme/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SidenavMenuComponent,
    CategoryListComponent,
    TopMenuComponent,
    BreadcrumbComponent,
    MenuComponent,
    OptionsComponent,
    FooterComponent
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
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
