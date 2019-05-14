import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { GetComponent } from './get/get.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'create', 
    component: CreateComponent,
  },
  {
    path: 'get',
  component: GetComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
