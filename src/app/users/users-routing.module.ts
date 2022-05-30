import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {
    path:'',
    component: UsersComponent,
  },
  {
    path:'add',
    component: AddUserComponent,
  },
  {
    path: ':id/edit',
    component: UsersEditComponent
  },
  {
    path: ':id',
    component: UsersDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }