import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-display-short',
  templateUrl: './language-display-short.component.html',
  styleUrls: ['./language-display-short.component.scss']
})
export class LanguageDisplayShortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public language = '';
  @Input() public level = '';

}
