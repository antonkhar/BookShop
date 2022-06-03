import { Component, OnInit } from '@angular/core';

import { IUser } from '../../interfaces/user.interface';
import { EditUsersService } from '../../services/edit-users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private _editService: EditUsersService) { }

  ngOnInit(): void {
  }

  public onSave(user: IUser): void{
    this._editService.pushUser(user);
  }
}
