import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-sendmessage',
  standalone: true,
  imports: [CommonModule],
  template:`
  <p>Send Message Component</p> 
  <ng-content select="header"></ng-content>
  <ng-content select="body"></ng-content>
  <ng-content select="footer"></ng-content>
  <ng-content select=".ozelIsimliContent"></ng-content>
  
  `
})
export class SendmessageComponent {
}

