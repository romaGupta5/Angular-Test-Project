import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path :'' , component : HomeComponent},
  {path:'about' , loadChildren:()=>import('./about/about.module').then(x=>x.AboutModule)},
  {path:'services' , loadChildren:()=>import('./services/services.module').then(x=>x.ServicesModule)},
  {path:'contact-us' , loadChildren:()=>import('./contact-us/contact-us.module').then(x=>x.ContactUsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
