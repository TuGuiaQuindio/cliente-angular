import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
const tailwind = require('../../../../../../tailwind.config');

@Component({
  selector: 'app-color-tables',
  templateUrl: './color-tables.component.html',
  styleUrls: ['./color-tables.component.scss']
})
export class ColorTablesComponent implements OnInit {

  public colorClasses: string[] = [ ]

  constructor() {
    this.colorClasses = this.buildColors();
  }

  private printColors() {
    let content = "";
    for(const className of this.colorClasses) {
      content += `<article class="${className}">${className}</article>\n`
    }
    console.warn(content)
  }

  private buildColors(): string[] {
    const { colors } = tailwind.theme.extend;
    const output: string[] = [];
    for(const color of Object.keys(colors)) {
      const value = colors[color]
      let currentClass = "";
      if (typeof value === 'object') {
        for(const variant of Object.keys(value)) {
          currentClass = `bg-${color}-${variant}`
          output.push(currentClass);
        }
      } else {
        currentClass = `bg-${color}`
        output.push(currentClass);
      }
    }
    return output;
  }

  ngOnInit(): void {
  }

}
