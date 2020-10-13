import { Component, OnInit } from '@angular/core';
import { IPerson } from './user/models/person';
import { UserManagerService } from './user/services/user-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-final-exam';

  greatPeople: Array<IPerson> = [];

  constructor(private userManagerService: UserManagerService){

  }

  ngOnInit(): void {
    this.userManagerService.people$.subscribe((person) => {
      this.greatPeople = person;
      console.log('API', person);
    });
  }
}
