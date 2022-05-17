import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  constructor(public element: ElementRef) { }

  ngOnInit(): void {
  }

  public setHeight(value: number, unit: string = "px") {
    const element = this.element.nativeElement as HTMLElement;
    element.style.height = `${value}${unit}`
  }

  public setWidth(value: number, unit: string = "px") {
    const element = this.element.nativeElement as HTMLElement;
    element.style.width = `${value}${unit}`
  }

}
