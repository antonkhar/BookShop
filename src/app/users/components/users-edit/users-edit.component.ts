import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IUser } from '../../interfaces/user.interface';
import { EditUsersService } from '../../services/edit-users.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {


  constructor(
    private _route: ActivatedRoute,
    private _editorService: EditUsersService
    ) { }

  ngOnInit(): void {
  }

  public onSave(user: IUser): void{
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._editorService.revriteUser(user, id)
  }
  
}
