import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieAddComponent} from '../app/movie-add/movie-add.component';
import {MovieEditComponent} from '../app/movie-edit/movie-edit.component';
import {MovieListComponent} from '../app/movie-list/movie-list.component';
const routes: Routes = [
  {
    path:' ',
    redirectTo:'/user',
    
  },
  {
    path: 'user',
    component: MovieListComponent
  },
  {
    path:'newuser',
    component:MovieAddComponent
  },
  {
    path:'edituser/:id',
    component:MovieEditComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
