import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { GuardService, InterceptorService } from './core/index';
import { HomeComponent, LoginComponent } from './pages/index';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { ToastCustomOptions } from './helper/index';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxPaginationModule,
    ToastModule.forRoot()
  ],
  providers: [
    GuardService,
    {
      provide: ToastOptions,
      useClass: ToastCustomOptions
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
