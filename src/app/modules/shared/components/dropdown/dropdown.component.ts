import { Component, HostBinding, Input, OnInit } from '@angular/core';

export type DropdownOption = {
  label: string,
  url: string
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }
  @HostBinding('class.hide')
  @Input() public hidden = false;
  public options: DropdownOption[] = [
    { label: "Mi perfil", url: "/settings/information" },
    { label: "Seguridad", url: "/settings/security" },
  ]

  public hide() {
    this.hidden = true;
  }

  public show() {
    this.hidden = false;
  }

  ngOnInit(): void {
  }

}
