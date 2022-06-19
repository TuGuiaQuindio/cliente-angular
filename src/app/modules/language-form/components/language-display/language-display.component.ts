import { Component, Input, OnInit } from '@angular/core';

export type LanguageDisplayDefinition = {
  name: string,
  level: number,
}
@Component({
  selector: 'app-language-display',
  templateUrl: './language-display.component.html',
  styleUrls: ['./language-display.component.scss']
})
export class LanguageDisplayComponent implements OnInit {

  constructor() { }
  @Input() public maxLevel = 6;
  @Input() public level = 0;

  @Input() public name = "";

  ngOnInit(): void {
  }

}
