import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output()
  public savingUserEvent = new EventEmitter<any>();

  public firstNameControl!: FormControl;
  public usersFormGroup!: FormGroup

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.usersFormGroup = new FormGroup({
      firstName: new FormControl('first name',Validators.minLength(5)),
      lastName: new FormControl('last name'),
      patronymic: new FormControl('patronymic'),
      dateOfBirth: new FormControl(new Date()),
      isMan: new FormControl(null,Validators.required),
      characteristic: new FormControl('characteristic'),
      address: new FormControl('address'),
      photo: new FormControl('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/User.svg/768px-User.svg.png'),
      email: new FormControl('email@mail.ru',Validators.email),
      phone: new FormControl('phone')
    });
  }

  public toSave(): void{
    const newUser: IUser = this.usersFormGroup.value
    this.savingUserEvent.emit(newUser);
    this.goBack();
  }

  public goBack(): void{
    this._router.navigateByUrl('/users').then();
  }

  
}