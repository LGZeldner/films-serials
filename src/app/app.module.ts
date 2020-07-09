import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormReadyComponent } from './order/form-ready.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { FilmInfoComponent } from './film-info/film-info.component';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterModule } from '@angular/router';
import {NgxMaskModule} from "ngx-mask";
import { AdminComponent } from './admin/admin.component';
import { AdminConfigComponent } from './admin-config/admin-config.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { WorkerComponent } from './worker/worker.component';
import { CustomerComponent } from './customer/customer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormReadyComponent,
    FilmInfoComponent,
    AdminComponent,
    AdminConfigComponent,
    LoginAdminComponent,
    WorkerComponent,
    CustomerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    TextMaskModule,
    NgxMaskModule.forRoot(/*options*/),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
