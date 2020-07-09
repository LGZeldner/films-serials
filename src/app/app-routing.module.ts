import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OrderComponent } from './order/order.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import {AdminComponent} from "./admin/admin.component";
import {AdminConfigComponent} from "./admin-config/admin-config.component";
import {LoginAdminComponent} from "./login-admin/login-admin.component";
import {WorkerComponent} from "./worker/worker.component";
import {CustomerComponent} from "./customer/customer.component";


const routes: Routes = [
  {path: 'main', component: MainComponent},                           /** ссылка на главную*/
  {path: 'order/:id', component: OrderComponent},        /** Ссылка на форму заказа фильмов*/
  {path: 'film-info/:id', component: FilmInfoComponent},           /** Ссылка на страницу с информацией по фильму */
  {path:'worker', component:WorkerComponent},
  {path:'login-admin', component:LoginAdminComponent},
  {path:'admin', component:AdminComponent},
  {path:'admin-config', component:AdminConfigComponent},
  {path:'customer', component:CustomerComponent},
  {path:'main', component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
