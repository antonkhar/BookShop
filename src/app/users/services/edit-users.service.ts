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
    const index = this.USERS.findIndex(h => h.id === id);
    this.USERS[index] = user;
  }

  public pushUser(user: IUser): void{
    this.USERS.push(user);
  }
}