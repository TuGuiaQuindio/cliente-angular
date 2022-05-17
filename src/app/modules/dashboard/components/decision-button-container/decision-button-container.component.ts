import { Component, Input, Output, EventEmitter } from '@angular/core';

export type ButtonProperties = { label: string, disabled: boolean };
export type DecisionButtonDefinition = { cancel: ButtonProperties & { hide?: boolean }, accept: ButtonProperties & { hide?: boolean } };

@Component({
  selector: 'app-decision-button-container',
  templateUrl: './decision-button-container.component.html',
  styleUrls: ['./decision-button-container.component.scss']
})
export class DecisionButtonContainerComponent {

  constructor() { }

  @Input() public title = '';
  @Input() public buttonDefinition: DecisionButtonDefinition = {
    cancel: { label: "Cancelar", disabled: false },
    accept: { label: "Aceptar", disabled: false },
  };

  @Output() public acceptclick = new EventEmitter();
  @Output() public cancelclick = new EventEmitter();

  public onCancelClick() {
    this.cancelclick.emit();
  }

  public onAcceptClick() {
    this.acceptclick.emit();
  }
}
