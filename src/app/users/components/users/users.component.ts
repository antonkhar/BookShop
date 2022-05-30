import { Component, OnInit } from '@angular/core';

import {users} from '../../services/mock-users'
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public USERS: IUser[] = users;

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete(id: number): void{
    const el = this.USERS.findIndex(h => h.id === id);
    this.USERS.splice(el, 1) 
  }

}
