import { Component, Input, OnInit } from '@angular/core';
import { of, map } from 'rxjs';

export type Language = { name: string, level: number }
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor() { }
  @Input() public title = '';
  @Input() public languages: Language[] = [
    { name: "Ingles", level: 4.5 },
    { name: "Ruso", level: 3.1 },
    { name: "Ingles", level: 4.5 },
    { name: "Ruso", level: 3.1 },
    { name: "Ingles", level: 4.5 },
    { name: "Ruso", level: 3.1 },
  ];
  @Input() public badge = [];
  @Input() public additions = [];
  @Input() public aboutMe = '';

  public get languages$() {
    return of(this.languages)
      .pipe(
        map((languages) => languages.sort((a, b) => a.level < b.level ? 1 : -1).slice(0, 3)),
      )
  }

  ngOnInit(): void {
  }

}
