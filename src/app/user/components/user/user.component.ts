import { Component, Input, OnInit } from '@angular/core';
import { IName } from '../../models/person';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() name: IName = { first: '', last: '' };
  @Input() gender: string;
  @Input() profession: string;
  @Input() knowFor: string;

  constructor() {}

  ngOnInit(): void {}
}
