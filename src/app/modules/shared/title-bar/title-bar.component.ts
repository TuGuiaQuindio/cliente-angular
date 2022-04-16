import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  @Input() public title: string = "";
  @Input() public subtitle: string = "";
  @Input() public align: string = "";
  @Input() public size: string = "normal";
  @Input() public colorClass: "default" | "secondary" = "default";

  public get stateClasses(): string {
    return [this.align, this.size, this.colorClass].join(" ");
  }

  public get showSubtitle(): boolean { return this.subtitle.length > 0 };

  constructor() { }

  ngOnInit(): void {
  }

}
