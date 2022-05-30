import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IUser } from '../../interfaces/user.interface';
import { EditUsersService } from '../../services/edit-users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  @Input() editUser?: IUser

  constructor(
    private _route: ActivatedRoute,
    private _editorService: EditUsersService,
    private _router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  public getUsers(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.editUser = this._editorService.getUser(id)
  }

  public goBack(): void {
    this._router.navigateByUrl('/users').then();
  }
}

