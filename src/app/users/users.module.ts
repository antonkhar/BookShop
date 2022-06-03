import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { AddUserComponent } from './components/add-user/add-user.component';



@NgModule({
  declarations: [
    UserFormComponent,
    UsersComponent,
    UsersDetailComponent,
    UsersEditComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    RouterModule
  ]
})
export class UsersModule { }
