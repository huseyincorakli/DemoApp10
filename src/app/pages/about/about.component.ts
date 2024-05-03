import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template:`
  About Page
  <ng-container *ngFor="let user of users">
    <p *ngIf="user.age>25">{{user.name}}</p>
  </ng-container>

  <!-- ngcontainer yerine span etiketini yazarak inceleyiniz. -->
  `
})
export class AboutComponent {

  users=[
    {name:'hüseyin',age:25},
    {name:'haci',age:25},
    {name:'mustafa',age:24},
    {name:'hasan',age:27},
  ]
}
