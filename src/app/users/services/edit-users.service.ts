import { Injectable } from '@angular/core';

import { IUser } from '../interfaces/user.interface';
import { users } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class EditUsersService {

  public USERS: IUser[] = users;

  constructor() { }

  public getUser(id: number): IUser{
    return (this.USERS.find(h => h.id === id)) as IUser
  }

  public revriteUser(user: IUser, id: number): void{ 
    this.USERS.find(h => h.id === id)!.firstName = user.firstName;
    this.USERS.find(h => h.id === id)!.lastName = user.lastName;
    this.USERS.find(h => h.id === id)!.patronymic = user.patronymic;
    this.USERS.find(h => h.id === id)!.dateOfBirth = user.dateOfBirth;
    this.USERS.find(h => h.id === id)!.isMan = user.isMan;
    this.USERS.find(h => h.id === id)!.characteristic = user.characteristic;
    this.USERS.find(h => h.id === id)!.address = user.address;
    this.USERS.find(h => h.id === id)!.photo = user.photo;
    this.USERS.find(h => h.id === id)!.email = user.email;
    this.USERS.find(h => h.id === id)!.phone = user.phone;


  }

  public pushUser(user: IUser): void{
    this.USERS.push(user);
  }
}