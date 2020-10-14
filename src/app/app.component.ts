import { Component, OnInit } from '@angular/core';
import { IPerson, IUserResponse, IName } from './user/models/person';
import { UserManagerService } from './user/services/user-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-final-exam';

  greatPeople: IPerson = {
    name: { first: '', last: '' },
    gender: '',
    knowFor: '',
    profession: '',
  };

  constructor(private userManagerService: UserManagerService) {}

  ngOnInit(): void {
    this.userManagerService.getPerson().subscribe((response: IUserResponse) => {
      const { data, status } = response;
      this.greatPeople = data;
      console.log('json', data, 'status', status);
    });
  }
}
