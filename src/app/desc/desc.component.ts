import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent {
  @Input() public parentData: any;
  constructor() {}

}
