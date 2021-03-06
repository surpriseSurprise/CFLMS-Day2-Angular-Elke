import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
        {
                path: "", component: HomeComponent
        },
        {
                path: "list", component: ListComponent,
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
