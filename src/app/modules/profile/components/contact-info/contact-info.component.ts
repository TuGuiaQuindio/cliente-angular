import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from '../guide-card/guide-card.component';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor() { }
  @Input() public tel?: string;
  @Input() public email?: string;

  ngOnInit(): void {
  }

}
